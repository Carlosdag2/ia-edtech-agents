
# Oficina Agéntica EdTech — Plan de entrega

## Aviso clave sobre el entorno

Este proyecto vive en Lovable, cuyo runtime es **TanStack Start sobre Cloudflare Workers** (no Apache, no PHP). Esto significa:

- **El preview de Lovable NO podrá ejecutar `/api/procesar-lead.php`** mientras desarrollamos. El formulario se podrá rellenar y validar en frontend, pero el envío real al Google Form solo funcionará una vez subas la carpeta `public-ready/` a Dinahosting por FTP.
- Para no romper el preview, añadiré un **modo "demo"** en el frontend: si detecta que no hay PHP disponible (respuesta no-JSON / 404), mostrará el mensaje de éxito igualmente para que puedas revisar la UX completa. En Dinahosting funcionará de verdad.
- La estructura `/frontend`, `/backend`, `/public-ready`, `/docs` se generará tal cual la pediste, pero **el código fuente que Lovable compila en cada cambio vive en `src/`** (raíz). Para mantener tu flujo `npm run build → copiar a /public-ready → subir por FTP`, voy a:
  - Construir la landing real en `src/` (lo que ves en el preview).
  - Duplicar el frontend en `/frontend` como proyecto Vite independiente para que puedas compilarlo y desplegarlo fuera de Lovable.
  - Mantener el PHP en `/backend` y `/public-ready/api`.
  - Incluir un script `scripts/build-public-ready.sh` que automatiza el copiado del build + PHP + .htaccess a `/public-ready`.

Si prefieres una sola fuente (solo `/frontend` y olvidarnos del preview de Lovable), dímelo y lo simplifico.

## Entregables

### 1. Frontend (React + TS + Tailwind + Vite)
- Componentes: `Navbar`, `Button`, `SectionTitle`, `Card`, `LeadForm`, `Footer`
- Secciones (18): Hero, WhatIsChanging, Problem, WhatIs, AgentsJourney, UseCases, Alliance, Method, GoogleStack, BeforeAfter, Results, Pricing, Diagnosis (+ form), FAQ, FinalCTA
- `lib/`: `tracking.ts` (dataLayer GTM/GA4), `utm.ts` (captura UTMs), `validation.ts` (zod-like manual)
- Paleta exacta de IA Power (azules + cian + morado opcional), tipografía Montserrat vía Google Fonts
- Navbar sticky, animaciones suaves al scroll (IntersectionObserver), hover en cards/botones
- SEO completo (title, meta, OG), responsive mobile-first, accesibilidad básica
- Hero visual tipo dashboard con "Agente IA EdTech activo" + chips flotantes (CSS puro, sin stock)
- Visual del stack Google: nodo central + satélites (CSS/SVG)

### 2. Backend PHP
- `/backend/procesar-lead.php`: POST only, JSON, validación, sanitización, honeypot, captura IP/UA/UTMs, lead_score, lead_status="Nuevo", envío al Google Form con cURL (fallback `file_get_contents`)
- `/backend/security.php`: `json_response`, `clean`, `is_valid_email`, `get_client_ip`, `get_user_agent`, `check_honeypot`, `rate_limit_simple` (file-based, 5 req/10min por IP)
- `/backend/config.example.php` y `/backend/config.php` (con placeholders y comentarios claros)

### 3. `/public-ready/`
- `index.html` + `assets/` (output del build)
- `api/procesar-lead.php`, `api/config.php`, `api/security.php`
- `.htaccess` con reglas: servir archivos reales, no reescribir `/api`, fallback a `index.html`, proteger `config.php`

### 4. Documentación `/docs/`
- `INSTALACION-DINAHOSTING.md` — build, FTP, rutas, HTTPS, troubleshooting, sub-path `/oficina-agentica-edtech/`
- `CONFIGURACION-GOOGLE-FORMS.md` — crear el Form con las 22 preguntas exactas, obtener `formResponse` URL y `entry.xxx`
- `CONFIGURACION-GOOGLE-SHEETS.md` — vincular Form↔Sheets, columnas, validación
- `AUTOMATIZACIONES-MAKE-APPS-SCRIPT.md` — flujo posterior (clasificación, aviso interno, diagnóstico IA, email, tarea comercial)

## Copy

Uso íntegro de tus textos: hero, secciones, FAQ (8), paquetes (Start 2.500€ / Growth 6.500€ "Más recomendado" / Pro 12.500€), CTAs, microcopy, mensaje de éxito. Sin lorem, sin testimonios falsos, sin porcentajes inventados.

## Detalles técnicos

- **Tracking**: `trackEvent(name, params)` con `window.dataLayer.push`. Eventos: `click_cta_nav/hero/secondary/pricing_*`, `form_start/submit/error`, `click_calendar_booking`, `scroll_50/90`.
- **UTMs**: leer de `window.location.search` al montar, persistir en `sessionStorage`, incluir como hidden en el form.
- **Endpoint configurable**: `const FORM_ENDPOINT = "/api/procesar-lead.php"` en `lib/api.ts`.
- **Honeypot**: campo `website_url` oculto con CSS (`position:absolute;left:-9999px;tabindex:-1;autocomplete:off`).
- **Lead score**: implementado idénticamente en PHP según tu tabla de puntos.
- **Validación**: frontend (estados loading/error/success) + backend (rechazo silencioso de errores técnicos).

## Orden de ejecución

1. Limpiar template TanStack innecesario para landing
2. Configurar Tailwind + Montserrat + design tokens IA Power en `src/styles.css`
3. Crear componentes base + lib (tracking, utm, validation, api)
4. Crear las 14 secciones + LeadForm
5. Montar landing en `src/routes/index.tsx` con SEO
6. Duplicar a `/frontend` (proyecto Vite standalone)
7. Crear `/backend` PHP completo
8. Crear `/public-ready` con estructura final + `.htaccess`
9. Crear los 4 documentos en `/docs`
10. Script `scripts/build-public-ready.sh`

## Preguntas rápidas antes de empezar

1. ¿OK con el modo demo del formulario en el preview de Lovable (PHP solo corre tras subir a Dinahosting)?
2. ¿OK con tener el frontend duplicado en `src/` (para preview Lovable) y `/frontend` (para tu build/FTP), o prefieres solo `/frontend`?
3. ¿Quieres que genere imágenes/visuales reales (hero dashboard, stack Google) con el generador de imágenes, o prefieres composiciones 100% CSS/SVG (más ligero, sin assets binarios)?
