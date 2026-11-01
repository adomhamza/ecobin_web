import { useState } from 'react'
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
]

function CheckIcon() {
  return (
    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
      <svg viewBox="0 0 12 12" className="size-3" aria-hidden="true">
        <path
          d="M2.5 6.2 4.8 8.5 9.5 3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

function ArrowButton({ direction, onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex size-11 items-center justify-center rounded-full border border-[#d0d5dd] text-ink transition hover:border-ink/40 hover:bg-white"
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
          <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:pb-2">
            EcoBin is developing an integrated approach that connects waste collection, smart
            monitoring, digital engagement and material recovery.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[28px] border border-[#e8eaee] bg-[#f7f8fa] lg:mt-16">
          <div className="grid items-center gap-8 p-5 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:p-10">
            <img
              key={slide.image}
              src={slide.image}
              alt={slide.imageAlt}
              className="motion-from-left w-full rounded-2xl object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="motion-from-right">
              <h3 className="text-[32px] leading-tight font-medium tracking-tight text-ink sm:text-[36px]">
                {slide.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{slide.body}</p>
              <ul className="mt-8 space-y-5">
                {slide.points.map((point) => (
                  <li key={point} className="flex gap-3 text-base leading-relaxed text-muted">
                    <CheckIcon />
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
