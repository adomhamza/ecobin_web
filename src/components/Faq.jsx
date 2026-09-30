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
      <div className="mx-auto w-full max-w-[760px] px-5 py-16 sm:px-6 lg:py-20">
        <div className="section-reveal">
        <h2 className="text-center text-4xl font-extrabold tracking-tight sm:text-[2.6rem]">
          Have a question?
        </h2>
        <p className="mt-3 text-center text-lg text-muted">We are here to answer</p>
        </div>

        <div data-motion-group className="motion-list mt-10 space-y-3">
          {items.map((item, index) => {
            const isOpen = open === index
            const panelId = `faq-panel-${index}`
            return (
              <div
                key={item.question}
                className={`bg-[#f3f5f8] ${isOpen ? 'rounded-xl' : 'rounded-2xl'}`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-3 text-left text-[15px] font-medium text-slate-800"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : index)}
                >
                  {item.question}
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#CBD5E0]">
                    <LuPlus
                      className={`size-4 text-black transition ${isOpen ? 'rotate-45' : ''}`}
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
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{item.answer}</p>
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
