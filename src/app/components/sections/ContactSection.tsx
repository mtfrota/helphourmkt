import { contactContent, socials } from "@/app/content/home";
import Reveal from "../ui/Reveal";
import SectionBadge from "../ui/SectionBadge";
import WhatsAppButton from "../ui/WhatsAppButton";

export default function ContactSection() {
  return (
    <section id="contato" className="scroll-mt-36 bg-[var(--text)] py-16 text-[#0f1120] md:scroll-mt-28">
      <Reveal className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <SectionBadge>{contactContent.badge}</SectionBadge>
          <h2 className="mt-2 text-3xl font-bold">
            Entre em <span className="text-[#66477b]">Contato</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-[#2b2e3f]">{contactContent.description}</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <article className="space-y-4 rounded-2xl border border-[#66477b]/20 bg-white p-6 text-center shadow-sm lg:text-left">
            <h3 className="text-2xl font-extrabold uppercase text-[#4c1276]">Informações de contato</h3>
            <div>
              <p className="text-sm font-bold uppercase text-[#4c1276]">{contactContent.addressTitle}</p>
              {contactContent.addressLines.map((line) => (
                <p key={line} className="text-base">
                  {line}
                </p>
              ))}
            </div>
            <div>
              <p className="text-sm font-bold uppercase text-[#4c1276]">{contactContent.whatsappLabel}</p>
              <WhatsAppButton className="text-base underline">{contactContent.whatsappNumber}</WhatsAppButton>
            </div>
            <div>
              <p className="text-sm font-bold uppercase text-[#4c1276]">{contactContent.emailLabel}</p>
              <a href={`mailto:${contactContent.email}`} className="text-base underline">
                {contactContent.email}
              </a>
            </div>
            <div>
              <p className="text-sm font-bold uppercase text-[#4c1276]">Redes sociais</p>
              <div className="mt-2 flex flex-wrap justify-center gap-2 lg:justify-start">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-pop rounded-full border border-[#66477b]/40 px-3 py-1 text-sm"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </article>

          <form className="space-y-4 rounded-2xl border border-[#66477b]/20 bg-white p-6 shadow-sm">
            <h3 className="text-center text-2xl font-extrabold uppercase text-[#4c1276] lg:text-left">Envie sua mensagem</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm font-semibold uppercase text-[#4c1276]" htmlFor="nome">
                Nome
                <input
                  id="nome"
                  name="nome"
                  className="mt-1 w-full rounded-lg border border-[#66477b]/45 px-3 py-2 outline-none focus:border-[#4c1276]"
                />
              </label>
              <label className="text-sm font-semibold uppercase text-[#4c1276]" htmlFor="email">
                E-mail
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-1 w-full rounded-lg border border-[#66477b]/45 px-3 py-2 outline-none focus:border-[#4c1276]"
                />
              </label>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm font-semibold uppercase text-[#4c1276]" htmlFor="telefone">
                Telefone
                <input
                  id="telefone"
                  name="telefone"
                  className="mt-1 w-full rounded-lg border border-[#66477b]/45 px-3 py-2 outline-none focus:border-[#4c1276]"
                />
              </label>
              <label className="text-sm font-semibold uppercase text-[#4c1276]" htmlFor="servico">
                Serviço de interesse
                <input
                  id="servico"
                  name="servico"
                  className="mt-1 w-full rounded-lg border border-[#66477b]/45 px-3 py-2 outline-none focus:border-[#4c1276]"
                />
              </label>
            </div>
            <label className="block text-sm font-semibold uppercase text-[#4c1276]" htmlFor="mensagem">
              Mensagem
              <textarea
                id="mensagem"
                name="mensagem"
                className="mt-1 h-32 w-full rounded-lg border border-[#66477b]/45 px-3 py-2 outline-none focus:border-[#4c1276]"
              />
            </label>
            <button
              type="submit"
              className="btn-pop mx-auto inline-flex w-full justify-center rounded-full bg-[#4c1276] px-7 py-3 text-sm font-bold uppercase tracking-wide text-white sm:w-auto lg:mx-0"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
