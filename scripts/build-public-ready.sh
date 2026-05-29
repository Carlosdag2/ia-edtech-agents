#!/usr/bin/env bash
# IA Power — empaqueta la landing y el backend PHP en /public-ready
# para subir directamente por FTP a Dinahosting.

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "▶ Instalando dependencias..."
npm install --no-audit --no-fund

echo "▶ Compilando frontend (Vite)..."
npm run build

echo "▶ Preparando public-ready/..."
rm -rf public-ready/assets
mkdir -p public-ready/api

# Vite outputs to dist/ by default. TanStack Start outputs to .output/public.
if [ -d "dist" ]; then
  cp -R dist/* public-ready/
elif [ -d ".output/public" ]; then
  cp -R .output/public/* public-ready/
else
  echo "✖ No se encontró dist/ ni .output/public/. Revisa el build." >&2
  exit 1
fi

# Backend PHP
cp backend/procesar-lead.php public-ready/api/
cp backend/security.php       public-ready/api/

# config.php sólo se copia si no existe ya (para no sobreescribir datos reales).
if [ ! -f public-ready/api/config.php ]; then
  cp backend/config.php public-ready/api/
  echo "ℹ Copiado backend/config.php → public-ready/api/config.php (recuerda rellenar con datos reales)."
else
  echo "ℹ public-ready/api/config.php ya existe, no se sobreescribe."
fi

echo "✔ Listo. Sube el contenido de public-ready/ por FTP a Dinahosting."
