"use client";

import { services, type ServiceIconName } from "@/app/content/home";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  CalendarDays, 
  Camera, 
  Globe2, 
  MessageSquare, 
  Video as VideoIcon,
  // Novos ícones para agência de marketing
  CheckCircle2,
  ArrowRight,
  Zap 
} from "lucide-react";
import Link from "next/link";
import { type ComponentType } from "react";
import Reveal from "../ui/Reveal";
import SectionBadge from "../ui/SectionBadge";

// Mapeamento de ícones existentes mantido
const iconMap: Record<ServiceIconName, ComponentType<{ size?: number; strokeWidth?: number }>> = {
  MessageSquare,
  Video: VideoIcon,
  Camera,
  CalendarDays,
  Globe2,
  BarChart3,
};

export default function ServicesSection() {
  return (
    // MUDANÇA: Fundo escuro para a seção, texto claro
    <section id="servicos" className="scroll-mt-36 bg-[#0c023c] py-20 text-white md:scroll-mt-28">
      <Reveal className="mx-auto w-full max-w-7xl px-4 sm:px-6"> {/* Ligeiramente mais largo */}
        
        <div className="text-center mb-16"> {/* Aumentado o margin-bottom */}
          {/* MUDANÇA: Badge com ícone Zap e cores de destaque */}
          <SectionBadge className="mx-auto flex items-center gap-2 bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 px-4 py-1">
            <Zap size={14} className="text-[var(--accent)]" />
            Acelere seu Crescimento
          </SectionBadge>
          
          {/* MUDANÇA: Título maior e com gradiente no destaque */}
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Nossas <span className="text-[var(--accent)] bg-clip-text">Soluções Digitais</span>
          </h2>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
            Estratégias completas de marketing para dominar o mercado, captar clientes qualificados e escalar seus resultados comerciais.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }} // Animação vindo de um pouco mais baixo
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }} // Ease mais suave
                // MUDANÇA: Estilo do card: sombra forte no hover, borda sutil, padding aumentado
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(102,71,123,0.3)]"
              >
                {/* MUDANÇA: Detalhe decorativo lateral que aparece no hover (Accent color) */}
                <span className="absolute inset-y-0 left-0 w-1.5 scale-y-0 bg-[var(--accent)] transition-transform duration-300 group-hover:scale-y-100" aria-hidden />

                <div className="flex flex-col gap-5"> {/* Layout vertical para o cabeçalho do card */}
                  {/* MUDANÇA: Ícone com fundo Accent e brilho (Glow) */}
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent)] text-[#0c023c] shadow-lg shadow-[var(--accent)]/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon size={30} strokeWidth={2.5} />
                  </span>
                  
                  <div>
                    {/* Título mais robusto e uppercase opcional */}
                    <h3 className="font-display text-xl font-extrabold uppercase tracking-tight leading-tight text-[#0c023c]">
                      {service.title}
                    </h3>
                    {/* Texto ligeiramente maior e mais escuro para leitura no card branco */}
                    <p className="mt-3 text-base leading-relaxed text-[#2b2e3f]">
                      {service.text}
                    </p>
                  </div>
                </div>

                {/* MUDANÇA: Lista de itens usando CheckCircle2 e cor Accent */}
                <ul className="mt-8 space-y-3.5 text-sm text-[#2b2e3f] flex-grow" role="list">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" strokeWidth={2.5} aria-hidden />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* MUDANÇA: Botão Saiba Mais sólido, ocupando largura total, com ícone de seta */}
                <Link
                  href="/helphour/portfolio"
                  className="mt-10 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#4c1276] px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition duration-200 hover:bg-[#66477b] hover:shadow-lg hover:shadow-[#4c1276]/30 group-hover:gap-3"
                >
                  Veja mais
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}