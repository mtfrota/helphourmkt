import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  const whatsappUrl = "https://wa.me/5585990000000";

  return (
    <footer className="mt-auto border-t border-brand/40 bg-surface/35">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" width={44} height={44} alt="Help Hour MKT" className="h-11 w-11 object-contain" />
          <div>
            <p className="text-sm font-semibold text-brand">HelpHour Marketing</p>
            <p className="text-xs text-muted">{year} - Agencia digital.</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs text-muted">
          <Link href="/helphour#sobre" className="transition hover:text-brand">
            Sobre
          </Link>
          <Link href="/helphour#servicos" className="transition hover:text-brand">
            Servicos
          </Link>
          <Link href="/helphour#portfolio" className="transition hover:text-brand">
            Portfolio
          </Link>
          <Link href="/helphour#contato" className="transition hover:text-brand">
            Contato
          </Link>
        </div>

        <div>
          <p className="text-xs text-muted">
            WhatsApp:{" "}
            <a
              className="text-brand underline"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              (85) 99000-0000
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
