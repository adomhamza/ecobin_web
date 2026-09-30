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
      className={`text-4xl leading-[1.05] font-extrabold tracking-tight text-ink sm:text-[2.7rem] ${className}`}
    >
      {children}
    </h3>
  )
}

function FeatureCopy({ children, className = 'mt-4' }) {
  return <p className={`max-w-sm text-lg leading-relaxed text-muted ${className}`}>{children}</p>
}

function FillGauge() {
  const radius = 78
  const length = Math.PI * radius
  const progress = 0.2

  return (
    <div className="mx-auto w-44">
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
    <section id="features" className="scroll-mt-24 bg-white">
      <div className="section-reveal mx-auto w-full max-w-[1120px] px-5 pt-10 pb-8 sm:px-6">
        <Eyebrow>Our features</Eyebrow>
        <h2 className="mx-auto mt-4 max-w-3xl text-center text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl">
          Everything you need for smarter waste management
        </h2>
      </div>

      <div className="mx-auto grid w-full max-w-[1120px] items-center gap-16 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:gap-x-28 lg:py-28">
        <img
          src="/monitoring.svg"
          width="741"
          height="895"
          alt="Phone showing an 80 percent fill level and a weekly pickup chart"
          className="motion-from-left mx-auto w-full max-w-[440px]"
        />
        <div className="motion-from-right lg:max-w-md lg:justify-self-end lg:pr-2">
          <FillGauge />
          <FeatureTitle className="mt-10">
            Smart Bin
            <br />
            Monitoring
          </FeatureTitle>
          <FeatureCopy className="mt-6">Fill level monitoring right from your phone.</FeatureCopy>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-[1120px] items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="motion-from-left lg:pl-10">
          <img
            src="/qr-scan-lzQtNGob7q.svg"
            width="111"
            height="111"
            alt=""
            className="size-16"
          />
          <FeatureTitle className="mt-6">
            Ai Waste
            <br />
            Scanner
          </FeatureTitle>
          <FeatureCopy>Scan item and know exactly where it belongs.</FeatureCopy>
        </div>
        <img
          src="/scanner.svg"
          width="741"
          height="895"
          alt="Someone scanning a bottle barcode with the EcoBin app"
          className="motion-from-right mx-auto w-full max-w-[520px]"
        />
      </div>

      <div className="mx-auto grid w-full max-w-[1120px] items-center gap-16 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:gap-x-28 lg:py-28">
        <img
          src="/pickup.svg"
          width="741"
          height="895"
          alt="Hands holding a phone open to scheduled and past pickups"
          className="motion-from-left mx-auto w-full max-w-[440px]"
        />
        <div className="motion-from-right lg:max-w-md lg:justify-self-end lg:pr-2">
          <img
            src="/schedule.svg"
            width="223"
            height="158"
            alt="Schedule pickup calendar for November 16 and 17"
            className="mx-auto w-52 lg:mx-0"
          />
          <FeatureTitle className="mt-10">
            Pickup
            <br />
            Scheduling
          </FeatureTitle>
          <FeatureCopy className="mt-6">Request pickups whenever your bin is full</FeatureCopy>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-[1120px] items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:gap-6 lg:py-20">
        <div className="motion-from-left lg:pl-8">
          <FeatureTitle>
            Household
            <br />
            insights
          </FeatureTitle>
          <FeatureCopy>Track your waste habits and impacts over time.</FeatureCopy>
        </div>
        <img
          src="/insights.svg"
          width="741"
          height="895"
          alt="Phone showing garbage recycled, points earned, and total pickups"
          className="motion-from-right mx-auto w-full max-w-[560px]"
        />
      </div>
    </section>
  )
}

export { Eyebrow }
