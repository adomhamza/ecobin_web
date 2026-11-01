import { Eyebrow } from './Features.jsx'

const priorities = [
  {
    title: 'Monitor',
    body: 'Improve visibility into bin fill levels and collection needs.',
  },
  {
    title: 'Manage',
    body: 'Use information to support more responsive collection planning.',
  },
  {
    title: 'Recover',
    body: 'Encourage better waste separation and the recovery of suitable materials.',
  },
  {
    title: 'Educate',
    body: 'Help people develop practical, responsible waste management habits.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose" className="scroll-mt-24 bg-white">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="motion-from-left">
          <Eyebrow>Why Choose Us?</Eyebrow>
          <h2 className="mt-4 text-[40px] leading-[1.15] font-medium tracking-tight text-ink">
            We&apos;re Not Just Evolving the System. We&apos;re Redefining It.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-ink">
            Our approach brings together four connected priorities
          </p>

          <ol className="mt-10 space-y-6">
            {priorities.map((item, index) => (
              <li key={item.title} className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-ink">{item.title}</h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-ink">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <img
          src="/why-choose.svg"
          alt="Phone showing EcoBin fill level and weekly pickup insights"
          className="motion-from-right w-full rounded-xl object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  )
}
