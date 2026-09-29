import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import Advantage from './components/Advantage.jsx'
import Community from './components/Community.jsx'
import Contact from './components/Contact.jsx'
import DownloadCta from './components/DownloadCta.jsx'
import Faq from './components/Faq.jsx'
import Features from './components/Features.jsx'
import Hero from './components/Hero.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Rewards from './components/Rewards.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import SiteHeader from './components/SiteHeader.jsx'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function App() {
  const root = useRef(null)

  useGSAP(
    () => {
      const motion = gsap.matchMedia()
      motion.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.hero-reveal', {
          y: 28,
          autoAlpha: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: 'power3.out',
        })

        gsap.utils.toArray('.section-reveal').forEach((section) => {
          gsap.from(section, {
            y: 36,
            autoAlpha: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 88%',
              once: true,
            },
          })
        })
      })
    },
    { scope: root },
  )

  return (
    <div ref={root} id="top">
      <div className="hero-surface pb-10 lg:pb-16">
        <SiteHeader />
        <Hero />
      </div>
      <main>
        <Features />
        <Rewards />
        <HowItWorks />
        <Advantage />
        <Community />
        <Faq />
        <Contact />
        <DownloadCta />
      </main>
      <SiteFooter />
    </div>
  )
}
