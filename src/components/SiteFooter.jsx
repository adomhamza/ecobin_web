import {
  // FaFacebookF,
  FaInstagram,
  // FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
  // FaXTwitter,
} from 'react-icons/fa6'

const socials = [
  { label: 'WhatsApp Business', icon: FaWhatsapp, href: 'https://wa.me/233208420372' },
  // { label: 'LinkedIn', icon: FaLinkedinIn, href: '#contact' },
  // { label: 'X', icon: FaXTwitter, href: '#contact' },
  // { label: 'Facebook', icon: FaFacebookF, href: '#contact' },
  { label: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/ecobin.eco/' },
  { label: 'TikTok', icon: FaTiktok, href: 'https://www.tiktok.com/@ecobin.eco' },
]

const links = [
  { label: 'Download the App', href: '#download' },
  { label: 'Services', href: '#features' },
  { label: 'Pricing', href: '#faq' },
  { label: 'Reach Us', href: '#contact' },
]

export default function SiteFooter() {
  return (
    <footer className="bg-[#121212] text-white">
      <div className="mx-auto w-full max-w-[1120px] px-5 py-10 sm:px-6">
        <div className="motion-card rounded-[28px] bg-[#262626] px-6 py-8 sm:px-10 sm:py-10">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-semibold text-white">EcoBin</p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white">
                ECOBIN is a waste management company based in Accra, Ghana. We collaborate with
                people and business to provide cleaner environment.
              </p>
              <p className="mt-6 text-sm leading-relaxed text-white">
                ECOBIN - Accra, Ghana
                <br />
                <a href="tel:+233208420372" className="hover:text-white/80">
                  +233 20 842 0372
                </a>
                <br />
                Get in touch:{' '}
                <a href="mailto:hello@ecobin.eco" className="hover:text-white/80">
                  ecobin@gmail.com
                </a>
              </p>
            </div>
            <div>
              <p className="font-semibold text-white">Quick links</p>
              <ul className="mt-4 space-y-3 text-sm">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-white transition hover:text-white/80">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {socials.map(({ label, icon: Icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    {...(href.startsWith('http')
                      ? { target: '_blank', rel: 'noreferrer' }
                      : {})}
                    className="grid size-9 place-items-center rounded-full border border-white/25 text-white transition hover:border-white"
                  >
                    <Icon className="size-3.5" aria-hidden="true" />
                  </a>
                ))}
                <a
                  href="https://profiles.eco/ecobin?ref=tm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label=".eco profile for ecobin.eco"
                  className="grid size-9 place-items-center overflow-hidden rounded-full"
                >
                  <img
                    className="eco-trustmark size-9"
                    alt=".eco profile for ecobin.eco"
                    src="https://trust.profiles.eco/ecobin/eco-button.svg?color=%2316A34A"
                    width="36"
                    height="36"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-xs leading-relaxed text-white">
          © 2026 ECOBIN LTD
          <br />
          ECOBIN LTD is registered in Accra - Ghana
        </p>
      </div>
    </footer>
  )
}
