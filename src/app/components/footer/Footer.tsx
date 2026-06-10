import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_URL as BASE_WHATSAPP_URL } from "@/app/content/home";

const footerLinks = [
  { name: "Início", href: "/helphour#hero" },
  { name: "Sobre", href: "/helphour#sobre" },
  { name: "Serviços", href: "/helphour#servicos" },
  { name: "Portfólio", href: "/helphour/portfolio" },
  { name: "Contato", href: "/helphour#contato" },
];

const WHATSAPP_URL = `${BASE_WHATSAPP_URL}?text=${encodeURIComponent(
  "Olá! Gostaria de saber mais sobre os serviços da HelpHour."
)}`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto w-full overflow-hidden border-t border-white/[0.04] bg-[#14051f]">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(224,184,69,0.10),transparent_45%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)]" />

      {/* Glow orbs */}
      <div className="absolute left-[10%] top-0 h-72 w-72 rounded-full bg-[#e0b845]/10 blur-3xl" />
      <div className="absolute right-[5%] top-10 h-80 w-80 rounded-full bg-purple-700/10 blur-3xl" />

      {/* Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="select-none text-[90px] font-black uppercase tracking-[0.35em] text-white/2 sm:text-[140px]">
          HELPHOUR
        </span>
      </div>

      {/* Golden top line */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#e0b845]/40 to-transparent" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-14 sm:px-8 lg:px-10">
        {/* Main content */}
        <div className="flex flex-col items-center gap-12 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
          {/* Brand */}
          <div className="flex max-w-sm flex-col items-center lg:items-start">
            <div className="flex items-center gap-4">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
                <div className="absolute inset-0 rounded-2xl bg-[#e0b845]/10 blur-2xl" />

                <Image
                  src="/logo.svg"
                  width={58}
                  height={58}
                  alt="Logo HelpHour"
                  className="relative h-12 w-auto object-contain"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-lg font-semibold tracking-tight text-white">
                  HelpHour Marketing
                </span>

                <span className="mt-1 text-[11px] uppercase tracking-[0.28em] text-white/40">
                  Agência Digital • {year}
                </span>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-white/55">
              Construindo marcas com presença forte, estética refinada e
              posicionamento estratégico no digital.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-5">
            <span className="text-[11px] uppercase tracking-[0.28em] text-white/35">
              Navegação
            </span>

            <nav className="flex flex-col items-center gap-3 lg:items-start">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative w-fit text-sm font-medium text-white/65 transition-all duration-300 hover:text-[#e0b845]"
                >
                  <span className="relative">
                    {link.name}

                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#e0b845] transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex max-w-xs flex-col items-center gap-5 text-center lg:items-start lg:text-left">
            <div className="flex flex-col gap-2">
              <span className="text-[11px] uppercase tracking-[0.28em] text-white/35">
                Contato
              </span>

              <h3 className="text-xl font-semibold text-white">
                Vamos conversar.
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-white/50">
              Entre em contato e descubra como fortalecer sua presença digital
              com estratégia e identidade visual profissional.
            </p>

            <div className="flex flex-col gap-3">
              <span className="w-fit rounded-full border border-[#e0b845]/20 bg-[#e0b845]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#e0b845]">
                Resposta rápida
              </span>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-base font-bold text-[#e0b845] transition-all duration-300 hover:gap-5"
              >
                (85) 99000-0000

                <span className="h-px w-8 bg-[#e0b845]/40 transition-all duration-300 group-hover:w-14 group-hover:bg-[#e0b845]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.05] pt-6 text-center md:flex-row md:text-left">
          <span className="text-xs text-white/35">
            © {year} HelpHour. Todos os direitos reservados.
          </span>

          <span className="text-xs italic text-white/25">
            Design que transmite autoridade - mtfrota.exe
          </span>
        </div>
      </div>
    </footer>
  );
}
