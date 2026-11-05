import { useState } from 'react'
import { LuCheck } from 'react-icons/lu'
import { Eyebrow } from './Features.jsx'

const solutions = [
  {
    image: '/our-1.svg',
    imageAlt: 'Hands holding a phone open to the EcoBin waste digital guide',
    title: 'Waste Education & Digital Guide',
    tagline: 'Know your waste. Make better choices.',
    body: 'Learn how to sort, prepare and dispose of household waste with practical guides in the EcoBin app.',
    points: [
      {
        label: 'Prepare waste correctly:',
        text: 'Clean, sort and prepare recyclables for recovery.',
      },
      {
        label: 'Handle hazardous waste safely:',
        text: 'Identify batteries, electronics and medical waste, then dispose of them safely.',
      },
      {
        label: 'Avoid common sorting mistakes:',
        text: 'Keep the wrong items out of the recycling bin.',
      },
    ],
  },
  {
    image: '/our-2.svg',
    imageAlt: 'Hands holding a phone open to scheduled and past pickups',
    title: 'Smart Pickup Scheduling',
    tagline: 'Waste collection when you need it.',
    body: 'Whether you need a household waste pickup or manage waste collection across multiple locations, EcoBin makes collection management more convenient and efficient. Request collections when needed, monitor participating bins and use collection data to make better operational decisions.',
    points: [
      {
        label: 'Flexible pickup requests:',
        text: 'Request a collection when your bin is full, arrange bulky waste removal or schedule a one-time pickup after parties, events and other occasions.',
      },
      {
        label: 'Smarter route planning:',
        text: 'Use collection data to help plan efficient routes and allocate resources where they are needed.',
      },
    ],
  },
  {
    image: '/our-3.svg',
    imageAlt: 'Phone showing a smart bin fill level and pickup chart',
    title: 'Smart Bin Monitoring',
    tagline: 'Know when your bin needs attention.',
    body: "EcoBin's smart bin technology uses sensors to monitor waste levels in participating bins, providing better visibility into collection needs and helping prevent overflowing bins.",
    points: [
      {
        label: 'Real-time fill-level visibility:',
        text: 'Monitor how full participating bins are.',
      },
      {
        label: 'Smarter collection decisions:',
        text: 'Use bin-level information to identify which households need collection.',
      },
      {
        label: 'Efficient connectivity:',
        text: 'Explore low-power communication technologies to support reliable monitoring across distributed communities.',
      },
    ],
  },
  {
    image: '/our-4.svg',
    imageAlt: 'Phone scanning a plastic bottle with the EcoBin app',
    title: 'AI-Powered Waste Scanner',
    tagline: 'Not sure where it belongs? Just scan it.',
    body: "Make waste sorting easier with AI-assisted identification. Simply point your phone's camera at an item and receive guidance on how to sort or dispose of it.",
    points: [
      {
        label: 'Instant sorting guidance:',
        text: 'Get suggestions on the appropriate waste category for an item.',
      },
      {
        label: 'Better waste separation:',
        text: 'Learn how to distinguish recyclable materials from other household waste.',
      },
      {
        label: 'Learn as you scan:',
        text: 'Discover useful disposal tips and educational information about the items you scan.',
      },
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
      <div className="section-reveal mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-6 lg:py-[60px]">
        <div className="grid gap-y-4 lg:grid-cols-[1.05fr_0.95fr] lg:gap-x-16">
          <Eyebrow>Our Solutions</Eyebrow>
          <h2 className="text-[40px] leading-[1.1] font-medium tracking-tight text-ink lg:col-start-1 lg:row-start-2">
            EcoBin&apos;s integrated waste approach
          </h2>
          <p className="max-w-xl text-[16px] leading-relaxed text-black lg:col-start-2 lg:row-start-2 lg:self-start">
            EcoBin is developing an integrated approach that connects waste collection, smart
            monitoring, digital engagement and material recovery.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-xl border border-[#e8eaee] bg-[#f7f8fa] lg:mt-16">
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
              <p className="mt-3 text-[16px] leading-relaxed font-semibold text-ink">{slide.tagline}</p>
              <p className="mt-4 text-[16px] leading-relaxed text-ink">{slide.body}</p>
              <ul className="mt-8 space-y-5">
                {slide.points.map((point) => (
                  <li key={point.label} className="flex items-start gap-3 text-[16px] leading-relaxed text-ink">
                    <LuCheck
                      className="mt-1 size-4 shrink-0 text-brand"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    <span>
                      <span className="font-semibold">{point.label}</span> {point.text}
                    </span>
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
