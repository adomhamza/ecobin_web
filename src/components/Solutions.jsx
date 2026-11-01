import { useState } from 'react'
import { LuCheck } from 'react-icons/lu'
import { Eyebrow } from './Features.jsx'

const slides = [
  {
    image: '/solution.svg',
    imageAlt: 'Hands holding a phone open to the EcoBin waste digital guide',
    title: 'Waste Digital Guide',
    body: 'Learn simple, proactive steps to properly rinse and prepare materials, ensuring your waste actually gets recycled instead of landfilled on our app.',
    points: [
      'Receive safety-first prompts articles that instantly flag dangerous items like batteries, electronics, or medical waste and direct you to specialised drop-off points.',
      'Discover how to avoid the common trap of throwing non-recyclable items into the recycling bin out of good intentions, keeping the overall waste stream clean.',
    ],
  },
  {
    image: '/monitoring.webp',
    imageAlt: 'Phone showing an 80 percent fill level and a weekly pickup chart',
    title: 'Smart Bin Monitoring',
    body: 'Fill level monitoring right from your phone so you always know when a bin needs attention before it overflows.',
    points: [
      'Track live fill levels across household and business bins without guessing or unnecessary checks.',
      'Plan pickups around real capacity data so collection stays timely, efficient, and less disruptive.',
    ],
  },
  {
    image: '/scanner.webp',
    imageAlt: 'Someone scanning a bottle barcode with the EcoBin app',
    title: 'AI Waste Scanner',
    body: 'Scan an item and know exactly where it belongs so recycling stays accurate and contamination stays low.',
    points: [
      'Identify recyclables, compostables, and general waste in seconds with clear in-app guidance.',
      'Reduce well-intentioned sorting mistakes that send recoverable materials straight to landfill.',
    ],
  },
  {
    image: '/pickup.webp',
    imageAlt: 'Hands holding a phone open to scheduled and past pickups',
    title: 'Pickup Scheduling',
    body: 'Request pickups whenever your bin is full and keep collection aligned with what you actually generate.',
    points: [
      'Book on-demand pickups from the app instead of waiting on fixed schedules that miss your needs.',
      'Review upcoming and past collections so households and businesses stay organised and accountable.',
    ],
  },
]

function ArrowButton({ direction, onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-[#d0d5dd] text-ink transition hover:border-ink/40 hover:bg-white"
    >
      <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
        {direction === 'prev' ? (
          <path
            d="M14.5 6.5 9 12l5.5 5.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M9.5 6.5 15 12l-5.5 5.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  )
}

export default function Solutions() {
  const [index, setIndex] = useState(0)
  const slide = slides[index]
  const progress = ((index + 1) / slides.length) * 100

  const goPrev = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1))
  const goNext = () => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1))

  return (
    <section id="features" className="scroll-mt-24 bg-white">
      <div className="section-reveal mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16">
          <div>
            <Eyebrow>Our Solutions</Eyebrow>
            <h2 className="mt-4 text-[40px] leading-[1.1] font-medium tracking-tight text-ink">
              EcoBin&apos;s integrated waste approach
            </h2>
          </div>
          <p className="max-w-xl text-[16px] leading-relaxed text-black lg:pb-2">
            EcoBin is developing an integrated approach that connects waste collection, smart
            monitoring, digital engagement and material recovery.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-[#e8eaee] bg-[#f7f8fa] lg:mt-16">
          <div className="grid items-center gap-8 p-5 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:p-10">
            <img
              key={slide.image}
              src={slide.image}
              alt={slide.imageAlt}
              className="h-auto w-full rounded-xl object-contain"
              loading="lazy"
              decoding="async"
            />
            <div>
              <h3 className="text-[32px] leading-tight font-medium tracking-tight text-ink sm:text-[36px]">
                {slide.title}
              </h3>
              <p className="mt-4 text-[16px] leading-relaxed text-ink">{slide.body}</p>
              <ul className="mt-8 space-y-5">
                {slide.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-[16px] leading-relaxed text-ink">
                    <LuCheck className="size-4 shrink-0 text-brand" strokeWidth={2.5} aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-5 sm:gap-8">
          <div className="flex shrink-0 gap-3">
            <ArrowButton direction="prev" onClick={goPrev} label="Previous solution" />
            <ArrowButton direction="next" onClick={goNext} label="Next solution" />
          </div>
          <div className="relative h-px min-w-0 flex-1 bg-[#d0d5dd]" aria-hidden="true">
            <div
              className="absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-ink transition-[width] duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
