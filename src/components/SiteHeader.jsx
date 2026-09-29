export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between px-5 py-4 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-2 rounded-full bg-white/80 py-1 pr-3 pl-1 backdrop-blur-md"
        >
          <img src="/logo.svg" width="33" height="33" alt="" className="size-8" />
          <span className="text-lg font-semibold tracking-tight">EcoBin</span>
        </a>
        <a
          href="#download"
          className="inline-flex items-center rounded-full bg-brand px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-brand-dark"
        >
          Download the app
        </a>
      </div>
    </header>
  )
}
