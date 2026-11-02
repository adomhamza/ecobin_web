import { LuPlay } from 'react-icons/lu'
import { Eyebrow } from './Features.jsx'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-white">
      <div className="mx-auto w-full max-w-[1160px] px-5 py-16 sm:px-6 lg:py-24">
        <div className="section-reveal mx-auto max-w-3xl text-center">
          <Eyebrow center>Let&apos;s Get Started</Eyebrow>
          <h2 className="mt-4 text-[32px] leading-[1.15] font-medium tracking-tight text-ink sm:text-[40px]">
            See how EcoBin Works
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-ink">
            EcoBin&apos;s on-demand waste collection platform offers scheduled pickups, pay-as-you-throw
            pricing, and real-time tracking for Accra homes and businesses—all in a few taps.
          </p>
        </div>

        <div className="motion-card relative mt-10 overflow-hidden rounded-[28px] lg:mt-14">
          <img
            src="/video.webp"
            width="1247"
            height="721"
            alt="EcoBin collection team at work"
            className="w-full"
            loading="lazy"
            decoding="async"
          />
          <button
            type="button"
            aria-label="Play EcoBin walkthrough"
            className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center bg-transparent text-white transition hover:scale-105"
          >
            <LuPlay className="size-14 fill-white drop-shadow-md sm:size-16" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
