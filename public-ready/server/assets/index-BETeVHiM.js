import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { forwardRef, useState, useEffect, useRef, useMemo } from "react";
import { X, Menu, Sparkles, ChevronDown, Bot, LayoutDashboard, FileText, AlertTriangle, Brain, BookOpenCheck, Mic, Workflow, Target, Network, AlertCircle, MessageCircle, Zap, Megaphone, ClipboardCheck, CreditCard, Compass, GraduationCap, ShieldAlert, BarChart3, Briefcase, BookOpen, Rocket, Pencil, LifeBuoy, Lightbulb, ShieldCheck, Cpu, Check, TrendingUp, Star, CheckCircle2, CalendarCheck, Loader2 } from "lucide-react";
const base = "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-bright disabled:opacity-60 disabled:cursor-not-allowed";
const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base"
};
const variants = {
  primary: "bg-brand-deep text-white hover:bg-brand-mid shadow-[0_8px_24px_-8px_rgba(10,36,99,0.5)] hover:-translate-y-0.5",
  secondary: "bg-white text-brand-deep border border-slate-200 hover:border-brand-bright hover:text-brand-bright shadow-card",
  ghost: "bg-transparent text-brand-deep hover:bg-brand-bg",
  cta: "bg-gradient-cta text-white hover:opacity-95 shadow-glow hover:-translate-y-0.5"
};
const Button = forwardRef(function Button2({ variant = "primary", size = "md", className = "", ...props }, ref) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ref,
      className: `${base} ${sizes[size]} ${variants[variant]} ${className}`,
      ...props
    }
  );
});
function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  return /* @__PURE__ */ jsx("a", { className: `${base} ${sizes[size]} ${variants[variant]} ${className}`, ...props });
}
function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });
}
function initScrollTracking() {
  if (typeof window === "undefined") return () => {
  };
  const fired = /* @__PURE__ */ new Set();
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
const links = [
  { href: "#que-es", label: "Qué es" },
  { href: "#problema", label: "Problema" },
  { href: "#agentes", label: "Agentes" },
  { href: "#metodo", label: "Método" },
  { href: "#google-stack", label: "Google Stack" },
  { href: "#paquetes", label: "Paquetes" },
  { href: "#diagnostico", label: "Diagnóstico" }
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/85 backdrop-blur-md shadow-[0_4px_20px_-12px_rgba(10,36,99,0.2)]" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxs("nav", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("a", { href: "#top", className: "flex items-center gap-3 group", "aria-label": "Inicio", children: [
            /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-xl bg-gradient-cta flex items-center justify-center text-white font-extrabold shadow-glow", children: "iA" }),
            /* @__PURE__ */ jsxs("div", { className: "leading-tight", children: [
              /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-brand-deep", children: "IA Power" }),
              /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-widest text-brand-bright font-semibold", children: "Oficina Agéntica EdTech" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "hidden lg:flex items-center gap-7", children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: l.href,
              onClick: () => trackEvent("click_cta_nav", { link: l.href }),
              className: "text-sm font-medium text-brand-deep/80 hover:text-brand-bright transition-colors",
              children: l.label
            }
          ) }, l.href)) }),
          /* @__PURE__ */ jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsx(
            ButtonLink,
            {
              href: "#diagnostico",
              variant: "cta",
              onClick: () => trackEvent("click_cta_nav", { cta: "diagnostico" }),
              children: "Solicitar diagnóstico"
            }
          ) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "lg:hidden p-2 text-brand-deep",
              onClick: () => setOpen((v) => !v),
              "aria-label": "Abrir menú",
              children: open ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsx("div", { className: "lg:hidden bg-white border-t border-slate-100", children: /* @__PURE__ */ jsxs("ul", { className: "px-6 py-4 space-y-3", children: [
          links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: l.href,
              onClick: () => {
                setOpen(false);
                trackEvent("click_cta_nav", { link: l.href });
              },
              className: "block py-1.5 text-sm font-medium text-brand-deep",
              children: l.label
            }
          ) }, l.href)),
          /* @__PURE__ */ jsx("li", { className: "pt-2", children: /* @__PURE__ */ jsx(
            ButtonLink,
            {
              href: "#diagnostico",
              variant: "cta",
              className: "w-full",
              onClick: () => setOpen(false),
              children: "Solicitar diagnóstico"
            }
          ) })
        ] }) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-brand-deep text-white/80", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-gradient-cta flex items-center justify-center text-white font-extrabold", children: "iA" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-white font-bold", children: "IA Power" }),
            /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-widest text-brand-cyan", children: "Oficina Agéntica EdTech" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed", children: "IA Power Business Consulting. Estrategia, IA y Google Workspace para organizaciones educativas que quieren liderar la próxima década." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
        /* @__PURE__ */ jsx("div", { className: "text-white font-semibold mb-3", children: "Alianza" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx("li", { children: "IA Power Business Consulting" }),
          /* @__PURE__ */ jsx("li", { children: "DataQuantum" }),
          /* @__PURE__ */ jsx("li", { children: "Google" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
        /* @__PURE__ */ jsx("div", { className: "text-white font-semibold mb-3", children: "Enlaces" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://iapower.es",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "hover:text-brand-cyan transition-colors",
              children: "iapower.es"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#diagnostico", className: "hover:text-brand-cyan transition-colors", children: "Solicitar diagnóstico" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/politica-privacidad", className: "hover:text-brand-cyan transition-colors", children: "Política de privacidad" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-xs flex flex-col md:flex-row gap-2 md:items-center md:justify-between", children: [
      /* @__PURE__ */ jsx("div", { children: "© 2026 IA Power Business Consulting. Todos los derechos reservados." }),
      /* @__PURE__ */ jsx("div", { className: "text-white/60", children: "IA Power + DataQuantum + Google" })
    ] }) })
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxs("section", { id: "top", className: "relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden bg-gradient-soft", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-20 -left-32 w-96 h-96 rounded-full bg-brand-cyan/10 blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-brand-violet/10 blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-brand-bright/30 text-xs font-semibold text-brand-bright shadow-card", children: [
          /* @__PURE__ */ jsx(Sparkles, { size: 14 }),
          " IA Power + DataQuantum + Google"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-deep leading-[1.08]", children: [
          "La ",
          /* @__PURE__ */ jsx("span", { className: "bg-clip-text text-transparent bg-gradient-cta", children: "Oficina Agéntica EdTech" }),
          " ",
          "para transformar captación, experiencia y operación educativa con IA"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-base md:text-lg text-brand-text leading-relaxed max-w-2xl", children: "Diseñamos agentes de IA conectados a Google Workspace, Gemini, NotebookLM, CRM y procesos internos para ayudar a universidades, escuelas de negocio y organizaciones educativas a captar mejor, acompañar al alumno, automatizar tareas y tomar decisiones con más contexto." }),
        /* @__PURE__ */ jsx("ul", { className: "mt-7 grid sm:grid-cols-2 gap-2.5 max-w-2xl", children: [
          "Más conversión de lead a matrícula",
          "Mejor onboarding y experiencia del alumno",
          "Menos carga operativa para equipos internos",
          "Agentes IA conectados a procesos reales",
          "Gobierno, seguridad y trazabilidad desde el diseño"
        ].map((b) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2.5 text-sm text-brand-deep", children: [
          /* @__PURE__ */ jsx("span", { className: "mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0" }),
          " ",
          b
        ] }, b)) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-9 flex flex-col sm:flex-row gap-3", children: [
          /* @__PURE__ */ jsx(
            ButtonLink,
            {
              href: "#diagnostico",
              variant: "cta",
              size: "lg",
              onClick: () => trackEvent("click_cta_hero"),
              children: "Solicitar diagnóstico de Oficina Agéntica EdTech"
            }
          ),
          /* @__PURE__ */ jsxs(
            ButtonLink,
            {
              href: "#que-es",
              variant: "secondary",
              size: "lg",
              onClick: () => trackEvent("click_cta_secondary"),
              children: [
                "Ver cómo funciona ",
                /* @__PURE__ */ jsx(ChevronDown, { size: 16 })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-5 relative", children: /* @__PURE__ */ jsx(AgentDashboard, {}) })
    ] })
  ] });
}
function AgentDashboard() {
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute -left-6 top-10 z-10 animate-floaty", children: /* @__PURE__ */ jsx(Chip, { children: "Tutor virtual activo" }) }),
    /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute -right-4 top-32 z-10 animate-floaty", style: { animationDelay: "1s" }, children: /* @__PURE__ */ jsx(Chip, { color: "violet", children: "Riesgo de abandono detectado" }) }),
    /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute -left-2 bottom-10 z-10 animate-floaty", style: { animationDelay: "2s" }, children: /* @__PURE__ */ jsx(Chip, { color: "cyan", children: "Briefing de admisión generado" }) }),
    /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute -right-6 bottom-0 z-10 animate-floaty", style: { animationDelay: "0.5s" }, children: /* @__PURE__ */ jsx(Chip, { children: "Dashboard actualizado" }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative rounded-3xl bg-white border border-slate-100 shadow-card p-5 md:p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-xl bg-gradient-cta flex items-center justify-center text-white", children: /* @__PURE__ */ jsx(Bot, { size: 18 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-brand-deep", children: "Agente IA EdTech" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-[11px] text-emerald-600 font-medium", children: [
              /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot" }),
              " Activo"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(LayoutDashboard, { size: 18, className: "text-brand-text/60" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxs(Row, { icon: /* @__PURE__ */ jsx(Sparkles, { size: 14 }), tone: "cyan", children: [
          "Nuevo lead interesado en ",
          /* @__PURE__ */ jsx("b", { children: "Máster de IA" }),
          " detectado."
        ] }),
        /* @__PURE__ */ jsx(Row, { icon: /* @__PURE__ */ jsx(FileText, { size: 14 }), children: "Consultando histórico de admisiones, perfil del alumno y programa recomendado…" }),
        /* @__PURE__ */ jsxs(Row, { icon: /* @__PURE__ */ jsx(Sparkles, { size: 14 }), tone: "violet", children: [
          "Programa sugerido: ",
          /* @__PURE__ */ jsx("b", { children: "Máster en Data & AI" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs(Row, { icon: /* @__PURE__ */ jsx(AlertTriangle, { size: 14 }), tone: "emerald", children: [
          "Acción creada: ",
          /* @__PURE__ */ jsx("b", { children: "email personalizado" }),
          " + tarea de seguimiento + alerta a admisiones."
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-5 grid grid-cols-3 gap-2 text-center", children: [
        { k: "Leads", v: "128" },
        { k: "Conversión", v: "+24%" },
        { k: "SLA", v: "2h" }
      ].map((s) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-brand-bg py-2.5", children: [
        /* @__PURE__ */ jsx("div", { className: "text-base font-bold text-brand-deep", children: s.v }),
        /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-wider text-brand-text", children: s.k })
      ] }, s.k)) })
    ] })
  ] });
}
function Chip({ children, color = "blue" }) {
  const map = {
    blue: "bg-white text-brand-deep border-brand-bright/40",
    cyan: "bg-white text-brand-cyan border-brand-cyan/40",
    violet: "bg-white text-brand-violet border-brand-violet/40"
  };
  return /* @__PURE__ */ jsx("div", { className: `px-3 py-2 rounded-full border shadow-card text-xs font-semibold ${map[color]}`, children });
}
function Row({
  children,
  icon,
  tone = "blue"
}) {
  const map = {
    blue: "bg-blue-50 text-brand-deep",
    cyan: "bg-cyan-50 text-cyan-900",
    violet: "bg-violet-50 text-violet-900",
    emerald: "bg-emerald-50 text-emerald-900"
  };
  return /* @__PURE__ */ jsxs("div", { className: `flex items-start gap-2.5 p-3 rounded-xl text-[13px] leading-snug ${map[tone]}`, children: [
    /* @__PURE__ */ jsx("span", { className: "mt-0.5 shrink-0 opacity-80", children: icon }),
    /* @__PURE__ */ jsx("span", { children })
  ] });
}
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}
function SectionTitle({ eyebrow, title, subtitle, align = "center", className = "" }) {
  const ref = useReveal();
  const isCenter = align === "center";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: `${isCenter ? "text-center mx-auto max-w-3xl" : "text-left max-w-3xl"} ${className}`,
      children: [
        eyebrow && /* @__PURE__ */ jsx("span", { className: "inline-block text-xs font-semibold tracking-widest uppercase text-brand-bright mb-3", children: eyebrow }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-brand-deep leading-tight", children: title }),
        subtitle && /* @__PURE__ */ jsx("p", { className: "mt-4 text-base md:text-lg text-brand-text leading-relaxed", children: subtitle })
      ]
    }
  );
}
function Card({ children, className = "", hover = true, as: Tag = "div" }) {
  const ref = useReveal();
  return /* @__PURE__ */ jsx(
    Tag,
    {
      ref,
      className: `group bg-white rounded-2xl border border-slate-100 p-6 md:p-7 shadow-card transition-all duration-300 ${hover ? "hover:-translate-y-1 hover:shadow-card-hover hover:border-brand-bright/30" : ""} ${className}`,
      children
    }
  );
}
const items$1 = [
  {
    icon: Brain,
    title: "Gemini integrado en el trabajo diario",
    text: "Asistencia inteligente dentro de Gmail, Docs, Sheets, Slides y Meet sin cambiar de herramienta."
  },
  {
    icon: BookOpenCheck,
    title: "NotebookLM como copiloto de aprendizaje e investigación",
    text: "Convertir documentación interna, normativa y materiales en conocimiento consultable y trazable."
  },
  {
    icon: Mic,
    title: "Experiencias multimodales",
    text: "Voz, vídeo, documentos e imágenes combinados para enseñar, atender y producir contenido."
  },
  {
    icon: Workflow,
    title: "Automatización conectada a Google Workspace",
    text: "Apps Script, AppSheet y Forms al servicio de procesos académicos y operativos reales."
  },
  {
    icon: Target,
    title: "IA contextual, personalizada y orientada a la acción",
    text: "Recomendaciones, recordatorios y siguientes pasos basados en el contexto real del alumno o del equipo."
  },
  {
    icon: Network,
    title: "Agentes que coordinan aplicaciones y equipos",
    text: "Sistemas capaces de moverse entre CRM, campus, Drive, Sheets y Calendar bajo supervisión humana."
  }
];
function WhatIsChanging() {
  return /* @__PURE__ */ jsx("section", { className: "py-20 md:py-28 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(
      SectionTitle,
      {
        eyebrow: "Lo que está cambiando",
        title: "La educación entra en la era de los agentes IA",
        subtitle: "Las organizaciones educativas ya no necesitan solo herramientas digitales. Necesitan sistemas capaces de entender contexto, conectar datos, coordinar equipos y actuar sobre procesos clave."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: items$1.map((it) => /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-xl bg-gradient-cta text-white flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(it.icon, { size: 20 }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-brand-deep mb-2 leading-snug", children: it.title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-brand-text leading-relaxed", children: it.text })
    ] }, it.title)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 mx-auto max-w-4xl text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-xl md:text-2xl font-semibold text-brand-deep leading-snug", children: [
      "El salto no está en usar más IA. Está en",
      " ",
      /* @__PURE__ */ jsx("span", { className: "bg-clip-text text-transparent bg-gradient-cta", children: "rediseñar cómo trabaja una organización educativa con IA" }),
      "."
    ] }) })
  ] }) });
}
const problems = [
  "Leads educativos que no se convierten en matrículas",
  "Procesos de admisión lentos o manuales",
  "Onboarding poco claro para nuevos alumnos",
  "Soporte saturado y repetitivo",
  "Dudas frecuentes repartidas entre emails, documentos y equipos",
  "Profesores y coordinadores con exceso de carga operativa",
  "Señales de abandono detectadas tarde",
  "CRM, marketing, campus, soporte y experiencia desconectados",
  "Falta de visibilidad directiva sobre el journey completo"
];
function Problem() {
  return /* @__PURE__ */ jsx("section", { id: "problema", className: "py-20 md:py-28 bg-gradient-soft", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(
      SectionTitle,
      {
        eyebrow: "El problema",
        title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Tu institución ya tiene tecnología. Lo que quizá no tiene es una",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-brand-bright", children: "experiencia educativa conectada" }),
          "."
        ] })
      }
    ),
    /* @__PURE__ */ jsx("ul", { className: "mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto", children: problems.map((p) => /* @__PURE__ */ jsx(ProblemItem, { text: p }, p)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 mx-auto max-w-4xl text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-xl md:text-2xl font-semibold text-brand-deep leading-snug", children: [
      "La Oficina Agéntica EdTech convierte ese caos operativo en un",
      " ",
      /* @__PURE__ */ jsx("span", { className: "bg-clip-text text-transparent bg-gradient-cta", children: "sistema inteligente de captación, acompañamiento y mejora continua" }),
      "."
    ] }) })
  ] }) });
}
function ProblemItem({ text }) {
  const ref = useReveal();
  return /* @__PURE__ */ jsxs(
    "li",
    {
      ref,
      className: "flex items-start gap-3 bg-white border border-slate-100 rounded-xl px-4 py-3.5 shadow-card",
      children: [
        /* @__PURE__ */ jsx(AlertCircle, { size: 18, className: "text-brand-violet mt-0.5 shrink-0" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm text-brand-deep leading-snug", children: text })
      ]
    }
  );
}
const compare = [
  {
    icon: MessageCircle,
    title: "Chatbot educativo",
    text: "Responde preguntas frecuentes con respuestas predefinidas.",
    tone: "slate"
  },
  {
    icon: Zap,
    title: "Agente IA educativo",
    text: "Analiza contexto, ejecuta tareas y activa procesos bajo supervisión humana.",
    tone: "blue"
  },
  {
    icon: Network,
    title: "Oficina Agéntica EdTech",
    text: "Coordina agentes, equipos y datos de toda la institución educativa.",
    tone: "violet"
  }
];
function WhatIs() {
  return /* @__PURE__ */ jsx("section", { id: "que-es", className: "py-20 md:py-28 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(
      SectionTitle,
      {
        eyebrow: "Qué es",
        title: "¿Qué es una Oficina Agéntica EdTech?",
        subtitle: "Es un modelo de transformación educativa donde agentes de IA conectados a las herramientas de la organización ayudan a captar alumnos, acompañar procesos de admisión, resolver dudas, personalizar experiencias, apoyar a docentes, detectar riesgos y generar inteligencia institucional."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-5 md:grid-cols-3", children: compare.map((c) => {
      const accent = c.tone === "violet" ? "bg-gradient-violet text-white" : c.tone === "blue" ? "bg-gradient-cta text-white" : "bg-slate-100 text-brand-deep";
      return /* @__PURE__ */ jsxs(Card, { className: c.tone === "violet" ? "ring-2 ring-brand-violet/20" : "", children: [
        /* @__PURE__ */ jsx("div", { className: `w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${accent}`, children: /* @__PURE__ */ jsx(c.icon, { size: 20 }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-brand-deep mb-2", children: c.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-brand-text leading-relaxed", children: c.text })
      ] }, c.title);
    }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 mx-auto max-w-4xl text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-xl md:text-2xl font-semibold text-brand-deep leading-snug", children: [
      "Un chatbot responde. Un agente actúa.",
      " ",
      /* @__PURE__ */ jsx("span", { className: "bg-clip-text text-transparent bg-gradient-cta", children: "Una Oficina Agéntica EdTech coordina" }),
      " ",
      "alumnos, equipos, datos, procesos y decisiones."
    ] }) })
  ] }) });
}
const journey = [
  {
    n: "01",
    icon: Megaphone,
    title: "Captación",
    body: "Agente que ayuda a futuros alumnos a descubrir el programa adecuado según perfil, intereses, objetivos y contexto.",
    result: "Más orientación y mejor cualificación del lead."
  },
  {
    n: "02",
    icon: ClipboardCheck,
    title: "Admisión",
    body: "Agente que acompaña solicitud, documentación, llamadas, recordatorios y seguimiento comercial.",
    result: "Menos fricción y mayor velocidad de respuesta."
  },
  {
    n: "03",
    icon: CreditCard,
    title: "Matrícula",
    body: "Agente que reduce fricción en pagos, documentación pendiente, validaciones y próximos pasos.",
    result: "Más claridad y menos abandono en el cierre."
  },
  {
    n: "04",
    icon: Compass,
    title: "Onboarding",
    body: "Agente que guía al alumno en sus primeros días, resuelve dudas frecuentes y activa recursos clave.",
    result: "Mejor arranque de experiencia."
  },
  {
    n: "05",
    icon: GraduationCap,
    title: "Aprendizaje",
    body: "Tutor virtual conectado a conocimiento interno, materiales, normativa, calendario y recursos.",
    result: "Apoyo continuo y personalizado."
  },
  {
    n: "06",
    icon: ShieldAlert,
    title: "Retención",
    body: "Agente que detecta señales tempranas de abandono, inactividad, baja participación o incidencias.",
    result: "Intervención temprana."
  },
  {
    n: "07",
    icon: BarChart3,
    title: "Inteligencia institucional",
    body: "Sistema que consolida captación, onboarding, soporte, satisfacción, rendimiento y fidelización.",
    result: "Decisiones directivas con más contexto."
  }
];
function AgentsJourney() {
  return /* @__PURE__ */ jsx("section", { id: "agentes", className: "py-20 md:py-28 bg-gradient-soft", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(
      SectionTitle,
      {
        eyebrow: "Journey de agentes",
        title: "Agentes IA para cada punto crítico del journey educativo"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: journey.map((s) => /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-3", children: [
        /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-xl bg-gradient-cta text-white flex items-center justify-center", children: /* @__PURE__ */ jsx(s.icon, { size: 20 }) }),
        /* @__PURE__ */ jsx("span", { className: "text-xs font-extrabold tracking-widest text-brand-bright", children: s.n })
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-brand-deep mb-2", children: s.title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-brand-text leading-relaxed mb-3", children: s.body }),
      /* @__PURE__ */ jsxs("div", { className: "mt-auto pt-3 border-t border-slate-100 text-xs font-semibold text-brand-violet", children: [
        "Resultado: ",
        s.result
      ] })
    ] }, s.title)) })
  ] }) });
}
const cases = [
  { icon: Compass, title: "Recomendador de programas", text: "Ayuda a orientar a futuros alumnos hacia el programa adecuado." },
  { icon: Briefcase, title: "Agente de admisiones", text: "Resume leads, prepara respuestas, crea tareas y prioriza oportunidades." },
  { icon: BookOpen, title: "Tutor virtual con conocimiento interno", text: "Responde dudas usando documentación, programas, normativas y materiales aprobados." },
  { icon: Rocket, title: "Agente de onboarding", text: "Guía al alumno durante sus primeros días y reduce fricción inicial." },
  { icon: ShieldAlert, title: "Detector de abandono", text: "Identifica patrones de riesgo y activa alertas al equipo." },
  { icon: Pencil, title: "Copiloto docente", text: "Ayuda a preparar contenidos, rúbricas, actividades, resúmenes y materiales." },
  { icon: LifeBuoy, title: "Agente de soporte académico", text: "Resuelve preguntas frecuentes y deriva incidencias complejas." },
  { icon: BarChart3, title: "Reporting directivo", text: "Genera informes sobre captación, conversión, experiencia, soporte y retención." },
  { icon: Lightbulb, title: "Agente de mejora continua", text: "Detecta oportunidades de mejora en procesos, comunicación y experiencia de alumno." }
];
function UseCases() {
  return /* @__PURE__ */ jsx("section", { className: "py-20 md:py-28 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(
      SectionTitle,
      {
        eyebrow: "Casos de uso",
        title: "Lo que los agentes pueden hacer por tu organización educativa"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: cases.map((c) => /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-xl bg-brand-bg text-brand-bright flex items-center justify-center mb-4 group-hover:bg-gradient-cta group-hover:text-white transition-all", children: /* @__PURE__ */ jsx(c.icon, { size: 20 }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-brand-deep mb-2", children: c.title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-brand-text leading-relaxed", children: c.text })
    ] }, c.title)) })
  ] }) });
}
const cols = [
  {
    icon: Compass,
    title: "IA Power",
    tag: "Estrategia EdTech",
    text: "Customer Journey, experiencia de alumno, diseño de agentes IA, transformación educativa y adopción cultural.",
    accent: "bg-gradient-cta"
  },
  {
    icon: ShieldCheck,
    title: "DataQuantum",
    tag: "Gobierno e IA responsable",
    text: "Cumplimiento normativo, gobierno del dato, trazabilidad, seguridad e ISO 42001.",
    accent: "bg-gradient-violet"
  },
  {
    icon: Cpu,
    title: "Google",
    tag: "Tecnología",
    text: "Gemini, Workspace, NotebookLM, automatización, agentes, AppSheet, Apps Script, Looker Studio y ecosistema cloud/productividad.",
    accent: "bg-brand-deep"
  }
];
function Alliance() {
  return /* @__PURE__ */ jsx("section", { className: "py-20 md:py-28 bg-gradient-soft", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(
      SectionTitle,
      {
        eyebrow: "Alianza estratégica",
        title: "Estrategia, gobierno y tecnología para una transformación educativa real"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-5 md:grid-cols-3", children: cols.map((c) => /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx("div", { className: `w-12 h-12 rounded-xl flex items-center justify-center text-white mb-5 ${c.accent}`, children: /* @__PURE__ */ jsx(c.icon, { size: 22 }) }),
      /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold uppercase tracking-widest text-brand-bright mb-1", children: c.tag }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-brand-deep mb-3", children: c.title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-brand-text leading-relaxed", children: c.text })
    ] }, c.title)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 mx-auto max-w-4xl text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-xl md:text-2xl font-semibold text-brand-deep leading-snug", children: [
      "No se trata solo de implantar tecnología. Se trata de",
      " ",
      /* @__PURE__ */ jsx("span", { className: "bg-clip-text text-transparent bg-gradient-cta", children: "diseñar una organización educativa más inteligente, segura y orientada al alumno" }),
      "."
    ] }) })
  ] }) });
}
const steps = [
  { n: "01", title: "Diagnóstico estratégico", text: "Analizamos captación, admisiones, onboarding, soporte, experiencia, datos, herramientas y procesos." },
  { n: "02", title: "Mapa AS IS / TO BE", text: "Detectamos fricciones, fugas, tareas repetitivas, desconexiones y oportunidades de automatización." },
  { n: "03", title: "Diseño de agentes y journeys", text: "Definimos agentes prioritarios, casos de uso, flujos, permisos, integraciones y KPIs." },
  { n: "04", title: "Gobierno y seguridad", text: "Establecemos criterios de uso responsable, trazabilidad, supervisión humana, roles y control de datos." },
  { n: "05", title: "Implementación piloto", text: "Creamos los primeros agentes conectados a Google Workspace, CRM o herramientas internas." },
  { n: "06", title: "Adopción y escalado", text: "Formamos equipos, medimos impacto, ajustamos procesos y escalamos por áreas." }
];
function Method() {
  return /* @__PURE__ */ jsx("section", { id: "metodo", className: "py-20 md:py-28 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(
      SectionTitle,
      {
        eyebrow: "Método",
        title: "Nuestro método: de institución digital a Oficina Agéntica EdTech"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mt-14 relative max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-bright via-brand-cyan to-brand-violet/50 md:-translate-x-1/2" }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-10", children: steps.map((s, i) => /* @__PURE__ */ jsx(Step, { step: s, index: i }, s.n)) })
    ] })
  ] }) });
}
function Step({ step, index }) {
  const ref = useReveal();
  const isLeft = index % 2 === 0;
  return /* @__PURE__ */ jsxs("li", { ref, className: "relative md:grid md:grid-cols-2 md:gap-12", children: [
    /* @__PURE__ */ jsx("div", { className: `md:${isLeft ? "pr-12 text-right" : "col-start-2 pl-12"} pl-16 md:pl-0`, children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-100 rounded-2xl p-5 shadow-card", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-xs font-extrabold tracking-widest text-brand-bright mb-1", children: [
        "PASO ",
        step.n
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-brand-deep mb-2", children: step.title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-brand-text leading-relaxed", children: step.text })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute left-6 md:left-1/2 top-5 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-cta ring-4 ring-white" })
  ] });
}
const tools = [
  "Gmail",
  "Drive",
  "Calendar",
  "Docs",
  "Sheets",
  "Forms",
  "Meet",
  "Gemini",
  "NotebookLM",
  "AppSheet",
  "Apps Script",
  "Looker Studio",
  "GA4",
  "Google Tag Manager",
  "CRM",
  "Campus / LMS",
  "Herramientas internas"
];
function GoogleStack() {
  return /* @__PURE__ */ jsx("section", { id: "google-stack", className: "py-20 md:py-28 bg-gradient-soft", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(
      SectionTitle,
      {
        eyebrow: "Stack Google",
        title: "Diseñado para organizaciones educativas que ya trabajan con Google",
        subtitle: "Integramos los agentes en las herramientas que tu equipo ya utiliza para evitar cambios bruscos, reducir fricción y acelerar la adopción."
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mt-14 grid lg:grid-cols-12 gap-10 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-6 relative aspect-square max-w-md mx-auto w-full", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full bg-gradient-cta opacity-10 blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-6 rounded-full border border-brand-bright/20" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-16 rounded-full border border-brand-cyan/20" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-28 rounded-full border border-brand-violet/20" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "w-32 h-32 rounded-3xl bg-gradient-cta text-white flex flex-col items-center justify-center shadow-glow", children: [
          /* @__PURE__ */ jsx(Bot, { size: 28 }),
          /* @__PURE__ */ jsxs("div", { className: "mt-1.5 text-[11px] font-bold tracking-wide leading-tight text-center px-2", children: [
            "Agentes IA",
            /* @__PURE__ */ jsx("br", {}),
            "EdTech"
          ] })
        ] }) }),
        tools.slice(0, 12).map((t, i) => {
          const angle = i / 12 * Math.PI * 2 - Math.PI / 2;
          const r = 44;
          const x = 50 + Math.cos(angle) * r;
          const y = 50 + Math.sin(angle) * r;
          return /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute -translate-x-1/2 -translate-y-1/2 px-2.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-card text-[11px] font-semibold text-brand-deep whitespace-nowrap",
              style: { left: `${x}%`, top: `${y}%` },
              children: t
            },
            t
          );
        })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-6", children: [
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2.5", children: tools.map((t) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "px-3 py-2.5 rounded-xl bg-white border border-slate-100 text-sm font-medium text-brand-deep text-center hover:border-brand-bright hover:-translate-y-0.5 transition-all shadow-card",
            children: t
          },
          t
        )) }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-sm text-brand-text leading-relaxed", children: "También conectamos con CRMs, ERPs, campus virtuales y herramientas internas según viabilidad técnica y prioridades estratégicas." })
      ] })
    ] })
  ] }) });
}
const before = [
  "Un lead solicita información y recibe una respuesta genérica.",
  "El equipo de admisiones consulta datos manualmente.",
  "La documentación queda repartida entre CRM, Drive y email.",
  "El onboarding depende de correos sueltos.",
  "Las dudas frecuentes saturan al equipo.",
  "El riesgo de abandono se detecta tarde.",
  "Dirección no tiene una visión clara del journey completo."
];
const after = [
  "El agente entiende el perfil del lead y recomienda el programa adecuado.",
  "Se genera una respuesta personalizada y una tarea de seguimiento.",
  "La documentación se consulta automáticamente.",
  "El alumno recibe un onboarding guiado.",
  "El tutor virtual responde dudas frecuentes con conocimiento validado.",
  "Las señales de abandono generan alertas tempranas.",
  "Dirección recibe un dashboard con oportunidades de mejora."
];
function BeforeAfter() {
  return /* @__PURE__ */ jsx("section", { className: "py-20 md:py-28 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(SectionTitle, { eyebrow: "Transformación", title: "Antes y después de una Oficina Agéntica EdTech" }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 grid lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsx(
        Column,
        {
          title: "Antes",
          tone: "before",
          items: before,
          Icon: X
        }
      ),
      /* @__PURE__ */ jsx(
        Column,
        {
          title: "Después",
          tone: "after",
          items: after,
          Icon: Check
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 mx-auto max-w-4xl text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-xl md:text-2xl font-semibold text-brand-deep leading-snug", children: [
      "La IA no sustituye al equipo educativo.",
      " ",
      /* @__PURE__ */ jsx("span", { className: "bg-clip-text text-transparent bg-gradient-cta", children: "Le quita fricción para que pueda acompañar mejor" }),
      "."
    ] }) })
  ] }) });
}
function Column({
  title,
  tone,
  items: items2,
  Icon
}) {
  const ref = useReveal();
  const isAfter = tone === "after";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: `rounded-3xl p-6 md:p-8 border shadow-card ${isAfter ? "bg-gradient-soft border-brand-bright/20" : "bg-slate-50 border-slate-100"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `w-10 h-10 rounded-xl flex items-center justify-center text-white ${isAfter ? "bg-gradient-cta" : "bg-slate-400"}`,
              children: /* @__PURE__ */ jsx(Icon, { size: 18 })
            }
          ),
          /* @__PURE__ */ jsx("h3", { className: `text-xl font-bold ${isAfter ? "text-brand-deep" : "text-slate-700"}`, children: title })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: items2.map((t) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2.5 text-sm leading-relaxed", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: `mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${isAfter ? "bg-brand-cyan" : "bg-slate-400"}`
            }
          ),
          /* @__PURE__ */ jsx("span", { className: isAfter ? "text-brand-deep" : "text-slate-600", children: t })
        ] }, t)) })
      ]
    }
  );
}
const items = [
  "Más velocidad de respuesta a futuros alumnos",
  "Mayor conversión potencial de lead a matrícula",
  "Menos abandono temprano",
  "Mejor onboarding",
  "Soporte más ágil y ordenado",
  "Profesores y coordinadores con menos carga repetitiva",
  "Mayor trazabilidad de procesos",
  "Decisiones directivas con más contexto",
  "Mejor uso de Google Workspace",
  "IA gobernada, segura y alineada con objetivos"
];
function Results() {
  return /* @__PURE__ */ jsx("section", { className: "py-20 md:py-28 bg-gradient-soft", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(
      SectionTitle,
      {
        eyebrow: "Resultados esperados",
        title: "Resultados que se notan en captación, experiencia y operación"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: items.map((t) => /* @__PURE__ */ jsxs(Card, { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-brand-bg text-brand-bright flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(TrendingUp, { size: 18 }) }),
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-brand-deep leading-snug pt-1.5", children: t })
    ] }, t)) }),
    /* @__PURE__ */ jsx("p", { className: "mt-10 text-center text-xs uppercase tracking-widest text-brand-text", children: "Potencial de mejora · Según diagnóstico · Priorización de quick wins · Resultados estimados según contexto" })
  ] }) });
}
const plans = [
  {
    id: "start",
    name: "START",
    sub: "Diagnóstico y primer piloto",
    audience: "Para organizaciones educativas que quieren empezar con un caso de uso claro.",
    price: "Desde 2.500 €",
    featured: false,
    includes: [
      "Diagnóstico rápido EdTech + IA",
      "Revisión de captación, onboarding o soporte",
      "Mapa de oportunidades prioritarias",
      "1-2 agentes o automatizaciones básicas",
      "Plantillas de prompts y flujos",
      "Sesión de formación inicial"
    ],
    cta: "Solicitar diagnóstico Start",
    event: "click_cta_pricing_start"
  },
  {
    id: "growth",
    name: "GROWTH",
    sub: "Oficina Agéntica EdTech inicial",
    audience: "Para instituciones que quieren conectar varias áreas y medir impacto.",
    price: "Desde 6.500 €",
    featured: true,
    includes: [
      "Diagnóstico AS IS / TO BE completo",
      "Mapa del journey educativo",
      "4-6 agentes personalizados",
      "Automatizaciones con Google Workspace",
      "Dashboard básico en Looker Studio",
      "Gobierno inicial de IA y permisos",
      "Formación al equipo"
    ],
    cta: "Solicitar diagnóstico Growth",
    event: "click_cta_pricing_growth"
  },
  {
    id: "pro",
    name: "PRO",
    sub: "Transformación agéntica educativa",
    audience: "Para universidades, escuelas de negocio o grupos educativos que quieren escalar IA con gobierno.",
    price: "Desde 12.500 €",
    featured: false,
    includes: [
      "Mapa completo de procesos por área",
      "Agentes especializados por departamento",
      "Gobierno de IA, trazabilidad y seguridad",
      "Integraciones con CRM, LMS, ERP o sistemas internos",
      "Reporting avanzado para dirección",
      "Acompañamiento en adopción cultural",
      "Plan de escalado por fases"
    ],
    cta: "Solicitar diagnóstico Pro",
    event: "click_cta_pricing_pro"
  }
];
function Pricing() {
  return /* @__PURE__ */ jsx("section", { id: "paquetes", className: "py-20 md:py-28 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(
      SectionTitle,
      {
        eyebrow: "Paquetes",
        title: "Elige el punto de partida para tu Oficina Agéntica EdTech"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 lg:grid-cols-3", children: plans.map((p) => /* @__PURE__ */ jsx(PlanCard, { plan: p }, p.id)) }),
    /* @__PURE__ */ jsx("p", { className: "mt-10 text-center text-sm text-brand-text max-w-2xl mx-auto", children: "El diagnóstico nos permite recomendar el punto de partida adecuado según madurez, herramientas, equipo y objetivos." })
  ] }) });
}
function PlanCard({ plan }) {
  const ref = useReveal();
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: `relative rounded-3xl p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 ${plan.featured ? "bg-gradient-hero text-white shadow-glow lg:scale-[1.03]" : "bg-white text-brand-deep border border-slate-100 shadow-card hover:shadow-card-hover"}`,
      children: [
        plan.featured && /* @__PURE__ */ jsxs("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white text-brand-bright text-xs font-bold flex items-center gap-1 shadow-card", children: [
          /* @__PURE__ */ jsx(Star, { size: 12, className: "fill-brand-bright" }),
          " Más recomendado"
        ] }),
        /* @__PURE__ */ jsx("div", { className: `text-xs font-extrabold tracking-widest mb-1 ${plan.featured ? "text-brand-cyan" : "text-brand-bright"}`, children: plan.name }),
        /* @__PURE__ */ jsx("h3", { className: `text-xl font-bold mb-2 ${plan.featured ? "text-white" : "text-brand-deep"}`, children: plan.sub }),
        /* @__PURE__ */ jsx("p", { className: `text-sm leading-relaxed mb-5 ${plan.featured ? "text-white/85" : "text-brand-text"}`, children: plan.audience }),
        /* @__PURE__ */ jsx("div", { className: `text-3xl font-extrabold mb-6 ${plan.featured ? "text-white" : "text-brand-deep"}`, children: plan.price }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2.5 mb-7", children: plan.includes.map((i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2.5 text-sm", children: [
          /* @__PURE__ */ jsx(
            Check,
            {
              size: 16,
              className: `mt-0.5 shrink-0 ${plan.featured ? "text-brand-cyan" : "text-brand-bright"}`
            }
          ),
          /* @__PURE__ */ jsx("span", { className: plan.featured ? "text-white/90" : "text-brand-text", children: i })
        ] }, i)) }),
        /* @__PURE__ */ jsx(
          ButtonLink,
          {
            href: "#diagnostico",
            variant: plan.featured ? "secondary" : "cta",
            className: "w-full",
            onClick: () => trackEvent(plan.event, { plan: plan.id }),
            children: plan.cta
          }
        )
      ]
    }
  );
}
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
const STORAGE_KEY = "iapower_utm";
function captureUtms() {
  const empty2 = {
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: ""
  };
  if (typeof window === "undefined") return empty2;
  let stored = {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) stored = JSON.parse(raw);
  } catch {
    stored = {};
  }
  const url = new URLSearchParams(window.location.search);
  const next = { ...empty2, ...stored };
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
    }
  }
  return next;
}
const FORM_ENDPOINT = "/oficina-agentica-edtech/api/procesar-lead.php";
async function submitLead(data) {
  const body = new FormData();
  Object.entries(data).forEach(([k, v]) => {
    body.append(k, typeof v === "boolean" ? v ? "1" : "" : String(v ?? ""));
  });
  try {
    const res = await fetch(FORM_ENDPOINT, { method: "POST", body });
    const text = await res.text();
    if (!res.ok && res.status === 404) {
      return { ok: true, message: "Solicitud recibida correctamente (modo demo: PHP no disponible en este entorno)." };
    }
    try {
      const json = JSON.parse(text);
      return json;
    } catch {
      return { ok: true, message: "Solicitud recibida correctamente (modo demo)." };
    }
  } catch {
    return { ok: false, message: "No se pudo enviar la solicitud. Inténtalo de nuevo." };
  }
}
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function validateLead(data) {
  const errors = {};
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
const CALENDAR_URL = "https://calendar.google.com/";
const TIPO_ORG = [
  "Universidad",
  "Escuela de negocio",
  "Academia",
  "Plataforma EdTech",
  "Empresa de formación",
  "Fundación / institución educativa",
  "Otro"
];
const TAMANO = ["1-10", "11-50", "51-200", "200+"];
const WORKSPACE = [
  "Sí, de forma avanzada",
  "Sí, pero poco aprovechado",
  "Parcialmente",
  "No",
  "No lo sé"
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
  "Otro"
];
const empty = () => ({
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
  utm_term: ""
});
function LeadForm() {
  const [data, setData] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverMsg, setServerMsg] = useState("");
  const [startedTracked, setStartedTracked] = useState(false);
  const utms = useMemo(() => captureUtms(), []);
  useEffect(() => {
    setData((d) => ({ ...d, ...utms }));
  }, [utms]);
  function update(key, value) {
    setData((d) => ({ ...d, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: void 0 }));
  }
  function onFirstFocus() {
    if (!startedTracked) {
      setStartedTracked(true);
      trackEvent("form_start");
    }
  }
  async function onSubmit(e) {
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
    return /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl border border-slate-100 shadow-card p-8 md:p-10 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "w-14 h-14 mx-auto rounded-full bg-emerald-50 flex items-center justify-center mb-5", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "text-emerald-600", size: 32 }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-bold text-brand-deep mb-3", children: "Solicitud recibida" }),
      /* @__PURE__ */ jsx("p", { className: "text-brand-text max-w-xl mx-auto leading-relaxed", children: "Gracias. Hemos recibido tu solicitud. El equipo de IA Power revisará tu contexto y se pondrá en contacto contigo para valorar el diagnóstico más adecuado." }),
      serverMsg && serverMsg.includes("demo") && /* @__PURE__ */ jsx("p", { className: "mt-3 text-xs text-brand-text/70 italic", children: serverMsg }),
      /* @__PURE__ */ jsx("div", { className: "mt-7", children: /* @__PURE__ */ jsxs(
        ButtonLink,
        {
          href: CALENDAR_URL,
          target: "_blank",
          rel: "noopener noreferrer",
          variant: "cta",
          size: "lg",
          onClick: () => trackEvent("click_calendar_booking"),
          children: [
            /* @__PURE__ */ jsx(CalendarCheck, { size: 18 }),
            " Reservar reunión estratégica"
          ]
        }
      ) })
    ] });
  }
  return /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit,
      onFocus: onFirstFocus,
      className: "bg-white rounded-3xl border border-slate-100 shadow-card p-6 md:p-10",
      noValidate: true,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-5 md:grid-cols-2", children: [
          /* @__PURE__ */ jsx(Field, { label: "Nombre completo *", error: errors.nombre, children: /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              value: data.nombre,
              onChange: (e) => update("nombre", e.target.value),
              className: input(!!errors.nombre),
              autoComplete: "name"
            }
          ) }),
          /* @__PURE__ */ jsx(Field, { label: "Email profesional *", error: errors.email, children: /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              value: data.email,
              onChange: (e) => update("email", e.target.value),
              className: input(!!errors.email),
              autoComplete: "email"
            }
          ) }),
          /* @__PURE__ */ jsx(Field, { label: "Teléfono", children: /* @__PURE__ */ jsx(
            "input",
            {
              type: "tel",
              value: data.telefono,
              onChange: (e) => update("telefono", e.target.value),
              className: input(false),
              autoComplete: "tel"
            }
          ) }),
          /* @__PURE__ */ jsx(Field, { label: "Empresa / institución *", error: errors.empresa, children: /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              value: data.empresa,
              onChange: (e) => update("empresa", e.target.value),
              className: input(!!errors.empresa),
              autoComplete: "organization"
            }
          ) }),
          /* @__PURE__ */ jsx(Field, { label: "Cargo", children: /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              value: data.cargo,
              onChange: (e) => update("cargo", e.target.value),
              className: input(false),
              autoComplete: "organization-title"
            }
          ) }),
          /* @__PURE__ */ jsx(Field, { label: "Web de la institución", children: /* @__PURE__ */ jsx(
            "input",
            {
              type: "url",
              value: data.web,
              onChange: (e) => update("web", e.target.value),
              className: input(false),
              placeholder: "https://",
              autoComplete: "url"
            }
          ) }),
          /* @__PURE__ */ jsx(Field, { label: "Tipo de organización *", error: errors.tipo_organizacion, children: /* @__PURE__ */ jsxs(
            "select",
            {
              value: data.tipo_organizacion,
              onChange: (e) => update("tipo_organizacion", e.target.value),
              className: input(!!errors.tipo_organizacion),
              children: [
                /* @__PURE__ */ jsx("option", { value: "", children: "Selecciona…" }),
                TIPO_ORG.map((t) => /* @__PURE__ */ jsx("option", { value: t, children: t }, t))
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(Field, { label: "Tamaño del equipo *", error: errors.tamano_equipo, children: /* @__PURE__ */ jsxs(
            "select",
            {
              value: data.tamano_equipo,
              onChange: (e) => update("tamano_equipo", e.target.value),
              className: input(!!errors.tamano_equipo),
              children: [
                /* @__PURE__ */ jsx("option", { value: "", children: "Selecciona…" }),
                TAMANO.map((t) => /* @__PURE__ */ jsx("option", { value: t, children: t }, t))
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(Field, { label: "¿Usáis Google Workspace? *", error: errors.google_workspace, children: /* @__PURE__ */ jsxs(
            "select",
            {
              value: data.google_workspace,
              onChange: (e) => update("google_workspace", e.target.value),
              className: input(!!errors.google_workspace),
              children: [
                /* @__PURE__ */ jsx("option", { value: "", children: "Selecciona…" }),
                WORKSPACE.map((t) => /* @__PURE__ */ jsx("option", { value: t, children: t }, t))
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(Field, { label: "¿Dónde se pierde más valor ahora? *", error: errors.area_prioritaria, children: /* @__PURE__ */ jsxs(
            "select",
            {
              value: data.area_prioritaria,
              onChange: (e) => update("area_prioritaria", e.target.value),
              className: input(!!errors.area_prioritaria),
              children: [
                /* @__PURE__ */ jsx("option", { value: "", children: "Selecciona…" }),
                AREAS.map((t) => /* @__PURE__ */ jsx("option", { value: t, children: t }, t))
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(Field, { label: "Herramientas actuales", className: "md:col-span-2", children: /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              value: data.herramientas,
              onChange: (e) => update("herramientas", e.target.value),
              placeholder: "CRM, Google Workspace, LMS/Campus, email marketing, hojas de cálculo, otras...",
              className: input(false)
            }
          ) }),
          /* @__PURE__ */ jsx(Field, { label: "Cuéntanos brevemente tu situación", className: "md:col-span-2", children: /* @__PURE__ */ jsx(
            "textarea",
            {
              rows: 4,
              value: data.mensaje,
              onChange: (e) => update("mensaje", e.target.value),
              className: `${input(false)} resize-none`
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "sr-honeypot", "aria-hidden": "true", children: /* @__PURE__ */ jsxs("label", { children: [
          "Tu web (no rellenar)",
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              tabIndex: -1,
              autoComplete: "off",
              value: data.website_url,
              onChange: (e) => update("website_url", e.target.value)
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx("input", { type: "hidden", name: "utm_source", value: data.utm_source }),
        /* @__PURE__ */ jsx("input", { type: "hidden", name: "utm_medium", value: data.utm_medium }),
        /* @__PURE__ */ jsx("input", { type: "hidden", name: "utm_campaign", value: data.utm_campaign }),
        /* @__PURE__ */ jsx("input", { type: "hidden", name: "utm_content", value: data.utm_content }),
        /* @__PURE__ */ jsx("input", { type: "hidden", name: "utm_term", value: data.utm_term }),
        /* @__PURE__ */ jsxs("label", { className: "mt-6 flex gap-3 items-start cursor-pointer select-none", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "checkbox",
              checked: data.rgpd,
              onChange: (e) => update("rgpd", e.target.checked),
              className: "mt-1 w-4 h-4 accent-[#1E88E5]"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-brand-text", children: "Acepto la política de privacidad y autorizo a IA Power Business Consulting a contactarme para valorar el diagnóstico. Tus datos no se compartirán con terceros sin tu consentimiento." })
        ] }),
        errors.rgpd && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.rgpd }),
        status === "error" && /* @__PURE__ */ jsxs("div", { className: "mt-5 flex items-center gap-2 p-3 rounded-lg bg-red-50 border border-red-100 text-red-700 text-sm", children: [
          /* @__PURE__ */ jsx(AlertCircle, { size: 18 }),
          " ",
          serverMsg || "No se pudo enviar la solicitud."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-7 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              type: "submit",
              variant: "cta",
              size: "lg",
              disabled: status === "submitting",
              className: "flex-1 sm:flex-none",
              children: status === "submitting" ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(Loader2, { className: "animate-spin", size: 18 }),
                " Enviando…"
              ] }) : "Solicitar diagnóstico"
            }
          ),
          /* @__PURE__ */ jsxs(
            ButtonLink,
            {
              href: CALENDAR_URL,
              target: "_blank",
              rel: "noopener noreferrer",
              variant: "secondary",
              size: "lg",
              onClick: () => trackEvent("click_calendar_booking"),
              children: [
                /* @__PURE__ */ jsx(CalendarCheck, { size: 18 }),
                " Reservar reunión estratégica"
              ]
            }
          )
        ] })
      ]
    }
  );
}
function Field({
  label,
  error,
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsxs("label", { className: `block ${className}`, children: [
    /* @__PURE__ */ jsx("span", { className: "block text-sm font-medium text-brand-deep mb-1.5", children: label }),
    children,
    error && /* @__PURE__ */ jsx("span", { className: "block mt-1 text-sm text-red-600", children: error })
  ] });
}
function input(hasError) {
  return `w-full px-4 py-2.5 rounded-xl border bg-white text-brand-deep placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-bright/40 focus:border-brand-bright transition ${hasError ? "border-red-300 bg-red-50/30" : "border-slate-200"}`;
}
const bullets = [
  "Revisamos captación, admisiones, onboarding, soporte, retención y operación.",
  "Detectamos procesos manuales, fugas y desconexiones entre áreas.",
  "Identificamos agentes IA prioritarios.",
  "Evaluamos el uso actual de Google Workspace, Gemini, CRM y datos.",
  "Priorizamos quick wins y oportunidades de alto impacto.",
  "Definimos siguientes pasos con enfoque estratégico."
];
function Diagnosis() {
  return /* @__PURE__ */ jsx("section", { id: "diagnostico", className: "py-20 md:py-28 bg-gradient-soft", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5", children: [
      /* @__PURE__ */ jsx(
        SectionTitle,
        {
          eyebrow: "Diagnóstico",
          title: "Solicita tu Diagnóstico de Oficina Agéntica EdTech",
          subtitle: "Analizamos tu organización educativa para detectar dónde estás perdiendo conversión, tiempo, visibilidad o experiencia de alumno, y te proponemos una primera hoja de ruta para aplicar agentes IA con criterio, seguridad y retorno.",
          align: "left"
        }
      ),
      /* @__PURE__ */ jsx("ul", { className: "mt-8 space-y-3", children: bullets.map((b) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-sm text-brand-deep", children: [
        /* @__PURE__ */ jsx("span", { className: "mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0" }),
        b
      ] }, b)) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-brand-bright/30 text-sm font-semibold text-brand-deep shadow-card", children: [
        /* @__PURE__ */ jsx(ShieldCheck, { size: 16, className: "text-brand-bright" }),
        "Orientado a dirección · Sin compromiso · 100% confidencial"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsx(LeadForm, {}) })
  ] }) });
}
const faqs = [
  {
    q: "¿Esto sustituye al equipo educativo?",
    a: "No. La Oficina Agéntica EdTech elimina fricción operativa y ayuda al equipo a acompañar mejor a futuros alumnos, alumnos actuales, docentes y dirección."
  },
  {
    q: "¿Necesitamos usar Google Workspace?",
    a: "Es recomendable porque el servicio está diseñado para aprovechar Gmail, Drive, Calendar, Docs, Sheets, Forms, Meet, Gemini, NotebookLM, Apps Script y Looker Studio, aunque también puede conectarse con CRM, LMS u otras herramientas."
  },
  {
    q: "¿Qué diferencia hay entre un chatbot y un agente IA?",
    a: "Un chatbot responde. Un agente puede analizar contexto, ejecutar tareas, activar flujos, preparar documentos, crear recordatorios, buscar información y coordinar procesos bajo supervisión humana."
  },
  {
    q: "¿Qué papel tiene DataQuantum?",
    a: "DataQuantum refuerza la parte de gobierno, IA responsable, cumplimiento, seguridad, trazabilidad y preparación para marcos como ISO 42001."
  },
  {
    q: "¿Por dónde empezamos?",
    a: "Por un diagnóstico estratégico que identifica fricciones, oportunidades, riesgos y casos de uso prioritarios."
  },
  {
    q: "¿Se puede empezar con un piloto?",
    a: "Sí. La recomendación es empezar con un caso de uso claro, medir impacto y escalar progresivamente."
  },
  {
    q: "¿Qué ocurre con la seguridad y los datos?",
    a: "La solución se diseña con permisos, trazabilidad, supervisión humana y criterios de IA responsable desde el inicio."
  },
  {
    q: "¿Se puede integrar con CRM o campus virtual?",
    a: "Sí. El enfoque permite conectar agentes con CRM, LMS, campus virtual, hojas de cálculo, Drive y otras herramientas internas según viabilidad técnica."
  }
];
function FAQ() {
  const [open, setOpen] = useState(0);
  return /* @__PURE__ */ jsx("section", { className: "py-20 md:py-28 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(SectionTitle, { eyebrow: "Preguntas frecuentes", title: "Lo que la dirección suele preguntar" }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 space-y-3", children: faqs.map((f, i) => {
      const isOpen = open === i;
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: `rounded-2xl border transition-all ${isOpen ? "border-brand-bright/40 shadow-card bg-white" : "border-slate-100 bg-white"}`,
          children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => setOpen(isOpen ? null : i),
                className: "w-full flex items-center justify-between gap-4 px-5 py-4 text-left",
                "aria-expanded": isOpen,
                children: [
                  /* @__PURE__ */ jsx("span", { className: "font-semibold text-brand-deep", children: f.q }),
                  /* @__PURE__ */ jsx(
                    ChevronDown,
                    {
                      size: 20,
                      className: `text-brand-bright shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`,
                children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx("p", { className: "px-5 pb-5 text-sm text-brand-text leading-relaxed", children: f.a }) })
              }
            )
          ]
        },
        f.q
      );
    }) })
  ] }) });
}
function FinalCTA() {
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-gradient-hero text-white py-20 md:py-28", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-0 opacity-30", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-brand-cyan/40 blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-32 -right-24 w-[32rem] h-[32rem] rounded-full bg-brand-violet/40 blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-extrabold leading-tight text-white", children: [
        "La próxima organización educativa no tendrá más herramientas.",
        " ",
        /* @__PURE__ */ jsx("span", { className: "bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-cyan-100", children: "Tendrá mejores decisiones." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-base md:text-lg text-white/85 max-w-3xl mx-auto leading-relaxed", children: "En IA Power diseñamos Oficinas Agénticas EdTech donde personas, datos, agentes IA y tecnología Google trabajan como un único sistema para mejorar captación, experiencia de alumno, operación y crecimiento." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-col sm:flex-row gap-3 justify-center", children: [
        /* @__PURE__ */ jsx(
          ButtonLink,
          {
            href: "#diagnostico",
            variant: "cta",
            size: "lg",
            onClick: () => trackEvent("click_cta_hero", { from: "final_cta" }),
            children: "Quiero solicitar mi diagnóstico"
          }
        ),
        /* @__PURE__ */ jsx(
          ButtonLink,
          {
            href: "https://iapower.es",
            target: "_blank",
            rel: "noopener noreferrer",
            variant: "secondary",
            size: "lg",
            onClick: () => trackEvent("click_cta_secondary", { from: "final_cta" }),
            children: "Hablar con IA Power"
          }
        )
      ] })
    ] })
  ] });
}
function LandingPage() {
  useEffect(() => {
    captureUtms();
    const off = initScrollTracking();
    return off;
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(WhatIsChanging, {}),
      /* @__PURE__ */ jsx(Problem, {}),
      /* @__PURE__ */ jsx(WhatIs, {}),
      /* @__PURE__ */ jsx(AgentsJourney, {}),
      /* @__PURE__ */ jsx(UseCases, {}),
      /* @__PURE__ */ jsx(Alliance, {}),
      /* @__PURE__ */ jsx(Method, {}),
      /* @__PURE__ */ jsx(GoogleStack, {}),
      /* @__PURE__ */ jsx(BeforeAfter, {}),
      /* @__PURE__ */ jsx(Results, {}),
      /* @__PURE__ */ jsx(Pricing, {}),
      /* @__PURE__ */ jsx(Diagnosis, {}),
      /* @__PURE__ */ jsx(FAQ, {}),
      /* @__PURE__ */ jsx(FinalCTA, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  LandingPage as component
};
