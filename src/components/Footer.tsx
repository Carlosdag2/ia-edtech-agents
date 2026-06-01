import { BrandLogo } from "@/components/BrandLogo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-deep px-5 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <BrandLogo variant="footer" />

        <div className="flex flex-wrap gap-4 text-sm text-white/70">
          <span>
            © {currentYear} IA Power |{" "}
            <a href="https://iapower.es/" className="hover:text-white">
              iapower.es
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}