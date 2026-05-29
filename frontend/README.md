# `/frontend` — nota técnica

Este proyecto vive realmente en **`/src`** porque está alojado en Lovable
(TanStack Start v1 + Vite 7), lo que permite el preview en vivo.

La carpeta `/frontend` se mantiene como **referencia conceptual** del bloque
frontend independiente. La fuente única de verdad es `/src` + raíz del repo
(`package.json`, `vite.config.ts`, `index.html` generado por TanStack Start).

## Cómo desarrollar y compilar

Desde la raíz del repo:

```bash
npm install
npm run dev       # desarrollo local
npm run build     # genera el bundle estático
```

Para empaquetar todo (frontend + PHP + .htaccess) en `/public-ready`
listo para FTP:

```bash
bash scripts/build-public-ready.sh
```

## Si quieres un frontend Vite "puro" (sin TanStack Start)

Podemos exportarlo a una carpeta `/frontend` autónoma; dilo y lo hago.
Para Dinahosting no hace falta: el build estático sirve igual.
