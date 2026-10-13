export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-white">
      <div className="mx-auto w-full max-w-[1120px] px-5 py-20 sm:px-6 lg:py-28">
        <div className="section-reveal">
        <h2 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl">
          See how EcoBin works
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-muted sm:text-lg">
          Schedule garbage pickups and get on-time service. From homes to businesses,
          our system automatically detects when garbage are full.
        </p>
        </div>
        <img
          src="/video.webp"
          width="1247"
          height="721"
          alt="Beach cleanup with a play button for the EcoBin walkthrough"
          className="motion-card mt-10 w-full rounded-[28px]"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  )
}
