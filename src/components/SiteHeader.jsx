import { useEffect, useState } from 'react'
import { LuMenu, LuX } from 'react-icons/lu'

const links = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Solutions', href: '#features' },
  { label: 'Who We Serve', href: '#community' },
  { label: 'Why Choose Us', href: '#advantage' },
  { label: 'Contact Us', href: '#contact' },
]

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
          ? 'border-slate-200/80 bg-white/95 backdrop-blur-xl'
          : 'border-transparent bg-white'
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1200px] items-center gap-4 px-5 py-3.5 sm:px-6">
        <a href="#top" className="flex shrink-0 items-center gap-2">
          <img src="/logo.svg" width="33" height="33" alt="" className="size-8" />
          <span className="text-lg font-semibold tracking-tight text-ink">EcoBin</span>
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
        <div className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden">
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
