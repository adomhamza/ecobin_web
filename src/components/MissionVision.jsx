function SectionLabel({ children }) {
  return (
    <p className="flex items-center gap-3 text-sm font-semibold tracking-[0.12em] text-brand uppercase">
      <span className="h-px w-7 bg-brand" aria-hidden="true" />
      {children}
    </p>
  )
}

export default function MissionVision() {
  return (
    <>
      <section id="mission" className="scroll-mt-0 bg-white">
        <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-[60px]">
          <div className="motion-from-left">
            <SectionLabel>Our Mission</SectionLabel>
            <h2 className="mt-5 text-[40px] leading-[1.15] font-medium tracking-tight text-ink">
              Empower Sustainable Communities Through Intelligent Waste Management & Resource
              Recovery
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              To help build a future where waste is managed intelligently, resources are recovered
              responsibly, and communities actively participate in creating a cleaner and more
              sustainable environment.
            </p>
          </div>
          <img
            src="/our-mission.webp"
            width="1200"
            height="801"
            alt="People holding recycling, water, plant, and earth cutouts"
            className="motion-from-right aspect-[3/2] w-full rounded-2xl object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section id="vision" className="scroll-mt-24 bg-white">
        <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-[60px]">
          <img
            src="/our-vision.webp"
            width="1200"
            height="801"
            alt="Neon recycling symbol with a green heart of moss at the center"
            className="motion-from-left order-2 aspect-[3/2] w-full rounded-2xl object-cover lg:order-1"
            loading="lazy"
            decoding="async"
          />
          <div className="motion-from-right order-1 lg:order-2">
            <SectionLabel>Our Vision</SectionLabel>
            <h2 className="mt-5 text-[40px] leading-[1.15] font-medium tracking-tight text-ink">
              Drive Africa&apos;s Sustainable Future Through Smart, Data-Driven Waste Management &
              Education
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              To improve waste management through smart collection technology, data-driven
              decision-making, responsible waste practices and accessible environmental education,
              beginning in Ghana and creating opportunities for broader impact across Africa.
            </p>
          </div>
        </div>
      </section>

      <section id="values" className="scroll-mt-24 bg-[#f5f6f8]">
        <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-[60px]">
          <div className="motion-from-left space-y-8">
            <div>
              <h2 className="text-[40px] font-medium tracking-tight text-ink">
                Our Values
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                EcoBin drives sustainable waste management through a high-stakes, six-pillar mandate
                focused on purposeful innovation, strict accountability, and total community
                alignment. By balancing environmental responsibility with localised affordability,
                the company forces cross-chain collaboration to engineer practical, scalable
                solutions.
              </p>
            </div>
            <div>
              <h2 className="text-[40px] font-medium tracking-tight text-ink">
                Our Approach
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                EcoBin secures real-world viability by aggressively decoding local constraints and
                stress-testing smart monitoring solutions through live household pilots. By
                subjecting hard performance metrics to strict verification, the company refines its
                model under pressure and scales only when capacity and funding demand it.
              </p>
            </div>
          </div>
          <img
            src="/value-approach.webp"
            width="1200"
            height="800"
            alt="EcoBin team collaborating around a conference table"
            className="motion-from-right w-full rounded-2xl"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>
    </>
  )
}

export { SectionLabel }
