import { LuArrowRight } from 'react-icons/lu'

export default function Rewards() {
  return (
    <section id="rewards" className="scroll-mt-24">
      <div className="motion-card relative flex min-h-[420px] w-full items-center justify-center overflow-hidden px-6 py-16 text-center sm:min-h-[480px] sm:px-10 lg:min-h-[520px] lg:px-16 lg:py-24">
        <img
          src="/under-solu.svg"
          alt=""
          className="absolute inset-0 size-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
          <h2 className="text-[40px] leading-[1.12] font-medium tracking-tight text-white">
            Don&apos;t just Schedule pickups,
            <br />
            get excited and earn
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            Read articles, watch videos to earn free pickup on your next full bin
          </p>
          <a
            href="#download"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm leading-relaxed text-white/90 transition hover:bg-brand-dark"
          >
            Download the app
            <LuArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
