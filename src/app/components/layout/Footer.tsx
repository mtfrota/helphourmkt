"use client";

import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { name: "Início", href: "/helphour/#hero" },
  { name: "Sobre", href: "/helphour/#sobre" },
  { name: "Serviços", href: "/helphour/servicos" },
  { name: "Portfólio", href: "/helphour/portfolio" },
  { name: "Contato", href: "/helphour/#contato" },
];

const WHATSAPP_URL = "https://wa.me/5585990000000?text=Olá! Gostaria de saber mais sobre os serviços da HelpHour.";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto w-full overflow-hidden bg-[#2b0f40]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e0b845]/40 to-transparent" />
      <div className="absolute inset-0 bg-[#2b0f40]/50 backdrop-blur-xl" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="flex flex-col items-center gap-10 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Image src="/logo.svg" width={48} height={48} alt="Logo HelpHour" className="h-12 w-auto object-contain" />
              <div className="absolute inset-0 -z-10 bg-[#e0b845]/20 opacity-50 blur-2xl" />
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white">HelpHour Marketing</span>
              <span className="text-[11px] uppercase tracking-widest text-white/50">Agência Digital • {year}</span>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium">
            {footerLinks.map((link) => (
              <Link key={link.name} href={link.href} className="group relative text-white/70 transition duration-300 hover:text-[#e0b845]">
                {link.name}
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#e0b845] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-2 md:items-end">
            <span className="text-[11px] uppercase tracking-widest text-white/40">Fale conosco</span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-bold text-[#e0b845] transition-all duration-300 hover:gap-4"
            >
              (85) 99000-0000
              <span className="h-[1px] w-6 bg-[#e0b845]/40 transition-all duration-300 group-hover:w-10 group-hover:bg-[#e0b845]" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-[11px] text-white/40 md:flex-row">
          <span>© {year} HelpHour. Todos os direitos reservados.</span>
          <span className="italic opacity-60">Feito com estratégia e presença digital</span>
        </div>
      </div>
    </footer>
  );
}
