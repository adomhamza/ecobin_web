import { useState } from 'react'
import { LuPlus } from 'react-icons/lu'
import { Eyebrow } from './Features.jsx'

const items = [
  {
    question: 'Where do you operate?',
    paragraphs: [
      'EcoBin is a Ghana-focused waste management service currently developing its operations and expanding into selected communities. We are starting with selected areas and plan to expand as our services grow. Contact us or download the app to confirm whether your location is currently covered.',
    ],
  },
  {
    question: 'How much do you charge?',
    paragraphs: [
      'Our charges depend on your location, household needs and the waste collection service required. We aim to provide affordable and transparent pricing. Contact us or register your interest through the app to find out the available service options and applicable charges.',
    ],
  },
  {
    question: 'How does the service work?',
    paragraphs: ['Getting started with EcoBin is simple:'],
    steps: [
      'Register your household through the EcoBin app.',
      'Get access to the appropriate waste collection service.',
      'Separate recyclable materials from other household waste using the provided guidance.',
      'We monitor collection needs and arrange pickups when required.',
      'Your waste is collected and directed towards appropriate disposal or recovery channels.',
    ],
    closing:
      'Our goal is to make waste collection more convenient while encouraging responsible disposal and recycling.',
  },
  {
    question: 'How is payment done?',
    paragraphs: [
      'EcoBin aims to make payments convenient and transparent. Available payment options and applicable charges will be communicated during registration or displayed through the app. You will be able to keep track of your service and payment information.',
    ],
  },
  {
    question: 'Do you recycle?',
    paragraphs: [
      "Yes! Recycling and waste recovery are important parts of EcoBin's mission. We encourage households to separate recyclable materials such as plastics, paper, cardboard and metals so they can be recovered and processed where suitable facilities are available.",
      'We also aim to explore better ways of recovering value from other waste materials rather than sending everything to landfills. Our goal is to reduce waste and support a more circular economy.',
    ],
  },
  {
    question: 'Do I need to separate my waste before collection?',
    paragraphs: [
      'Yes, we encourage households to separate recyclable materials from other waste. This makes it easier to recover valuable materials, reduce the amount of waste sent to landfills and promote responsible waste management. EcoBin provides educational resources to help households understand what can and cannot be recycled.',
    ],
  },
]

function Answer({ item }) {
  return (
    <div className="space-y-3 px-5 pb-5 text-[14px] leading-relaxed text-ink sm:px-6">
      {item.paragraphs.map((text) => (
        <p key={text}>{text}</p>
      ))}
      {item.steps ? (
        <ol className="list-decimal space-y-1.5 pl-5">
          {item.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      ) : null}
      {item.closing ? <p>{item.closing}</p> : null}
    </div>
  )
}

export default function Faq() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="scroll-mt-24 bg-white">
      <div className="mx-auto w-full max-w-[1160px] px-5 pt-16 sm:px-6 lg:pt-[60px]">
        <div className="motion-card overflow-hidden rounded-[28px]">
          <img
            src="/footer-img.webp"
            width="1243"
            height="688"
            alt="A family outdoors with the words Cleaner and Safe world together"
            className="w-full"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1031px] px-5 pt-16 pb-16 sm:px-6 lg:pt-[60px] lg:pb-[60px]">
        <div className="section-reveal text-center">
          <Eyebrow center>FAQ&apos;S</Eyebrow>
          <h2 className="mt-4 text-[40px] leading-[1.15] font-medium tracking-tight text-ink">
            Frequently asked questions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-ink lg:max-w-none lg:whitespace-nowrap">
            Questions? We have answers. Everything you need to know before starting your EcoBin
            journey.
          </p>
        </div>

        <div data-motion-group className="motion-list mt-10 space-y-3 lg:mt-12">
          {items.map((item, index) => {
            const isOpen = open === index
            const panelId = `faq-panel-${index}`
            return (
              <div key={item.question} className="w-full rounded-3xl bg-[#f0f3f7]">
                <button
                  type="button"
                  className="flex min-h-[72px] w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-medium text-ink sm:min-h-[88px] sm:px-6 sm:py-0"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : index)}
                >
                  {item.question}
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#d5dbe4]">
                    <LuPlus
                      className={`size-4 text-ink transition ${isOpen ? 'rotate-45' : ''}`}
                      aria-hidden="true"
                    />
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <Answer item={item} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
