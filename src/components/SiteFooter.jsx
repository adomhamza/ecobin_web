import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'

const socials = [
  { label: 'WhatsApp Business', icon: FaWhatsapp },
  { label: 'LinkedIn', icon: FaLinkedinIn },
  { label: 'X', icon: FaXTwitter },
  { label: 'Facebook', icon: FaFacebookF },
]

const links = [
  { label: 'Download the App', href: '#download' },
  { label: 'Services', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reach Us', href: '#contact' },
]

export default function SiteFooter() {
  return (
    <footer className="bg-[#121212] text-white">
      <div className="mx-auto w-full max-w-[1120px] px-5 py-10 sm:px-6">
        <div className="rounded-[28px] bg-[#262626] px-6 py-8 sm:px-10 sm:py-10">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-semibold text-white">Ecobin</p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white">
                Ecobin is a waste management company based in Accra, Ghana. We collaborate with
                people and business to provide cleaner environment.
              </p>
              <p className="mt-6 text-sm leading-relaxed text-white">
                Ecobin - Accra, Ghana
                <br />
                <a href="tel:+233559681654" className="hover:text-white/80">
                  +233 559681654
                </a>
                <br />
                Get in touch:{' '}
                <a href="mailto:ecobin@gmail.com" className="hover:text-white/80">
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
              <div className="mt-8 flex items-center gap-3">
                {socials.map(({ label, icon: Icon }) => (
                  <a
                    key={label}
                    href="#contact"
                    aria-label={label}
                    className="grid size-9 place-items-center rounded-full border border-white/25 text-white transition hover:border-white"
                  >
                    <Icon className="size-3.5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-xs leading-relaxed text-white">
          © 2026 Ecobin
          <br />
          EcoBin is registered in Accra - Ghana
        </p>
      </div>
    </footer>
  )
}
