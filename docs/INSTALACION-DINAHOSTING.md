# Instalación en Dinahosting

Guía paso a paso para publicar **Oficina Agéntica EdTech** en Dinahosting
usando FTP o el gestor de archivos del panel.

---

## 1. Compilar el frontend

Desde la raíz del proyecto:

```bash
npm install
npm run build
```

Esto genera el bundle estático (HTML + CSS + JS hasheados) en `dist/`
(o `.output/public/` si es TanStack Start).

## 2. Empaquetar `public-ready/`

```bash
bash scripts/build-public-ready.sh
```

El script:

1. Copia el build a `public-ready/`.
2. Copia el backend PHP a `public-ready/api/`.
3. Deja el `.htaccess` ya preparado.

Si prefieres hacerlo manualmente:

```
public-ready/
├── index.html                ← del build
├── assets/                   ← del build
├── .htaccess                 ← ya incluido en el repo
└── api/
    ├── procesar-lead.php     ← desde backend/
    ├── config.php            ← rellenar con datos reales
    └── security.php          ← desde backend/
```

## 3. Configurar `api/config.php`

Edita `public-ready/api/config.php` y rellena:

- `google_form_url` → URL `formResponse` del Google Form oculto
  (ver `CONFIGURACION-GOOGLE-FORMS.md`).
- `calendar_url` → tu enlace de Google Calendar / Calendly para
  reservar reuniones.
- `debug` → `false` en producción.
- Cada `entry.xxxxxxxxxx` con el ID real del campo
  correspondiente en el Google Form.

> ⚠ Nunca subas a un repositorio público el `config.php` con los
> IDs reales. Sube siempre solo `config.example.php` al repo.

## 4. Subir a Dinahosting

### Opción A — Cliente FTP (FileZilla, Cyberduck)

1. Conecta con tus credenciales FTP de Dinahosting.
2. Entra en la carpeta pública del dominio (suele ser `httpdocs/`,
   `public_html/` o el nombre del dominio).
3. Sube **todo el contenido** de `public-ready/` (no la carpeta en
   sí, su interior) a la raíz pública.
4. Verifica que `.htaccess` se ha subido (en algunos clientes los
   archivos ocultos están filtrados).

### Opción B — Gestor de archivos del panel

1. Comprime `public-ready/` en un `.zip`.
2. Sube el zip al gestor de archivos de Dinahosting.
3. Descomprímelo en la raíz pública.
4. Borra el `.zip`.

## 5. Activar HTTPS

1. En el panel de Dinahosting, activa el certificado SSL
   (Let's Encrypt es gratuito).
2. Espera unos minutos a que se propague.
3. Edita `public-ready/.htaccess` y descomenta el bloque
   `RewriteCond %{HTTPS} off` para forzar HTTPS.

## 6. Probar el formulario

1. Abre la web en el navegador.
2. Rellena el formulario de la sección **Diagnóstico**.
3. Envíalo.
4. Comprueba que aparece la pantalla **"Solicitud recibida"**.
5. Abre el Google Sheets vinculado al Google Form y verifica que
   la nueva fila se ha creado con todos los campos
   (incluyendo `lead_score`, `lead_status`, UTMs, IP, user agent).

## 7. Troubleshooting

### El formulario devuelve "No se pudo enviar la solicitud"

- Comprueba `api/config.php` → ¿la `google_form_url` es la
  versión `…/formResponse` y no la pública?
- ¿Algún `entry.xxxxxxxxxx` sigue con placeholder?
- Activa `'debug' => true` temporalmente y mira la respuesta JSON
  en las DevTools del navegador (pestaña *Network*).

### El endpoint devuelve 404

- Falta el `.htaccess` o no se está aplicando.
- Verifica que en Dinahosting `mod_rewrite` está activo
  (por defecto sí).
- Asegúrate de que `api/procesar-lead.php` está en
  `public_html/api/procesar-lead.php`.

### Errores 500

- Revisa el log de PHP en el panel de Dinahosting.
- Verifica permisos: `644` para `.php`, `755` para carpetas.

### Rate limit (429)

- Por defecto: 5 envíos por IP cada 10 minutos.
- Cambia los parámetros en
  `procesar-lead.php` → `rate_limit_simple(5, 600)`.

## 8. Publicar bajo un sub-path

Si la landing va a `https://tudominio.com/oficina-agentica-edtech/`
en vez de la raíz:

1. Cambia el endpoint del frontend antes de compilar.
   Edita `src/lib/api.ts`:
   ```ts
   export const FORM_ENDPOINT = "/oficina-agentica-edtech/api/procesar-lead.php";
   ```
2. Recompila con `npm run build`.
3. Sube `public-ready/*` a la subcarpeta `oficina-agentica-edtech/`
   dentro de `httpdocs/`.
4. El `.htaccess` funciona igual; sólo cambia la ruta base.

## 9. Mantenimiento

- Para actualizar la landing: vuelve a compilar y sube de nuevo
  `index.html` + `assets/`.
- Nunca sobreescribas `api/config.php` al subir cambios del
  frontend — el script `build-public-ready.sh` ya lo respeta.
