import { useEffect, useState } from 'react'

export default function SiteHeader() {
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-40 px-5 py-4 sm:px-6">
      <div
        className={`mx-auto flex w-full max-w-[1120px] items-center justify-between rounded-full px-3 py-2 shadow-[0_10px_40px_rgba(16,24,40,0.06)] backdrop-blur-md transition-colors ${
          solid
            ? 'bg-white'
            : 'border border-white/70 bg-gradient-to-r from-white via-white to-white/25'
        }`}
      >
        <a href="#top" className="flex items-center gap-2 rounded-full py-1 pr-2 pl-1">
          <img src="/logo.svg" width="33" height="33" alt="" className="size-8" />
          <span className="text-lg font-semibold tracking-tight">EcoBin</span>
        </a>
        <a
          href="#download"
          className="inline-flex items-center rounded-full bg-brand px-4 py-2.5 text-sm font-medium text-white transition hover:bg-brand-dark"
        >
          Download the app
        </a>
      </div>
    </header>
  )
}
