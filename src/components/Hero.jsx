import { LuArrowRight } from 'react-icons/lu'

export default function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-[1120px] items-center gap-10 px-5 pt-12 pb-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:pt-16 lg:pb-24">
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
        <h1 className="hero-reveal text-[3.15rem] leading-[0.98] font-extrabold tracking-[-0.035em] text-black sm:text-7xl">
          Waste
          <br />
          management,
          <br />
          <span className="text-brand">
            made
            <br className="lg:hidden" /> effortless.
          </span>
        </h1>
        <p className="hero-reveal mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg lg:mx-0">
          EcoBin connects homes, businesses, and cities with on-demand pickups,
          smart recycling and real-time waste analytics, all in one app.
        </p>
        <a
          href="#download"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-medium text-white transition hover:bg-brand-dark"
        >
          Download the app
          <LuArrowRight className="size-4" aria-hidden="true" />
        </a>
        <div className="hero-reveal mt-8 flex flex-col items-center gap-3 lg:flex-row lg:justify-start">
          <img
            src="/trustedOrgs.svg"
            width="85"
            height="42"
            alt=""
            className="h-10 w-auto shrink-0"
          />
          <p className="text-sm leading-snug text-muted">
            <span className="block">Trusted by households & organizations</span>
            <span className="block">building cleaner environment.</span>
          </p>
        </div>
      </div>
      <img
        src="/hero.svg"
        width="520"
        height="754"
        alt="EcoBin home screen with bin fill levels and pickup requests"
        className="hero-media mx-auto w-full max-w-[440px] drop-shadow-2xl"
      />
    </section>
  )
}
