import { useState } from 'react'
import { LuPlus } from 'react-icons/lu'

const items = [
  {
    question: 'Where do you operate?',
    answer:
      'EcoBin operates in Accra and Kasoa, Ghana. Homes, businesses, and city partners in those areas can set up a bin and request pickups from the app.',
  },
  {
    question: 'How much do you charge?',
    answer:
      'You pay for what you generate. Pickup pricing follows bin size and how much waste you put out, instead of a flat monthly fee. The amount is shown in the app before you confirm a request.',
  },
  {
    question: 'How does the service work?',
    answer:
      'Add your bin in the app. EcoBin tracks the fill level, and you can request a pickup whenever it is full. From homes to businesses, the system can also flag a bin automatically so collection stays on time.',
  },
  {
    question: 'How is payment done?',
    answer:
      'Payment is completed in the app when you request a pickup. Each finished collection includes a receipt you can review with your household or business records.',
  },
  {
    question: 'Do you recycle?',
    answer:
      'Yes. The scanner tells you which stream an item belongs to, and household insights show what you recycled over time. Recyclables are kept separate from general waste on collection.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="scroll-mt-24 bg-white">
      <div className="mx-auto w-full max-w-[760px] px-5 py-16 sm:px-6 lg:py-24">
        <div className="section-reveal text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-brand" aria-hidden="true" />
            <span className="rounded-md bg-brand/15 px-3 py-1 text-[13px] font-semibold tracking-[0.08em] text-brand uppercase">
              FAQ&apos;S
            </span>
          </div>
          <h2 className="mt-4 text-[40px] leading-[1.15] font-medium tracking-tight text-ink">
            Frequently asked questions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-ink">
            Questions? We have answers. Everything you need to know before starting your EcoBin
            journey.
          </p>
        </div>

        <div data-motion-group className="motion-list mt-10 space-y-3 lg:mt-12">
          {items.map((item, index) => {
            const isOpen = open === index
            const panelId = `faq-panel-${index}`
            return (
              <div key={item.question} className="rounded-xl bg-[#f0f3f7]">
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-medium text-ink"
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
                    <p className="px-5 pb-5 text-[14px] leading-relaxed text-ink">{item.answer}</p>
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
