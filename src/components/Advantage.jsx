import { LuCircleCheck, LuCircleX } from 'react-icons/lu'

const solution = [
  'Smart Sensors',
  'Live fill monitoring',
  'Ai recycling guidance',
  'Pay for what you generate',
  'Intelligent routing and insights',
]

const traditional = [
  'Fixed Scheduled',
  'Overflowing bins',
  'Flat monthly fees',
  'No recycling visibility',
  'Guesswork & inefficiency',
]

export default function Advantage() {
  return (
    <section id="advantage" className="scroll-mt-24 bg-black text-white">
      <div className="section-reveal mx-auto w-full max-w-[1120px] px-5 py-20 sm:px-6 lg:py-24">
        <p className="text-center text-[13px] font-medium tracking-[0.18em] text-white/75 uppercase">
          The EcoBin advantage
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-center text-4xl leading-[1.08] font-extrabold tracking-tight sm:text-5xl">
          Smarter than traditional waste collection
        </h2>

        <div id="pricing" className="mt-12 grid gap-5 scroll-mt-28 lg:grid-cols-2">
          <article className="rounded-[28px] bg-white p-4 text-ink sm:p-5">
            <img
              src="/advantage-1.svg"
              width="549"
              height="375"
              alt="Yellow, green, and red recycling bins on a paved street"
              className="w-full rounded-2xl"
            />
            <h3 className="mt-6 px-2 text-2xl font-bold">Ecobin Solution</h3>
            <ul className="mt-4 space-y-3 px-2 pb-3">
              {solution.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[15px] text-slate-700">
                  <LuCircleCheck className="size-5 shrink-0 text-brand" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[28px] bg-white p-4 text-ink sm:p-5">
            <h3 className="px-2 pt-2 text-2xl font-bold">Traditional Collection</h3>
            <ul className="mt-4 space-y-3 px-2">
              {traditional.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[15px] text-slate-700">
                  <LuCircleX className="size-5 shrink-0 text-rose-500" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <img
              src="/advantage-2.svg"
              width="549"
              height="375"
              alt="An overflowing public bin against a stone wall"
              className="mt-6 w-full rounded-2xl"
            />
          </article>
        </div>
      </div>
    </section>
  )
}
