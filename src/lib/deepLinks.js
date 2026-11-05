/** Public HTTPS origin used in share links and App Link verification. */
export const SITE_ORIGIN = 'https://www.ecobin.eco'

/** Production Android applicationId (Play + App Links). */
export const ANDROID_PACKAGE = 'com.app.ecobin'

/** Staging Android applicationId (`applicationIdSuffix ".staging"`). */
export const ANDROID_PACKAGE_STAGING = 'com.app.ecobin.staging'

/**
 * Store listing URLs. Override with Vite env when listings go live.
 * Play referrer carries the in-app path for deferred Android installs.
 */
export function playStoreUrl(referrerPath = '') {
  const base =
    import.meta.env.VITE_ANDROID_PLAY_STORE_URL ||
    `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}`
  if (!referrerPath) return base
  const joiner = base.includes('?') ? '&' : '?'
  return `${base}${joiner}referrer=${encodeURIComponent(referrerPath)}`
}

export function appStoreUrl() {
  return (
    import.meta.env.VITE_IOS_APP_STORE_URL || 'https://apps.apple.com/app/ecobin'
  )
}

/** True in Android browsers / in-app WebViews (WhatsApp, etc.). */
export function isAndroidUserAgent(ua = navigator.userAgent || '') {
  return /Android/i.test(ua)
}

/**
 * Build an HTTPS VIEW intent for one EcoBin Android package.
 *
 * @param {string} hostPath `www.ecobin.eco/app/...` (no scheme)
 * @param {string} packageName Android applicationId
 * @param {string} fallbackUrl Next intent or Play Store URL
 */
function androidIntentForPackage(hostPath, packageName, fallbackUrl) {
  return (
    `intent://${hostPath}#Intent;` +
    'scheme=https;' +
    `package=${packageName};` +
    'action=android.intent.action.VIEW;' +
    'category=android.intent.category.BROWSABLE;' +
    `S.browser_fallback_url=${encodeURIComponent(fallbackUrl)};` +
    'end'
  )
}

/**
 * Intent URL that opens an installed EcoBin app for a share path.
 * Tries prod (`com.app.ecobin`), then staging (`com.app.ecobin.staging`),
 * then the Play Store. Works when DAL verification failed (missing Play
 * App Signing SHA) or the link opened in an in-app browser.
 *
 * @param {string} appPath Absolute path such as `/app/explore/articles/abc`
 * @param {string} [referrerPath] Deferred install referrer (no `/app` prefix)
 */
/**
 * Intent that opens only the staging package (testers), then Play Store.
 *
 * @param {string} appPath Absolute path such as `/app/explore/articles/abc`
 * @param {string} [referrerPath] Deferred install referrer (no `/app` prefix)
 */
export function androidStagingIntentUrl(appPath, referrerPath = '') {
  const path = appPath.startsWith('/') ? appPath : `/${appPath}`
  return androidIntentForPackage(
    `www.ecobin.eco${path}`,
    ANDROID_PACKAGE_STAGING,
    playStoreUrl(referrerPath),
  )
}

/**
 * Prefer prod, then staging, then Play Store.
 *
 * @param {string} appPath Absolute path such as `/app/explore/articles/abc`
 * @param {string} [referrerPath] Deferred install referrer (no `/app` prefix)
 */
export function androidIntentUrl(appPath, referrerPath = '') {
  const path = appPath.startsWith('/') ? appPath : `/${appPath}`
  const hostPath = `www.ecobin.eco${path}`
  const play = playStoreUrl(referrerPath)
  const staging = androidIntentForPackage(
    hostPath,
    ANDROID_PACKAGE_STAGING,
    play,
  )
  return androidIntentForPackage(hostPath, ANDROID_PACKAGE, staging)
}

/** API base including `/api/v1` for deferred-click recording. */
export function apiBaseUrl() {
  return (
    import.meta.env.VITE_API_BASE_URL || 'http://199.192.27.107/api/v1'
  )
}

/**
 * Parse `/app`, `/app/explore/articles/:id`, `/app/explore/videos/:id`.
 *
 * @param {string} pathname
 * @returns {{ kind: 'app'|'article'|'video'|'unknown', id?: string, appPath: string, title: string, body: string }}
 */
export function parseAppPath(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/'

  if (path === '/app') {
    return {
      kind: 'app',
      appPath: '/app',
      title: 'Open EcoBin',
      body: 'Manage waste smarter, earn rewards, and keep your household on track.',
    }
  }

  const article = path.match(/^\/app\/explore\/articles\/([^/]+)$/)
  if (article) {
    return {
      kind: 'article',
      id: decodeURIComponent(article[1]),
      appPath: path,
      title: 'Open this EcoBin article',
      body: 'Continue reading in the EcoBin app — lessons that help you recycle right and earn points.',
    }
  }

  const video = path.match(/^\/app\/explore\/videos\/([^/]+)$/)
  if (video) {
    return {
      kind: 'video',
      id: decodeURIComponent(video[1]),
      appPath: path,
      title: 'Open this EcoBin video',
      body: 'Watch this lesson in the EcoBin app and keep learning on the go.',
    }
  }

  return {
    kind: 'unknown',
    appPath: '/app',
    title: 'Open EcoBin',
    body: 'Get the EcoBin app for pickups, rewards, and recycling lessons.',
  }
}

/** In-app path used as Android install referrer (no /app prefix). */
export function referrerFromAppPath(appPath) {
  if (!appPath || appPath === '/app') return ''
  return appPath.replace(/^\/app\/?/, '')
}

/**
 * Best-effort deferred-click record. Safe if the API is not deployed yet.
 *
 * @param {string} path Absolute site path such as `/app/explore/articles/abc`
 */
export async function recordDeepLinkClick(path) {
  try {
    await fetch(`${apiBaseUrl()}/deep-links/clicks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path }),
      keepalive: true,
    })
  } catch {
    // Landing still works without deferred claim.
  }
}
