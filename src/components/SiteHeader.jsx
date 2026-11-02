import { useEffect, useState } from 'react'
import { LuMenu, LuX } from 'react-icons/lu'

const links = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Solutions', href: '#features' },
  { label: 'Who We Serve', href: '#community' },
  { label: 'Why Choose Us', href: '#why-choose' },
  { label: 'Contact Us', href: '#contact' },
]

const brandNames = ['EcoBin', 'Nature Rewards']

function BrandWordmark() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return undefined

    let timeoutId
    const interval = window.setInterval(() => {
      setVisible(false)
      timeoutId = window.setTimeout(() => {
        setIndex((current) => (current + 1) % brandNames.length)
        setVisible(true)
      }, 280)
    }, 3200)

    return () => {
      window.clearInterval(interval)
      window.clearTimeout(timeoutId)
    }
  }, [])

  return (
    <span className="relative inline-grid min-w-[8.5rem] text-lg font-semibold tracking-tight text-ink">
      <span className="invisible col-start-1 row-start-1 whitespace-nowrap" aria-hidden="true">
        Nature Rewards
      </span>
      <span
        className={`col-start-1 row-start-1 whitespace-nowrap transition duration-300 ease-out ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-1.5 opacity-0'
        }`}
      >
        {brandNames[index]}
      </span>
    </span>
  )
}

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled || open
          ? 'border-white/40 bg-white/55 shadow-[0_8px_30px_rgba(16,24,40,0.06)] backdrop-blur-2xl'
          : 'border-white/20 bg-white/40 backdrop-blur-xl'
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1200px] items-center gap-4 px-5 py-3.5 sm:px-6">
        <a href="#top" className="flex shrink-0 items-center gap-2" aria-label="EcoBin home">
          <img src="/logo.svg" width="33" height="33" alt="" className="size-8" aria-hidden="true" />
          <BrandWordmark />
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#download"
          className="ml-auto hidden items-center rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-white transition hover:bg-brand-dark sm:inline-flex lg:ml-0"
        >
          Download the app
        </a>

        <button
          type="button"
          className="ml-auto grid size-10 place-items-center rounded-lg text-ink lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <LuX className="size-6" /> : <LuMenu className="size-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/30 bg-white/50 px-5 py-4 backdrop-blur-2xl lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-800"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#download"
            className="mt-3 flex items-center justify-center rounded-lg bg-brand px-4 py-3 text-sm font-medium text-white"
            onClick={() => setOpen(false)}
          >
            Download the app
          </a>
        </div>
      ) : null}
    </header>
  )
}
