import StoreBadges from './StoreBadges.jsx'

export default function DownloadCta() {
  return (
    <section id="download" className="relative scroll-mt-24 overflow-hidden text-white">
      <img
        src="/download.webp"
        alt=""
        className="absolute inset-0 size-full object-cover"
        loading="lazy"
        decoding="async"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/70"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex min-h-[380px] w-full max-w-[1200px] flex-col items-center justify-center gap-8 px-5 py-28 text-center sm:px-6 lg:min-h-[440px] lg:py-32">
        <div className="section-reveal">
          <h2 className="text-[40px] leading-[1.15] font-medium tracking-tight sm:whitespace-nowrap">
            Download our app today!
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-white/90">
            Join the EcoBin family and enjoy our experience.
          </p>
        </div>
        <div className="flex justify-center">
          <StoreBadges />
        </div>
      </div>
    </section>
  )
}
