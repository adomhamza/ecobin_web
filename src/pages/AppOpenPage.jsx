import { useEffect, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import StoreBadges from '../components/StoreBadges.jsx'
import {
  parseAppPath,
  recordDeepLinkClick,
  referrerFromAppPath,
} from '../lib/deepLinks.js'

/**
 * Share landing for `/app` and content deep links.
 * Installed apps are opened by OS App Links / Universal Links before this page.
 */
export default function AppOpenPage() {
  const { pathname } = useLocation()
  const parsed = useMemo(() => parseAppPath(pathname), [pathname])
  const referrerPath = referrerFromAppPath(parsed.appPath)

  useEffect(() => {
    document.title = `${parsed.title} · EcoBin`
    void recordDeepLinkClick(parsed.appPath)
  }, [parsed])

  return (
    <div className="relative min-h-dvh overflow-hidden bg-canvas text-ink">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(22,163,74,0.18),_transparent_55%),linear-gradient(180deg,#f4f6f8_0%,#ffffff_55%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex min-h-dvh w-full max-w-[720px] flex-col justify-center px-5 py-16 sm:px-8">
        <Link to="/" className="mb-10 inline-flex items-center gap-2 self-start">
          <img src="/logo.svg" alt="" className="size-9" width={36} height={36} />
          <span className="text-lg font-semibold tracking-tight">EcoBin</span>
        </Link>

        <h1 className="max-w-xl text-[2.25rem] leading-[1.1] font-semibold tracking-tight sm:text-5xl">
          {parsed.title}
        </h1>
        <p className="mt-4 max-w-lg text-lg text-muted">{parsed.body}</p>

        <div className="mt-10">
          <StoreBadges
            referrerPath={referrerPath}
            onBeforeNavigate={() => {
              void recordDeepLinkClick(parsed.appPath)
            }}
          />
        </div>

        <p className="mt-8 text-sm text-muted">
          Already have EcoBin?{' '}
          <a
            href={parsed.appPath}
            className="font-medium text-brand underline-offset-2 hover:underline"
          >
            Open in the app
          </a>
        </p>

        <Link
          to="/"
          className="mt-12 text-sm font-medium text-muted underline-offset-2 hover:text-ink hover:underline"
        >
          Back to ecobin.eco
        </Link>
      </div>
    </div>
  )
}
