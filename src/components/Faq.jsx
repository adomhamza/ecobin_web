import { useState } from 'react'
import { LuPlus } from 'react-icons/lu'
import { faqItems } from '../lib/faqContent.js'
import { Eyebrow } from './Features.jsx'

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
          {faqItems.map((item, index) => {
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
