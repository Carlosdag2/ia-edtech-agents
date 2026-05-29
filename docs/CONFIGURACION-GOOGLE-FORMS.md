# Configuración del Google Form oculto

El Google Form es el "almacén intermedio" entre el endpoint PHP y la
hoja de cálculo. **El usuario final no lo ve**: el frontend envía al
PHP, y el PHP envía al Google Form desde servidor.

---

## 1. Crear el Google Form

1. Ve a [forms.google.com](https://forms.google.com) → **+ En blanco**.
2. Título sugerido: `Oficina Agéntica EdTech — Captura interna`.
3. Crea **exactamente estas preguntas, en este orden**:

| # | Pregunta | Tipo | Obligatorio |
|---|---|---|---|
| 1 | Nombre | Respuesta corta | ✔ |
| 2 | Correo electrónico | Respuesta corta | ✔ |
| 3 | Teléfono | Respuesta corta |  |
| 4 | Empresa | Respuesta corta | ✔ |
| 5 | Cargo | Respuesta corta |  |
| 6 | Web de la institución | Respuesta corta |  |
| 7 | Tipo de organización | Desplegable | ✔ |
| 8 | Tamaño del equipo | Desplegable | ✔ |
| 9 | ¿Usáis Google Workspace? | Desplegable | ✔ |
| 10 | Área donde se pierde más valor | Desplegable | ✔ |
| 11 | Herramientas actuales | Párrafo |  |
| 12 | Cuéntanos tu situación | Párrafo |  |
| 13 | RGPD aceptado | Respuesta corta | ✔ |
| 14 | UTM Source | Respuesta corta |  |
| 15 | UTM Medium | Respuesta corta |  |
| 16 | UTM Campaign | Respuesta corta |  |
| 17 | UTM Content | Respuesta corta |  |
| 18 | UTM Term | Respuesta corta |  |
| 19 | IP | Respuesta corta |  |
| 20 | User Agent | Párrafo |  |
| 21 | Lead Score | Respuesta corta |  |
| 22 | Estado del lead | Respuesta corta |  |

> Para los desplegables, usa exactamente las mismas opciones que
> aparecen en el formulario de la landing (`src/components/LeadForm.tsx`).
> Si las opciones no coinciden, Google Forms rechaza el envío.

4. **Configuración del formulario** → desactiva:
   - "Limitar a 1 respuesta"
   - "Recopilar direcciones de correo electrónico"
   - "Requiere iniciar sesión"

## 2. Obtener la URL `formResponse`

1. Pulsa **Vista previa** (icono del ojo) → se abre el formulario
   público.
2. Copia la URL pública: algo tipo
   `https://docs.google.com/forms/d/e/FORM_ID/viewform`.
3. Sustituye `viewform` por `formResponse`:
   `https://docs.google.com/forms/d/e/FORM_ID/formResponse`
4. Pega esa URL en `api/config.php` → `google_form_url`.

## 3. Obtener cada `entry.xxxxxxxxxx`

Hay dos formas:

### Opción A — Pre-rellenar (recomendada)

1. En el editor del Google Form, menú ⋮ → **Obtener enlace
   prellenado**.
2. Rellena cada campo con algo único (p.ej. `NOMBRE_TEST`).
3. Pulsa **Obtener enlace**.
4. Copia el enlace generado. Verás algo así:
   ```
   ...viewform?entry.1234567890=NOMBRE_TEST&entry.9876543210=...
   ```
5. Cada `entry.XXXXX` es el ID del campo correspondiente.
6. Pégalos uno a uno en `api/config.php` → `entries`.

### Opción B — Inspeccionar HTML

1. Abre la vista pública del form.
2. Click derecho → **Ver código fuente**.
3. Busca `entry.` en el HTML — cada `<input>` tiene su `name="entry.XXXXX"`.

## 4. Vincular el Form a Google Sheets

Ver `CONFIGURACION-GOOGLE-SHEETS.md`.

## 5. Probar el envío desde PHP

Desde el navegador, en la pestaña **Network** de DevTools, envía el
formulario de la landing y comprueba:

- `POST /api/procesar-lead.php` → 200 con
  `{"ok":true,"message":"Solicitud recibida correctamente"}`.
- La nueva fila aparece en el Sheets vinculado.

Si no llega:

- Activa `debug => true` en `config.php`.
- Asegúrate de que el campo "RGPD aceptado" en el Form acepta el
  valor `Sí` (lo que envía el backend).
