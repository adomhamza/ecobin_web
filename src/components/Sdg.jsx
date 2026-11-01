import { Eyebrow } from './Features.jsx'

const goals = [
  {
    title: 'Quality Education',
    body: 'Articles and videos in the app teach practical sorting and responsible disposal habits.',
    icon: '/sdg/quality-ed.svg',
  },
  {
    title: 'Clean Water and Sanitation',
    body: 'Better collection keeps waste out of drains and waterways, helping protect water sources.',
    icon: '/sdg/clean-water.svg',
  },
  {
    title: 'Industry, Innovation and Infrastructure',
    body: 'Smart bin sensors and data-driven planning bring digital infrastructure to waste collection.',
    icon: '/sdg/indus.svg',
  },
  {
    title: 'Sustainable Cities and Communities',
    body: 'Pickups planned from real bin conditions keep neighbourhoods cleaner and easier to manage.',
    icon: '/sdg/sustainable.svg',
  },
  {
    title: 'Responsible Consumption and Production',
    body: 'Sorting guidance and rewards encourage households to separate waste so more of it can be recovered.',
    icon: '/sdg/responsible.svg',
  },
  {
    title: 'Climate Action',
    body: 'Fewer wasted truck trips and less waste sent to dumps can help lower emissions.',
    icon: '/sdg/climate.svg',
  },
  {
    title: 'Partnerships for the Goals',
    body: 'We work with households, collectors, businesses and local authorities to share data and widen impact.',
    icon: '/sdg/partnership.svg',
  },
]

function GoalCard({ title, body, icon }) {
  return (
    <article className="motion-card mx-auto h-auto min-h-0 w-full max-w-[292px] rounded-xl bg-[#282828] p-6 sm:min-h-[264px] sm:p-7">
      <img
        src={icon}
        alt=""
        className="size-[78px] rounded-md object-contain"
        loading="lazy"
        decoding="async"
      />
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-3 text-[14px] leading-relaxed text-white">{body}</p>
    </article>
  )
}

export default function Sdg() {
  const top = goals.slice(0, 4)
  const bottom = goals.slice(4)

  return (
    <section id="sdg" className="scroll-mt-24 bg-[#212121]">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-6 lg:py-24">
        <div className="section-reveal mx-auto max-w-3xl text-center">
          <Eyebrow center>Sustainable Development Goals</Eyebrow>
          <h2 className="mt-4 text-[32px] leading-[1.15] font-medium tracking-tight text-white sm:text-[40px]">
            Cleaner communities, aligned with global goals
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-white/70">
            These are the seven UN Sustainable Development Goals EcoBin champions through smarter
            collection, material recovery and education.
          </p>
        </div>

        <div data-motion-group className="mt-12 space-y-5 lg:mt-16">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {top.map((goal) => (
              <GoalCard key={goal.title} {...goal} />
            ))}
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:mx-auto lg:grid-cols-3 lg:w-[calc(75%-0.9375rem)]">
            {bottom.map((goal) => (
              <GoalCard key={goal.title} {...goal} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
