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
      className="inline-flex min-w-[180px] items-center gap-3 rounded-xl bg-black px-4 py-2 text-white transition hover:bg-neutral-900"
    >
      {icon}
      <span className="text-left leading-tight">
        <span className="block text-[10px] tracking-wide uppercase">{kicker}</span>
        <span className="block text-lg font-semibold">{label}</span>
      </span>
    </a>
  )
}

export default function DownloadCta() {
  return (
    <section id="download" className="relative scroll-mt-24 overflow-hidden bg-[#149445] text-white">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1200 280"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M-40 210 C 180 80, 320 300, 560 150 S 980 40, 1260 190"
          fill="none"
          stroke="#0d6d34"
          strokeWidth="90"
          opacity="0.55"
        />
        <path
          d="M-20 40 C 240 180, 420 -20, 700 120 S 1040 260, 1280 60"
          fill="none"
          stroke="#3cbe6c"
          strokeWidth="70"
          opacity="0.35"
        />
      </svg>
      <div className="relative mx-auto flex w-full max-w-[1120px] flex-col gap-8 px-5 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:py-16">
        <div className="motion-from-left">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Download our app
            <br />
            today!
          </h2>
          <p className="mt-4 max-w-sm text-lg text-white/90">
            Join the EcoBin family and enjoy our experience.
          </p>
        </div>
        <div className="motion-from-right flex flex-col gap-3 sm:flex-row">
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
