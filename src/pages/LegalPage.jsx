import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { deleteAccount } from '../content/deleteAccount.js'
import { privacyPolicy } from '../content/privacyPolicy.js'
import { termsOfService } from '../content/termsOfService.js'
import { company } from '../lib/company.js'

const documents = {
  [privacyPolicy.path]: privacyPolicy,
  [termsOfService.path]: termsOfService,
  [deleteAccount.path]: deleteAccount,
}

const related = [
  { label: 'Privacy Policy', to: privacyPolicy.path },
  { label: 'Terms of Service', to: termsOfService.path },
  { label: 'Delete account', to: deleteAccount.path },
]

const urlPattern = /(https:\/\/[^\s]+)/g

function LinkedText({ text }) {
  const parts = text.split(urlPattern)
  return parts.map((part) =>
    part.startsWith('https://') ? (
      <a
        key={part}
        href={part}
        className="font-medium text-brand underline-offset-2 hover:underline"
      >
        {part}
      </a>
    ) : (
      <span key={part}>{part}</span>
    ),
  )
}

function Blocks({ blocks }) {
  return blocks.map((block) => {
    if (block.type === 'ul' || block.type === 'ol') {
      const List = block.type === 'ol' ? 'ol' : 'ul'
      const listClass =
        block.type === 'ol' ? 'list-decimal' : 'list-disc'
      return (
        <List
          key={block.items[0]}
          className={`mt-3 space-y-2 pl-5 text-base leading-relaxed text-slate-700 ${listClass}`}
        >
          {block.items.map((item) => (
            <li key={item}>
              <LinkedText text={item} />
            </li>
          ))}
        </List>
      )
    }

    return (
      <p key={block.text} className="mt-3 text-base leading-relaxed text-slate-700">
        <LinkedText text={block.text} />
      </p>
    )
  })
}

/**
 * Store listing page for the Privacy Policy or Terms of Service.
 */
export default function LegalPage() {
  const { pathname } = useLocation()
  const page = documents[pathname] ?? privacyPolicy

  useEffect(() => {
    window.document.title = `${page.title} — EcoBin`
  }, [page.title])

  return (
    <div className="min-h-dvh bg-white text-ink">
      <header className="border-b border-slate-200">
        <div className="mx-auto flex w-full max-w-[760px] items-center px-5 py-4 sm:px-6">
          <Link to="/" className="inline-flex items-center gap-2" aria-label="EcoBin home">
            <img src="/logo.svg" alt="" width={32} height={32} className="size-8" />
            <span className="text-lg font-semibold tracking-tight">EcoBin</span>
          </Link>
        </div>
      </header>

      <main id="main" className="mx-auto w-full max-w-[760px] px-5 py-12 sm:px-6 sm:py-16">
        <p className="text-sm font-semibold tracking-[0.08em] text-brand uppercase">EcoBin</p>
        <h1 className="mt-3 text-[2.25rem] leading-[1.1] font-semibold tracking-tight sm:text-5xl">
          {page.title}
        </h1>
        <p className="mt-4 text-sm text-muted">Last updated {page.updated}</p>
        <p className="mt-6 text-base leading-relaxed text-slate-700">{page.intro}</p>

        {page.sections.map((section) => (
          <section key={section.id} className="mt-10" aria-labelledby={section.id}>
            <h2 id={section.id} className="text-xl font-semibold tracking-tight">
              {section.heading}
            </h2>
            <Blocks blocks={section.blocks} />
          </section>
        ))}

        <section className="mt-10" aria-labelledby="contact">
          <h2 id="contact" className="text-xl font-semibold tracking-tight">
            Contact us
          </h2>
          <address className="mt-3 text-base leading-relaxed text-slate-700 not-italic">
            {company.legalName}
            <br />
            {company.address}
            <br />
            <a href={`mailto:${company.email}`} className="text-brand underline-offset-2 hover:underline">
              {company.email}
            </a>
            <br />
            <a href={company.phoneHref} className="text-brand underline-offset-2 hover:underline">
              {company.phoneLabel}
            </a>
          </address>
        </section>
      </main>

      <footer className="border-t border-slate-200">
        <div className="mx-auto flex w-full max-w-[760px] flex-col gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© 2026 {company.legalName}</p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-4 gap-y-2">
            {related.map((item) =>
              item.to === pathname ? (
                <span key={item.to} aria-current="page" className="font-medium text-ink">
                  {item.label}
                </span>
              ) : (
                <Link key={item.to} to={item.to} className="underline-offset-2 hover:text-ink hover:underline">
                  {item.label}
                </Link>
              ),
            )}
            <Link to="/" className="underline-offset-2 hover:text-ink hover:underline">
              Home
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
