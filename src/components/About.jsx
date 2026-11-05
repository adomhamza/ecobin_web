export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-[60px]">
        <img
          src="/pickup.webp"
          width="741"
          height="895"
          alt="Hands holding a phone open to EcoBin pickup schedules"
          className="motion-from-left w-full rounded-[28px]"
          loading="lazy"
          decoding="async"
        />

        <div className="motion-from-right">
          <p className="section-reveal text-sm font-bold tracking-[0.08em] text-brand uppercase">
            About EcoBin
          </p>
          <div className="section-reveal mt-5 space-y-4 text-base leading-relaxed text-slate-700 sm:text-lg">
            <p>
              EcoBin is a smart waste management initiative designed to modernize household waste
              collection across Ghana. By combining IoT-enabled bins with a simple mobile
              experience, communities can request pickups when bins are full instead of waiting on
              fixed routes.
            </p>
            <p>
              Our platform replaces guesswork with live fill-level data, recycling guidance, and
              on-demand scheduling so homes and businesses pay for what they generate. Collection
              teams get clearer routing, fewer overflow stops, and better visibility into every
              pickup.
            </p>
            <p>
              From Accra to Kasoa, EcoBin helps people, businesses, and city partners build cleaner,
              healthier neighborhoods through responsible waste practices and data-driven planning.
            </p>
          </div>
          <a
            href="#contact"
            className="section-reveal mt-8 inline-flex items-center rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
