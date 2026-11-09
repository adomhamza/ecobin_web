# EcoBin website (`www.ecobin.eco`)

React + Vite marketing site, plus HTTPS deep-link hosting for the EcoBin apps.

```bash
pnpm install
pnpm dev
```

## Store legal pages

Use these public URLs in App Store Connect and Google Play Console:

| Page | URL |
|------|-----|
| Privacy Policy | `https://www.ecobin.eco/privacy` |
| Terms of Service | `https://www.ecobin.eco/terms` |
| Delete account (Play Console) | `https://www.ecobin.eco/delete-account` |

These pages are prerendered, so the text is in the first HTML response.

## Deep links

Share URLs (opened by the app when installed):

| Share | URL |
|-------|-----|
| App | `https://www.ecobin.eco/app` |
| Article | `https://www.ecobin.eco/app/explore/articles/{id}` |
| Video | `https://www.ecobin.eco/app/explore/videos/{id}` |

Verification files (must stay static — not rewritten to the SPA):

- `public/.well-known/assetlinks.json` — Android App Links
- `public/.well-known/apple-app-site-association` — iOS Universal Links

Host helpers:

- `netlify.toml` / `public/_redirects` / `public/_headers`
- `vercel.json`

### After deploy, verify

```bash
curl -I https://www.ecobin.eco/.well-known/assetlinks.json
curl -I https://www.ecobin.eco/.well-known/apple-app-site-association
```

Expect `200` and `Content-Type: application/json` (especially for AASA). Do not follow a chain of redirects.

### Fingerprints / Team ID

- Apple Team ID in AASA: `85ZN4RD98T`
- `assetlinks.json` currently lists the **upload** keystore SHA-256.
  If Play App Signing is enabled, also add the **App signing** certificate SHA-256 from Play Console → App integrity → App signing.

### Env

Copy `.env.example` → `.env` to set store URLs and API base for deferred-click recording (`POST /deep-links/clicks`).
