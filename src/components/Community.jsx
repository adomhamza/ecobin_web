export default function Community() {
  return (
    <section className="bg-white">
      <div className="section-reveal mx-auto w-full max-w-[1120px] px-5 pt-16 sm:px-6 lg:pt-20">
        <div className="relative overflow-hidden rounded-[28px]">
          <img
            src="/footer-img.svg"
            width="1243"
            height="688"
            alt="A family sitting together outdoors under the trees"
            className="aspect-[16/9] w-full object-cover sm:aspect-[1243/688]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
          <p className="absolute inset-x-0 bottom-8 px-6 text-center text-2xl font-bold tracking-tight text-white sm:bottom-12 sm:text-4xl">
            Cleaner & Safe world together
          </p>
        </div>
      </div>
    </section>
  )
}
