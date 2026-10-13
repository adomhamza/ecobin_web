function Eyebrow({ children, light = false }) {
  return (
    <p
      className={`text-center text-[13px] font-medium tracking-[0.18em] uppercase ${
        light ? 'text-white/70' : 'text-slate-500'
      }`}
    >
      {children}
    </p>
  )
}

function FeatureTitle({ children, className = '' }) {
  return (
    <h3
      className={`text-[34px] leading-[1.05] font-semibold tracking-tight text-ink sm:text-[2.7rem] ${className}`}
    >
      {children}
    </h3>
  )
}

function FeatureCopy({ children, className = 'mt-4' }) {
  return <p className={`max-w-sm text-lg leading-relaxed text-muted ${className}`}>{children}</p>
}

function FillGauge({ className = '' }) {
  const radius = 78
  const length = Math.PI * radius
  const progress = 0.2

  return (
    <div className={`mx-auto w-44 ${className}`}>
      <svg viewBox="0 0 200 118" className="w-full" aria-hidden="true">
        <path
          d="M22 104 A78 78 0 0 1 178 104"
          fill="none"
          stroke="#e6e8ec"
          strokeWidth="16"
          strokeLinecap="butt"
        />
        <path
          d="M22 104 A78 78 0 0 1 178 104"
          fill="none"
          stroke="#3b6fe0"
          strokeWidth="16"
          strokeLinecap="butt"
          strokeDasharray={`${length * progress} ${length}`}
        />
      </svg>
      <p className="-mt-3 text-center text-3xl font-bold tracking-tight">20%</p>
      <p className="text-center text-sm text-slate-400">Completed</p>
    </div>
  )
}

export default function Features() {
  return (
    <section id="features" className="scroll-mt-24 overflow-x-hidden bg-white">
      <div className="section-reveal mx-auto w-full max-w-[1120px] px-5 pt-10 pb-8 sm:px-6">
        <Eyebrow>Our features</Eyebrow>
        <h2 className="mx-auto mt-4 max-w-3xl text-center text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl">
          Everything you need for smarter waste management
        </h2>
      </div>

      <div className="mx-auto grid w-full max-w-[1120px] items-center gap-6 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:gap-x-28 lg:py-28">
        <div className="order-2 flex w-full justify-center overflow-hidden lg:order-1 lg:overflow-visible">
          <img
            src="/monitoring.webp"
            width="741"
            height="895"
            alt="Phone showing an 80 percent fill level and a weekly pickup chart"
            className="motion-from-left w-[122%] max-w-none shrink-0 lg:w-full lg:max-w-[440px]"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="motion-from-right order-1 flex flex-col items-center text-center lg:order-2 lg:max-w-md lg:items-start lg:justify-self-end lg:pr-2 lg:text-left">
          <FillGauge className="hidden lg:mx-auto lg:block" />
          <FeatureTitle className="lg:mt-10">
            Smart Bin
            <br />
            Monitoring
          </FeatureTitle>
          <FeatureCopy className="mt-4 lg:mt-6">
            Fill level monitoring right from your phone.
          </FeatureCopy>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-[1120px] items-center gap-6 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="motion-from-left flex flex-col items-center text-center lg:items-start lg:pl-10 lg:text-left">
          <img
            src="/qr-scan-lzQtNGob7q.svg"
            width="111"
            height="111"
            alt=""
            className="hidden size-16 lg:block"
          />
          <FeatureTitle className="lg:mt-6">
            Ai Waste
            <br />
            Scanner
          </FeatureTitle>
          <FeatureCopy>Scan item and know exactly where it belongs.</FeatureCopy>
        </div>
        <div className="flex w-full justify-center overflow-hidden lg:overflow-visible">
          <img
            src="/scanner.webp"
            width="741"
            height="895"
            alt="Someone scanning a bottle barcode with the EcoBin app"
            className="motion-from-right w-[122%] max-w-none shrink-0 lg:w-full lg:max-w-[520px]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-[1120px] items-center gap-6 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:gap-x-28 lg:py-28">
        <div className="order-2 flex w-full justify-center overflow-hidden lg:order-1 lg:overflow-visible">
          <img
            src="/pickup.webp"
            width="741"
            height="895"
            alt="Hands holding a phone open to scheduled and past pickups"
            className="motion-from-left w-[122%] max-w-none shrink-0 lg:w-full lg:max-w-[440px]"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="motion-from-right order-1 flex flex-col items-center text-center lg:order-2 lg:max-w-md lg:items-start lg:justify-self-end lg:pr-2 lg:text-left">
          <img
            src="/schedule.svg"
            width="223"
            height="158"
            alt="Schedule pickup calendar for November 16 and 17"
            className="mx-auto hidden w-52 lg:mx-0 lg:block"
          />
          <FeatureTitle className="lg:mt-10">
            Pickup
            <br />
            Scheduling
          </FeatureTitle>
          <FeatureCopy className="mt-4 lg:mt-6">
            Request pickups whenever your bin is full
          </FeatureCopy>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-[1120px] items-center gap-6 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div className="motion-from-left flex flex-col items-center text-center lg:items-start lg:pl-8 lg:text-left">
          <FeatureTitle>
            Household
            <br />
            insights
          </FeatureTitle>
          <FeatureCopy>Track your waste habits and impacts over time.</FeatureCopy>
        </div>
        <div className="flex w-full justify-center overflow-hidden lg:overflow-visible">
          <img
            src="/insights.webp"
            width="741"
            height="895"
            alt="Phone showing garbage recycled, points earned, and total pickups"
            className="motion-from-right w-[122%] max-w-none shrink-0 lg:w-full lg:max-w-[560px]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}

export { Eyebrow }
