import Link from "next/link";

const videoGallery = [
  { title: "Evento corporativo - making of", category: "Eventos" },
  { title: "Campanha institucional - teaser", category: "Institucional" },
  { title: "Reels para rede social", category: "Social Media" },
  { title: "Anúncio de tráfego pago", category: "Performance" },
  { title: "Cobertura de lançamento", category: "Eventos" },
  { title: "Vídeo para site institucional", category: "Web" },
];

export default function VideosPage() {
  return (
    <section className="bg-brand py-14">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">Galeria de vídeos</p>
            <h1 className="mt-2 text-3xl font-bold text-brand sm:text-4xl">Vídeos e eventos</h1>
          </div>
          <Link
            href="/helphour#videos"
            className="rounded-full border border-brand/45 bg-surface/45 px-5 py-2 text-sm font-semibold text-brand transition hover:bg-surface-2/55"
          >
            Voltar para Home
          </Link>
        </div>

        <p className="mx-auto mt-4 max-w-3xl text-center text-base text-[var(--text)]/85 sm:text-left">
          Estrutura pronta para inserir links de YouTube, Vimeo ou arquivos internos. Cada card pode receber thumbnail,
          descrição e CTA do projeto.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {videoGallery.map((video) => (
            <article key={video.title} className="rounded-2xl border border-brand/30 bg-surface/45 p-4">
              <div className="h-48 w-full rounded-xl border border-white/20 bg-[linear-gradient(180deg,#b7d6e9_0%,#cde5f2_55%,#76a300_56%,#76a300_100%)]" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">{video.category}</p>
              <h2 className="mt-2 text-lg font-bold text-brand">{video.title}</h2>
              <button className="mt-4 inline-flex w-full justify-center rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#4c1276] sm:w-auto">
                Inserir vídeo
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
