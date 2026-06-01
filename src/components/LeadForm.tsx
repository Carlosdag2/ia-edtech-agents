import { useEffect, useMemo, useState } from "react";
import { Loader2, CheckCircle2, AlertCircle, CalendarCheck } from "lucide-react";
import { Button, ButtonLink } from "./Button";
import { captureUtms } from "@/lib/utm";
import { trackEvent } from "@/lib/tracking";
import { submitLead } from "@/lib/api";
import { validateLead, type LeadFormData, type FormErrors } from "@/lib/validation";

const CALENDAR_URL = "https://calendar.app.google/gPuxw1LtokztmrKL8";

const TIPO_ORG = [
  "Universidad",
  "Escuela de negocio",
  "Academia",
  "Plataforma EdTech",
  "Empresa de formación",
  "Fundación / institución educativa",
  "Otro",
];

const TAMANO = ["1-10", "11-50", "51-200", "200+"];

const WORKSPACE = [
  "Sí, de forma avanzada",
  "Sí, pero poco aprovechado",
  "Parcialmente",
  "No",
  "No lo sé",
];

const AREAS = [
  "Captación de alumnos",
  "Admisiones / matrícula",
  "Onboarding",
  "Soporte al alumno",
  "Retención / abandono",
  "Coordinación interna",
  "Reporting / datos",
  "Automatización de tareas",
  "Otro",
];

const empty = (): LeadFormData => ({
  nombre: "",
  email: "",
  telefono: "",
  empresa: "",
  cargo: "",
  web: "",
  tipo_organizacion: "",
  tamano_equipo: "",
  google_workspace: "",
  area_prioritaria: "",
  herramientas: "",
  mensaje: "",
  rgpd: false,
  website_url: "",
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_content: "",
  utm_term: "",
});

type Status = "idle" | "submitting" | "success" | "error";

