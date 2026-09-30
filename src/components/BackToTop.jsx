import { useEffect, useState } from 'react'
import { LuArrowUp } from 'react-icons/lu'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const footer = document.querySelector('footer')
      if (!footer) return
      const top = footer.getBoundingClientRect().top
      setVisible(top < window.innerHeight - 48)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
      }}
      className={`fixed right-5 bottom-6 z-50 grid size-12 place-items-center rounded-full bg-brand text-white shadow-[0_10px_30px_rgba(22,163,74,0.35)] transition duration-300 hover:bg-brand-dark ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <LuArrowUp className="size-5" aria-hidden="true" />
    </button>
  )
}
