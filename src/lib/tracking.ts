// Tracking helper for GTM / GA4 via window.dataLayer
declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(eventName: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });
}

export function initScrollTracking(): () => void {
  if (typeof window === "undefined") return () => {};
  const fired = new Set<number>();
  const onScroll = () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop + window.innerHeight) / h.scrollHeight;
    [0.5, 0.9].forEach((t) => {
      if (scrolled >= t && !fired.has(t)) {
        fired.add(t);
        trackEvent(`scroll_${Math.round(t * 100)}`);
      }
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}
