import { Eyebrow } from './Features.jsx'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-white">
      <div className="mx-auto w-full max-w-[1160px] px-5 py-16 sm:px-6 lg:py-24">
        <div className="section-reveal mx-auto max-w-3xl text-center">
          <Eyebrow center>Let&apos;s Get Started</Eyebrow>
          <h2 className="mt-4 text-[40px] leading-[1.15] font-medium tracking-tight text-ink">
            See how EcoBin Works
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-ink">
            EcoBin&apos;s on-demand waste collection platform offers scheduled pickups, pay-as-you-throw
            pricing, and real-time tracking for Accra homes and businesses—all in a few taps.
          </p>
        </div>

        <div className="motion-card mt-10 overflow-hidden rounded-[28px] lg:mt-14">
          <div className="aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/5bVDpmzMICE"
              title="See how EcoBin works"
              className="size-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
