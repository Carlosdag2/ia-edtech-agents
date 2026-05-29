// Lightweight form validation for the lead form
export type LeadFormData = {
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;
  cargo: string;
  web: string;
  tipo_organizacion: string;
  tamano_equipo: string;
  google_workspace: string;
  area_prioritaria: string;
  herramientas: string;
  mensaje: string;
  rgpd: boolean;
  website_url: string; // honeypot
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
};

export type FormErrors = Partial<Record<keyof LeadFormData, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateLead(data: LeadFormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.nombre.trim() || data.nombre.trim().length < 2) errors.nombre = "Indica tu nombre completo.";
  if (!data.email.trim() || !EMAIL_RE.test(data.email.trim())) errors.email = "Introduce un email profesional válido.";
  if (!data.empresa.trim()) errors.empresa = "Indica el nombre de tu institución u organización.";
  if (!data.tipo_organizacion) errors.tipo_organizacion = "Selecciona el tipo de organización.";
  if (!data.tamano_equipo) errors.tamano_equipo = "Indica el tamaño del equipo.";
  if (!data.google_workspace) errors.google_workspace = "Cuéntanos vuestro uso de Google Workspace.";
  if (!data.area_prioritaria) errors.area_prioritaria = "Selecciona el área prioritaria.";
  if (!data.rgpd) errors.rgpd = "Necesitamos tu consentimiento para contactarte.";
  return errors;
}
