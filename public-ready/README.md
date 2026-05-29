# IA Power — Oficina Agéntica EdTech

Esta carpeta es lo que se sube por FTP a Dinahosting.

Después de ejecutar el build (`npm run build`) y el script
`scripts/build-public-ready.sh`, contendrá:

```
public-ready/
├── index.html
├── assets/...
├── .htaccess
└── api/
    ├── procesar-lead.php
    ├── config.php          ← editar con datos reales antes de subir
    └── security.php
```

Sube el contenido completo de esta carpeta a la raíz pública de tu hosting
(p. ej. `httpdocs/` o `public_html/` en Dinahosting).

Ver `/docs/INSTALACION-DINAHOSTING.md` para el paso a paso.
