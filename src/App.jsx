import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { LuRecycle } from 'react-icons/lu'

gsap.registerPlugin(useGSAP)

export default function App() {
  const root = useRef(null)

  useGSAP(
    () => {
      gsap.from('.reveal', {
        y: 32,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
      })
    },
    { scope: root },
  )

  return (
    <main
      ref={root}
      className="flex min-h-svh flex-col items-center justify-center bg-stone-950 px-6 text-stone-100"
    >
      <LuRecycle className="reveal size-10 text-lime-300" aria-hidden="true" />
      <p className="reveal mt-5 text-sm font-medium tracking-[0.2em] text-lime-300 uppercase">
        Trayton
      </p>
      <h1 className="reveal mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">
        EcoBin
      </h1>
      <p className="reveal mt-4 max-w-md text-center text-lg text-stone-400">
        React, Vite, Tailwind, GSAP, and React Icons are ready.
      </p>
    </main>
  )
}
