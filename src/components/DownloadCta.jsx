import { FaApple } from 'react-icons/fa'

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-7" aria-hidden="true">
      <path
        fill="#34a853"
        d="M3.8 20.6 13.4 12 3.8 3.4c-.2.3-.3.7-.3 1.2v14.8c0 .5.1.9.3 1.2Z"
      />
      <path
        fill="#fbbc04"
        d="m16.6 15.4-3.2-2.2-9.6 8.6c.4.5 1 .6 1.7.2l11.1-6.6Z"
      />
      <path
        fill="#4285f4"
        d="M20.6 10.7 16.6 8.4 13.4 11l3.2 2.2 4-2.3c.7-.4.7-1.4 0-2.2Z"
      />
      <path
        fill="#ea4335"
        d="M5.5 2.4c-.7-.4-1.3-.2-1.7.3L13.4 11l3.2-2.2L5.5 2.4Z"
      />
    </svg>
  )
}

function StoreLink({ href, icon, kicker, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl bg-black px-3 py-2.5 text-white transition hover:bg-neutral-900 sm:flex-none sm:gap-3 sm:px-4 sm:py-2"
    >
      <span className="shrink-0">{icon}</span>
      <span className="min-w-0 text-left leading-tight">
        <span className="block truncate text-[10px] tracking-wide uppercase">{kicker}</span>
        <span className="block truncate text-base font-semibold sm:text-lg">{label}</span>
      </span>
    </a>
  )
}

export default function DownloadCta() {
  return (
    <section id="download" className="relative scroll-mt-24 overflow-hidden text-white">
      <img
        src="/download.svg"
        alt=""
        className="absolute inset-0 size-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="relative mx-auto flex min-h-[280px] w-full max-w-[1200px] flex-col items-center justify-center gap-8 px-5 py-20 text-center sm:px-6 lg:min-h-[320px] lg:py-24">
        <div className="section-reveal">
          <h2 className="text-[32px] leading-[1.15] font-medium tracking-tight sm:text-[40px] sm:whitespace-nowrap">
            Download our app today!
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-white/90">
            Join the EcoBin family and enjoy our experience.
          </p>
        </div>
        <div className="flex w-full max-w-lg flex-row gap-3 sm:w-auto sm:max-w-none">
          <StoreLink
            href="https://www.apple.com/app-store/"
            icon={<FaApple className="size-7" aria-hidden="true" />}
            kicker="Download on the"
            label="App Store"
          />
          <StoreLink
            href="https://play.google.com/store"
            icon={<PlayIcon />}
            kicker="Get it on"
            label="Google Play"
          />
        </div>
      </div>
    </section>
  )
}
