import { useState } from 'react'
import { LuCheck } from 'react-icons/lu'
import { Eyebrow } from './Features.jsx'

const solutions = [
  {
    image: '/our-2.svg',
    imageAlt: 'Hands holding a phone open to scheduled and past pickups',
    title: 'Pickup Scheduling',
    body: 'Request a pickup when your bin is actually full. Demand-based scheduling and route planning send trucks where they are needed and cut down unnecessary trips.',
    points: [
      'Collection planned from real bin conditions',
      'Fewer overflowing bins and wasted visits',
      'Routes and resources planned from data',
    ],
  },
  {
    image: '/our-4.svg',
    imageAlt: 'Phone scanning a plastic bottle with the EcoBin app',
    title: 'AI waste Scanner',
    body: 'Point your phone at an item and get a suggestion for where it belongs. EcoBin is exploring AI-assisted waste identification to make sorting easier for every household.',
    points: [
      'Sorting guidance at the moment of disposal',
      'Supports better separation and recovery',
      'Educational tips that match what you scan',
    ],
  },
  {
    image: '/our-1.svg',
    imageAlt: 'Hands holding a phone open to the EcoBin waste digital guide',
    title: 'Waste Digital Guide',
    body: 'Learn simple, proactive steps to properly rinse and prepare materials, ensuring your waste actually gets recycled instead of landfilled on our app.',
    points: [
      'Receive safety-first prompts articles that instantly flag dangerous items like batteries, electronics, or medical waste and direct you to specialised drop-off points.',
      'Discover how to avoid the common trap of throwing non-recyclable items into the recycling bin out of good intentions, keeping the overall waste stream clean.',
    ],
  },
  {
    image: '/our-3.svg',
    imageAlt: 'Phone showing a smart bin fill level and pickup chart',
    title: 'Smart Bin Monitoring',
    body: 'Sensors on participating bins report how full they are, so collection needs are visible instead of guessed and overflow can be prevented.',
    points: [
      'Fill-level readings sent from the bin',
      'Better visibility across participating households',
      'Low-power connectivity explored for distributed bins',
    ],
  },
]

export default function Solutions() {
  const [index, setIndex] = useState(0)
  const slide = solutions[index]
  const progress = ((index + 1) / solutions.length) * 100

  const goPrev = () => setIndex((current) => (current === 0 ? solutions.length - 1 : current - 1))
  const goNext = () => setIndex((current) => (current === solutions.length - 1 ? 0 : current + 1))

  return (
    <section id="features" className="scroll-mt-24 bg-white">
      <div className="section-reveal mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16">
          <div>
            <Eyebrow>Our Solutions</Eyebrow>
            <h2 className="mt-4 text-[32px] leading-[1.1] font-medium tracking-tight text-ink sm:text-[40px]">
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
              width="541"
              height="470"
              alt={slide.imageAlt}
              className="h-auto w-full rounded-xl object-contain"
              loading="lazy"
              decoding="async"
            />
            <div>
              <h3 className="text-[28px] leading-tight font-medium tracking-tight text-ink sm:text-[36px]">
                {slide.title}
              </h3>
              <p className="mt-4 text-[16px] leading-relaxed text-ink">{slide.body}</p>
              <ul className="mt-8 space-y-5">
                {slide.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[16px] leading-relaxed text-ink">
                    <LuCheck
                      className="mt-1 size-4 shrink-0 text-brand"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-5 sm:gap-8">
          <div className="flex shrink-0 gap-3">
            <CarouselButton direction="prev" onClick={goPrev} label="Previous solution" />
            <CarouselButton direction="next" onClick={goNext} label="Next solution" />
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

function CarouselButton({ direction, onClick, label }) {
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
