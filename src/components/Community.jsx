import {
  LuBriefcase,
  LuGraduationCap,
  LuHandshake,
  LuHouse,
  LuRecycle,
  LuGlobe,
} from 'react-icons/lu'
import { Eyebrow } from './Features.jsx'

const audiences = [
  {
    title: 'Household & Residents',
    body: 'People seeking reliable waste collection, clearer waste management information and practical guidance on responsible disposal.',
    Icon: LuHouse,
  },
  {
    title: 'Waste collection operators',
    body: 'Individuals and businesses that could benefit from better visibility into collection demand, more informed planning and improved operational coordination.',
    Icon: LuHandshake,
  },
  {
    title: 'Local authorities and public institutions',
    body: 'Institutions interested in cleaner communities, improved waste management information, public education and evidence-informed sanitation initiatives.',
    Icon: LuGlobe,
  },
  {
    title: 'Recycling and material recovery businesses',
    body: 'Organisations that collect, sort, process or repurpose recyclable and other recoverable materials.',
    Icon: LuRecycle,
  },
  {
    title: 'Businesses and commercial establishments',
    body: 'People seeking reliable waste collection, clearer waste management information and practical guidance on responsible disposal.',
    Icon: LuBriefcase,
  },
  {
    title: 'Schools, community groups and environmental organisations',
    body: 'Partners that can help extend environmental awareness, encourage participation and support community-based sustainability activities.',
    Icon: LuGraduationCap,
  },
]

export default function Community() {
  return (
    <section id="community" className="scroll-mt-24 bg-[#f5f6f8]">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-6 lg:py-24">
        <div className="section-reveal max-w-3xl">
          <Eyebrow>Who We Serve</Eyebrow>
          <h2 className="mt-4 text-[32px] leading-[1.15] font-medium tracking-tight text-ink sm:text-[40px]">
            Eco-Friendly Waste Solutions for Everyone
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Bridging the gap between modern technology and everyday disposal to deliver clean,
            transparent, and eco-friendly waste services across entire communities.
          </p>
        </div>

        <div
          data-motion-group
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6"
        >
          {audiences.map(({ title, body, Icon }) => (
            <article
              key={title}
              className="motion-card rounded-xl bg-white p-6 shadow-[0_8px_30px_rgba(16,24,40,0.06)] sm:p-7"
            >
              <span className="flex size-14 items-center justify-center rounded-lg bg-brand text-white">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">{title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
