export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0b1a12] text-white">
      <img
        src="/hero-bg.svg"
        alt=""
        className="pointer-events-none absolute inset-0 size-full object-cover"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-10 px-5 pt-14 pb-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pt-20 lg:pb-24">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="hero-reveal flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <img
              src="/trustedOrgs.webp"
              width="85"
              height="42"
              alt=""
              className="h-10 w-auto shrink-0"
            />
            <p className="max-w-sm text-sm leading-snug text-white/80 sm:max-w-md">
              Trusted by households & organizations building cleaner environment.
            </p>
          </div>

          <h1 className="hero-reveal mt-7 max-w-xl text-[2.55rem] leading-[1.05] font-extrabold tracking-[-0.03em] sm:text-5xl lg:text-[3.35rem]">
            Smarter Waste Management, Responsible Communities, A Cleaner Future.
          </h1>

          <p className="hero-reveal mt-5 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
            EcoBin connects homes, businesses, and cities with on-demand pickups, smart recycling
            and real-time waste analytics, all in one app.
          </p>

          <div className="hero-reveal mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href="#download"
              className="inline-flex items-center rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              Get the App
            </a>
            <a
              href="#about"
              className="inline-flex items-center rounded-lg border border-brand bg-black/70 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              Learn more
            </a>
          </div>
        </div>

        <img
          src="/hero.webp"
          width="520"
          height="754"
          alt="EcoBin app home screen with bin stats and pickup status"
          className="hero-media mx-auto w-full max-w-[420px] drop-shadow-2xl lg:max-w-[460px]"
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </section>
  )
}
