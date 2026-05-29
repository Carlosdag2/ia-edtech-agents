export function Footer() {
  return (
    <footer className="bg-brand-deep text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-cta flex items-center justify-center text-white font-extrabold">
              iA
            </div>
            <div>
              <div className="text-white font-bold">IA Power</div>
              <div className="text-xs uppercase tracking-widest text-brand-cyan">
                Oficina Agéntica EdTech
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            IA Power Business Consulting. Estrategia, IA y Google Workspace para organizaciones
            educativas que quieren liderar la próxima década.
          </p>
        </div>

        <div className="text-sm">
          <div className="text-white font-semibold mb-3">Alianza</div>
          <ul className="space-y-1.5">
            <li>IA Power Business Consulting</li>
            <li>DataQuantum</li>
            <li>Google</li>
          </ul>
        </div>

        <div className="text-sm">
          <div className="text-white font-semibold mb-3">Enlaces</div>
          <ul className="space-y-1.5">
            <li>
              <a
                href="https://iapower.es"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-cyan transition-colors"
              >
                iapower.es
              </a>
            </li>
            <li>
              <a href="#diagnostico" className="hover:text-brand-cyan transition-colors">
                Solicitar diagnóstico
              </a>
            </li>
            <li>
              <a href="/politica-privacidad" className="hover:text-brand-cyan transition-colors">
                Política de privacidad
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-xs flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <div>© 2026 IA Power Business Consulting. Todos los derechos reservados.</div>
          <div className="text-white/60">IA Power + DataQuantum + Google</div>
        </div>
      </div>
    </footer>
  );
}
