// Capture UTM params from URL and persist for the session
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
export type UtmKey = (typeof UTM_KEYS)[number];
export type UtmParams = Record<UtmKey, string>;

const STORAGE_KEY = "iapower_utm";

export function captureUtms(): UtmParams {
  const empty: UtmParams = {
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
  };
  if (typeof window === "undefined") return empty;

  let stored: Partial<UtmParams> = {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) stored = JSON.parse(raw);
  } catch {
    stored = {};
  }

  const url = new URLSearchParams(window.location.search);
  const next: UtmParams = { ...empty, ...stored };
  let changed = false;
  for (const k of UTM_KEYS) {
    const v = url.get(k);
    if (v) {
      next[k] = v;
      changed = true;
    }
  }
  if (changed) {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  }
  return next;
}
