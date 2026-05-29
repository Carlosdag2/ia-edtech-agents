# Automatizaciones posteriores con Make y Apps Script

Una vez los leads están llegando al Sheets (`CONFIGURACION-GOOGLE-SHEETS.md`),
el siguiente paso es automatizar:

```
Nuevo lead en Google Sheets
        ↓
Clasificación automática
        ↓
Recalcular / revisar lead score
        ↓
Aviso interno (email / Telegram / Slack)
        ↓
Diagnóstico preliminar con IA usando los datos del formulario
        ↓
Email personalizado al lead (opcional)
        ↓
Creación de tarea comercial / evento de seguimiento
```

Este documento describe **dos vías equivalentes**: Apps Script
(nativo, gratis) y Make (visual, más rápido de mantener).

---

## Opción A — Apps Script (nativo de Google)

### A1. Trigger sobre nueva fila

1. En el Google Sheets de leads → **Extensiones → Apps Script**.
2. Pega un script tipo:

```js
function onFormSubmit(e) {
  const v = e.namedValues;
  const lead = {
    nombre: (v["Nombre"]?.[0]) || "",
    email: (v["Correo electrónico"]?.[0]) || "",
    empresa: (v["Empresa"]?.[0]) || "",
    tipo: (v["Tipo de organización"]?.[0]) || "",
    tamano: (v["Tamaño del equipo"]?.[0]) || "",
    area: (v["Área donde se pierde más valor"]?.[0]) || "",
    score: parseInt((v["Lead Score"]?.[0]) || "0", 10),
    mensaje: (v["Cuéntanos tu situación"]?.[0]) || "",
  };

  classify(lead);
  notifyTeam(lead);
  // generateDiagnosis(lead); // ver A4
}

function classify(lead) {
  // Ejemplo: ajustar score y estado en la propia hoja
  // (requiere localizar la fila con la marca temporal)
}

function notifyTeam(lead) {
  const subject = `Nuevo lead EdTech — ${lead.empresa} (score ${lead.score})`;
  const body = `Empresa: ${lead.empresa}\nTipo: ${lead.tipo}\nTamaño: ${lead.tamano}\nÁrea: ${lead.area}\nScore: ${lead.score}\n\n${lead.mensaje}`;
  MailApp.sendEmail("comercial@iapower.es", subject, body);
}
```

3. **Triggers** (icono reloj) → añadir trigger:
   - Función: `onFormSubmit`
   - Evento: **Al enviarse el formulario**.

### A2. Aviso a Telegram (opcional)

Crea un bot en @BotFather, guarda el `TOKEN` y `CHAT_ID` en
**Project Settings → Script Properties**.

```js
function notifyTelegram(text) {
  const props = PropertiesService.getScriptProperties();
  const token = props.getProperty("TG_TOKEN");
  const chat = props.getProperty("TG_CHAT_ID");
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  UrlFetchApp.fetch(url, {
    method: "post",
    payload: { chat_id: chat, text, parse_mode: "HTML" },
  });
}
```

### A3. Tarea en Calendar

```js
function createFollowUp(lead) {
  const cal = CalendarApp.getDefaultCalendar();
  const when = new Date(Date.now() + 24 * 60 * 60 * 1000);
  cal.createEvent(
    `Seguimiento: ${lead.empresa}`,
    when,
    new Date(when.getTime() + 30 * 60 * 1000),
    { description: `Lead score ${lead.score}\n${lead.email}\n${lead.mensaje}` },
  );
}
```

### A4. Diagnóstico preliminar con IA (Gemini)

Usa la API de Gemini (clave en Script Properties como `GEMINI_API_KEY`):

```js
function generateDiagnosis(lead) {
  const apiKey = PropertiesService.getScriptProperties().getProperty("GEMINI_API_KEY");
  const prompt = `Eres consultor EdTech. Cliente: ${lead.empresa} (${lead.tipo}, equipo ${lead.tamano}).
Área prioritaria: ${lead.area}. Situación: "${lead.mensaje}".
Devuelve en 5 bullets el diagnóstico inicial y 3 quick wins de Oficina Agéntica EdTech.`;
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${apiKey}`;
  const res = UrlFetchApp.fetch(url, {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
  });
  const json = JSON.parse(res.getContentText());
  return json?.candidates?.[0]?.content?.parts?.[0]?.text || "";
}
```

Guarda el texto resultante en una columna nueva
("Diagnóstico IA") de la fila correspondiente.

### A5. Email personalizado al lead (opcional)

```js
function sendLeadEmail(lead, diagnosis) {
  const html = `<p>Hola ${lead.nombre.split(' ')[0]},</p>
  <p>Gracias por solicitar el diagnóstico de Oficina Agéntica EdTech.
  Estos son los primeros puntos que vemos en tu caso:</p>
  <pre style="font-family:inherit;white-space:pre-wrap;">${diagnosis}</pre>
  <p>En las próximas 24h te contactaremos para profundizar.</p>`;
  MailApp.sendEmail({ to: lead.email, subject: "Tu diagnóstico EdTech — IA Power", htmlBody: html });
}
```

---

## Opción B — Make.com (Integromat)

Escenario sugerido:

1. **Google Sheets → Watch Rows** (en la hoja de leads).
2. **Router** con dos ramas:
   - **Notificación interna**: Email / Telegram / Slack con datos clave.
   - **Diagnóstico IA**: OpenAI / Gemini → genera texto.
3. **Google Sheets → Update Row**: escribe el diagnóstico en la fila.
4. **Filter**: si `Lead Score >= 60` → Email personalizado al lead.
5. **Google Calendar → Create Event**: tarea de seguimiento a 24h.
6. **HubSpot / Pipedrive / Notion** (opcional): crear contacto/oportunidad.

Ventajas Make:
- Visual y fácil de ajustar por marketing/comercial.
- Reintentos y logs gratis.
- Conectores listos para CRMs.

---

## Recomendación

- **Empieza con Apps Script** (gratis, 100% Google) para
  notificación + tarea de seguimiento.
- Cuando crezca el volumen o aparezca CRM externo, migra los
  flujos comerciales a **Make**.
- Mantén el `lead_score` y `lead_status` como columnas
  "fuente de verdad" para todos los procesos posteriores.
