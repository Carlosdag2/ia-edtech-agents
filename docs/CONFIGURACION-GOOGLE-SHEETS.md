# Vincular Google Forms a Google Sheets

Una vez creado el Google Form (`CONFIGURACION-GOOGLE-FORMS.md`),
conecta las respuestas a una hoja de cálculo para tener el CRM
inicial de leads.

---

## 1. Vincular respuestas

1. Abre el Google Form en el editor.
2. Pestaña **Respuestas** (parte superior).
3. Icono de **Hojas de cálculo** (verde) → **Crear hoja de cálculo
   nueva**.
4. Nombre sugerido: `Leads — Oficina Agéntica EdTech`.
5. Pulsa **Crear o seleccionar**.

A partir de ahora, cada envío POST de `procesar-lead.php` →
Google Form → Sheets generará una fila automáticamente.

## 2. Columnas esperadas

El Sheets tendrá una columna por cada pregunta del Form, en el orden
en que fueron creadas. La primera columna (`Marca temporal`) la
añade Google automáticamente.

| Columna | Origen |
|---|---|
| Marca temporal | Auto Google |
| Nombre | Frontend |
| Correo electrónico | Frontend |
| Teléfono | Frontend |
| Empresa | Frontend |
| Cargo | Frontend |
| Web | Frontend |
| Tipo de organización | Frontend |
| Tamaño del equipo | Frontend |
| Google Workspace | Frontend |
| Área prioritaria | Frontend |
| Herramientas actuales | Frontend |
| Mensaje | Frontend |
| RGPD | Backend → `"Sí"` |
| UTM Source / Medium / Campaign / Content / Term | Frontend (capturados de URL) |
| IP | Backend |
| User Agent | Backend |
| Lead Score | Backend (calculado) |
| Estado del lead | Backend → `"Nuevo"` |

## 3. Vistas y filtros recomendados

En el Sheets:

- **Vista filtrada "Hot leads"**: `Lead Score >= 60`.
- **Vista filtrada "Solo universidades / escuelas"**:
  `Tipo de organización` ∈ {Universidad, Escuela de negocio,
  Plataforma EdTech}.
- **Pivot table mensual**: por mes / `utm_source` / `Estado del lead`.

## 4. Conectar a Looker Studio (opcional)

1. En Looker Studio → **Crear → Informe**.
2. Conector **Google Sheets** → selecciona la hoja de leads.
3. Construye un dashboard con:
   - Leads por día / semana / mes.
   - Conversión por `utm_source` y `utm_campaign`.
   - Reparto por `Tipo de organización` y `Tamaño del equipo`.
   - Distribución de `Lead Score`.

## 5. Notificaciones internas

Opciones rápidas para que tu equipo se entere de cada nuevo lead:

- **Notificación nativa**: Sheets → Herramientas → Reglas de
  notificación → "Se envía un formulario" → al instante.
- **Apps Script / Make**: ver `AUTOMATIZACIONES-MAKE-APPS-SCRIPT.md`.

## 6. Buenas prácticas

- Bloquea el rango con `Lead Score` y `Estado del lead` para que
  sólo se edite por script.
- Añade una columna manual `Notas comerciales` separada de los
  campos auto.
- Haz backup semanal del Sheets (Archivo → Crear copia).
