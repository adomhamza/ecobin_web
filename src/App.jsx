import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import About from './components/About.jsx'
import BackToTop from './components/BackToTop.jsx'
import Community from './components/Community.jsx'
import Contact from './components/Contact.jsx'
import DownloadCta from './components/DownloadCta.jsx'
import Faq from './components/Faq.jsx'
import Hero from './components/Hero.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import MissionVision from './components/MissionVision.jsx'
import Solutions from './components/Solutions.jsx'
import Sdg from './components/Sdg.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
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
        const ease = 'power3.out'

        gsap
          .timeline({ defaults: { ease, duration: 0.85 } })
          .from('.hero-reveal', { y: 32, autoAlpha: 0, stagger: 0.12 })
          .from('.hero-media', { x: 48, autoAlpha: 0, duration: 1.05 }, 0.15)

        const fadeUp = (targets, extra = {}) => {
          gsap.utils.toArray(targets).forEach((element) => {
            gsap.from(element, {
              y: 36,
              autoAlpha: 0,
              duration: 0.8,
              ease,
              scrollTrigger: {
                trigger: element,
                start: 'top 88%',
                once: true,
              },
              ...extra,
            })
          })
        }

        fadeUp('.section-reveal')
        fadeUp('.motion-from-left', { x: -64, y: 20, duration: 1 })
        fadeUp('.motion-from-right', { x: 64, y: 20, duration: 1 })
        fadeUp(
          gsap.utils.toArray('.motion-card').filter((card) => !card.closest('[data-motion-group]')),
          { y: 56, duration: 0.95 },
        )

        gsap.utils.toArray('[data-motion-group]').forEach((group) => {
          const cards = group.querySelectorAll('.motion-card')
          const rows = group.classList.contains('motion-list') ? group.children : cards
          if (!rows.length) return
          gsap.from(rows, {
            y: 28,
            autoAlpha: 0,
            duration: 0.7,
            stagger: 0.12,
            ease,
            scrollTrigger: {
              trigger: group,
              start: 'top 84%',
              once: true,
            },
          })
        })
      })

      const refresh = () => ScrollTrigger.refresh()
      window.addEventListener('load', refresh)
      return () => window.removeEventListener('load', refresh)
    },
    { scope: root },
  )

  return (
    <div ref={root} id="top">
      <SiteHeader />
      <Hero />
      <main>
        <About />
        <MissionVision />
        <Solutions />
        <Rewards />
        <Community />
        <WhyChooseUs />
        <Sdg />
        <HowItWorks />
        <Faq />
        <Contact />
        <DownloadCta />
      </main>
      <SiteFooter />
      <BackToTop />
    </div>
  )
}
