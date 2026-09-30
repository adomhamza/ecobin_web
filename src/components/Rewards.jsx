import { LuArrowRight } from 'react-icons/lu'
import { Eyebrow } from './Features.jsx'

export default function Rewards() {
  return (
    <section id="rewards" className="scroll-mt-24 bg-white pb-8">
      <div className="section-reveal mx-auto w-full max-w-[1120px] px-5 sm:px-6">
        <Eyebrow>Our features</Eyebrow>
        <h2 className="mx-auto mt-4 max-w-3xl text-center text-4xl leading-[1.08] font-extrabold tracking-tight sm:text-5xl">
          Don’t just schedule pickups, get excited and earn.
        </h2>

        <div className="mt-14 grid items-center gap-10 rounded-[32px] bg-pink px-6 py-10 sm:px-10 lg:grid-cols-[1fr_1.05fr] lg:px-14 lg:py-12">
          <div>
            <h3 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Enjoy rewards</h3>
            <p className="mt-4 max-w-sm text-lg leading-relaxed text-slate-600">
              Read articles, watch videos to earn free pickup on your next full bin.
            </p>
            <a
              href="#download"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2.5 text-sm font-medium text-white transition hover:bg-brand-dark"
            >
              Download the app
              <LuArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <img
              src="/rewards-2.svg"
              width="233"
              height="71"
              alt="EcoEarn"
              className="absolute -top-7 left-0 z-10 w-44 drop-shadow-sm sm:left-2"
            />
            <img
              src="/rewards-1.svg"
              width="449"
              height="383"
              alt="EcoEarn screen showing 3500 points"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