export function LeadForm() {
  const [data, setData] = useState<LeadFormData>(empty);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMsg, setServerMsg] = useState<string>("");
  const [startedTracked, setStartedTracked] = useState(false);

  const utms = useMemo(() => captureUtms(), []);

  useEffect(() => {
    setData((d) => ({ ...d, ...utms }));
  }, [utms]);

  function update<K extends keyof LeadFormData>(key: K, value: LeadFormData[K]) {
    setData((d) => ({ ...d, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function onFirstFocus() {
    if (!startedTracked) {
      setStartedTracked(true);
      trackEvent("form_start");
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validateLead(data);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      trackEvent("form_error", { errors: Object.keys(errs) });
      return;
    }
    setStatus("submitting");
    setServerMsg("");
    const res = await submitLead(data);
    if (res.ok) {
      setStatus("success");
      setServerMsg(res.message);
      trackEvent("form_submit");
    } else {
      setStatus("error");
      setServerMsg(res.message);
      trackEvent("form_error", { reason: "server" });
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white rounded-3xl border border-slate-100 shadow-card p-8 md:p-10 text-center">
        <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 flex items-center justify-center mb-5">
          <CheckCircle2 className="text-emerald-600" size={32} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-brand-deep mb-3">Solicitud recibida</h3>
        <p className="text-brand-text max-w-xl mx-auto leading-relaxed">
          Gracias. Hemos recibido tu solicitud. El equipo de IA Power revisará tu contexto y se pondrá en
          contacto contigo para valorar el diagnóstico más adecuado.
        </p>
        {serverMsg && serverMsg.includes("demo") && (
          <p className="mt-3 text-xs text-brand-text/70 italic">{serverMsg}</p>
        )}
        <div className="mt-7">
          <ButtonLink
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="cta"
            size="lg"
            onClick={() => trackEvent("click_calendar_booking")}
          >
            <CalendarCheck size={18} /> Reservar reunión estratégica
          </ButtonLink>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      onFocus={onFirstFocus}
      className="bg-white rounded-3xl border border-slate-100 shadow-card p-6 md:p-10"
      noValidate
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Nombre completo *" error={errors.nombre}>
          <input
            type="text"
            value={data.nombre}
            onChange={(e) => update("nombre", e.target.value)}
            className={input(!!errors.nombre)}
            autoComplete="name"
          />
        </Field>
        <Field label="Email profesional *" error={errors.email}>
          <input
            type="email"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            className={input(!!errors.email)}
            autoComplete="email"
          />
        </Field>
        <Field label="Teléfono">
          <input
            type="tel"
            value={data.telefono}
            onChange={(e) => update("telefono", e.target.value)}
            className={input(false)}
            autoComplete="tel"
          />
        </Field>
        <Field label="Empresa / institución *" error={errors.empresa}>
          <input
            type="text"
            value={data.empresa}
            onChange={(e) => update("empresa", e.target.value)}
            className={input(!!errors.empresa)}
            autoComplete="organization"
          />
        </Field>
        <Field label="Cargo">
          <input
            type="text"
            value={data.cargo}
            onChange={(e) => update("cargo", e.target.value)}
            className={input(false)}
            autoComplete="organization-title"
          />
        </Field>
        <Field label="Web de la institución">
          <input
            type="url"
            value={data.web}
            onChange={(e) => update("web", e.target.value)}
            className={input(false)}
            placeholder="https://"
            autoComplete="url"
          />
        </Field>
        <Field label="Tipo de organización *" error={errors.tipo_organizacion}>
          <select
            value={data.tipo_organizacion}
            onChange={(e) => update("tipo_organizacion", e.target.value)}
            className={input(!!errors.tipo_organizacion)}
          >
            <option value="">Selecciona…</option>
            {TIPO_ORG.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Tamaño del equipo *" error={errors.tamano_equipo}>
          <select
            value={data.tamano_equipo}
            onChange={(e) => update("tamano_equipo", e.target.value)}
            className={input(!!errors.tamano_equipo)}
          >
            <option value="">Selecciona…</option>
            {TAMANO.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
        <Field label="¿Usáis Google Workspace? *" error={errors.google_workspace}>
          <select
            value={data.google_workspace}
            onChange={(e) => update("google_workspace", e.target.value)}
            className={input(!!errors.google_workspace)}
          >
            <option value="">Selecciona…</option>
            {WORKSPACE.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
        <Field label="¿Dónde se pierde más valor ahora? *" error={errors.area_prioritaria}>
          <select
            value={data.area_prioritaria}
            onChange={(e) => update("area_prioritaria", e.target.value)}
            className={input(!!errors.area_prioritaria)}
          >
            <option value="">Selecciona…</option>
            {AREAS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Herramientas actuales" className="md:col-span-2">
          <input
            type="text"
            value={data.herramientas}
            onChange={(e) => update("herramientas", e.target.value)}
            placeholder="CRM, Google Workspace, LMS/Campus, email marketing, hojas de cálculo, otras..."
            className={input(false)}
          />
        </Field>
        <Field label="Cuéntanos brevemente tu situación" className="md:col-span-2">
          <textarea
            rows={4}
            value={data.mensaje}
            onChange={(e) => update("mensaje", e.target.value)}
            className={`${input(false)} resize-none`}
          />
        </Field>
      </div>

      {/* Honeypot — invisible to users */}
      <div className="sr-honeypot" aria-hidden="true">
        <label>
          Tu web (no rellenar)
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={data.website_url}
            onChange={(e) => update("website_url", e.target.value)}
          />
        </label>
      </div>

      {/* Hidden UTM */}
      <input type="hidden" name="utm_source" value={data.utm_source} />
      <input type="hidden" name="utm_medium" value={data.utm_medium} />
      <input type="hidden" name="utm_campaign" value={data.utm_campaign} />
      <input type="hidden" name="utm_content" value={data.utm_content} />
      <input type="hidden" name="utm_term" value={data.utm_term} />

      <label className="mt-6 flex gap-3 items-start cursor-pointer select-none">
        <input
          type="checkbox"
          checked={data.rgpd}
          onChange={(e) => update("rgpd", e.target.checked)}
          className="mt-1 w-4 h-4 accent-[#1E88E5]"
        />
        <span className="text-sm text-brand-text">
          Acepto la política de privacidad y autorizo a IA Power Business Consulting a contactarme para
          valorar el diagnóstico. Tus datos no se compartirán con terceros sin tu consentimiento.
        </span>
      </label>
      {errors.rgpd && <p className="mt-1 text-sm text-red-600">{errors.rgpd}</p>}

      {status === "error" && (
        <div className="mt-5 flex items-center gap-2 p-3 rounded-lg bg-red-50 border border-red-100 text-red-700 text-sm">
          <AlertCircle size={18} /> {serverMsg || "No se pudo enviar la solicitud."}
        </div>
      )}

      <div className="mt-7 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
        <Button
          type="submit"
          variant="cta"
          size="lg"
          disabled={status === "submitting"}
          className="flex-1 sm:flex-none"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="animate-spin" size={18} /> Enviando…
            </>
          ) : (
            "Solicitar diagnóstico"
          )}
        </Button>
        <ButtonLink
          href={CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          size="lg"
          onClick={() => trackEvent("click_calendar_booking")}
        >
          <CalendarCheck size={18} /> Reservar reunión estratégica
        </ButtonLink>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
  className = "",
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-sm font-medium text-brand-deep mb-1.5">{label}</span>
      {children}
      {error && <span className="block mt-1 text-sm text-red-600">{error}</span>}
    </label>
  );
}

function input(hasError: boolean) {
  return `w-full px-4 py-2.5 rounded-xl border bg-white text-brand-deep placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-bright/40 focus:border-brand-bright transition ${
    hasError ? "border-red-300 bg-red-50/30" : "border-slate-200"
  }`;
}
