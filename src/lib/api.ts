import type { LeadFormData } from "./validation";

// Configurable endpoint. In Dinahosting will resolve to /api/procesar-lead.php
// If deployed under a subpath, change this constant.
export const FORM_ENDPOINT = "/api/procesar-lead.php";

export type LeadResponse = { ok: boolean; message: string };

/**
 * Submit lead to the PHP endpoint.
 * In the Lovable preview the PHP endpoint does not exist; we treat a non-JSON
 * or 404 response as "demo mode" and resolve as success so the UX can be reviewed.
 * In Dinahosting it will perform the real call.
 */
export async function submitLead(data: LeadFormData): Promise<LeadResponse> {
  const body = new FormData();
  Object.entries(data).forEach(([k, v]) => {
    body.append(k, typeof v === "boolean" ? (v ? "1" : "") : String(v ?? ""));
  });

  try {
    const res = await fetch(FORM_ENDPOINT, { method: "POST", body });
    const text = await res.text();

    // Demo mode: endpoint not reachable as JSON (Lovable preview)
    if (!res.ok && res.status === 404) {
      return { ok: true, message: "Solicitud recibida correctamente (modo demo: PHP no disponible en este entorno)." };
    }

    try {
      const json = JSON.parse(text) as LeadResponse;
      return json;
    } catch {
      // Non-JSON response (e.g. preview HTML fallback) — treat as demo success
      return { ok: true, message: "Solicitud recibida correctamente (modo demo)." };
    }
  } catch {
    return { ok: false, message: "No se pudo enviar la solicitud. Inténtalo de nuevo." };
  }
}
