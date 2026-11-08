import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = process.cwd()
const templatePath = path.join(root, 'dist/index.html')
const serverEntry = path.join(root, 'dist/server/entry-server.js')
const placeholder = '<div id="root"></div>'

const pages = [
  {
    path: '/',
    outFile: path.join(root, 'dist/index.html'),
    title: 'EcoBin — Waste management, made effortless',
    description:
      'EcoBin is a Ghana-focused household waste collection service. Request pickups, monitor bins, and learn how to sort and recycle with the EcoBin app.',
    canonical: 'https://www.ecobin.eco/',
    mustInclude: ['Smarter Waste Management', 'Where do you operate?'],
  },
  {
    path: '/privacy',
    outFile: path.join(root, 'dist/privacy.html'),
    title: 'Privacy Policy — EcoBin',
    description:
      'How ECOBIN LTD collects, uses, and deletes information in the EcoBin app and on ecobin.eco.',
    canonical: 'https://www.ecobin.eco/privacy',
    mustInclude: ['Privacy Policy', 'Delete your account'],
  },
  {
    path: '/terms',
    outFile: path.join(root, 'dist/terms.html'),
    title: 'Terms of Service — EcoBin',
    description:
      'The terms that apply when you use the EcoBin app, request a collection, or use ecobin.eco.',
    canonical: 'https://www.ecobin.eco/terms',
    mustInclude: ['Terms of Service', 'Pickups and fees'],
  },
]

const template = fs.readFileSync(templatePath, 'utf8')
if (!template.includes(placeholder)) {
  throw new Error(`Could not find ${placeholder} in dist/index.html`)
}

const { render } = await import(pathToFileURL(serverEntry).href)

for (const page of pages) {
  const appHtml = render(page.path)
  for (const snippet of page.mustInclude) {
    if (!appHtml.includes(snippet)) {
      throw new Error(`Prerendered ${page.path} is missing "${snippet}"`)
    }
  }

  const html = applyMeta(template, page).replace(
    placeholder,
    `<div id="root">${appHtml}</div>`,
  )
  fs.mkdirSync(path.dirname(page.outFile), { recursive: true })
  fs.writeFileSync(page.outFile, html)
  console.log(`Prerendered ${page.path} into ${path.relative(root, page.outFile)}`)
}

/**
 * Point title, description, and canonical tags at one public page.
 * @param {string} html Vite HTML template.
 * @param {{ title: string, description: string, canonical: string }} page Page meta.
 * @returns {string} HTML with the page meta applied.
 */
function applyMeta(html, page) {
  const title = escapeText(page.title)
  const description = escapeAttr(page.description)
  const canonical = escapeAttr(page.canonical)
  let next = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
  next = replaceAttr(next, 'name="description"', description)
  next = replaceAttr(next, 'property="og:description"', description)
  next = replaceAttr(next, 'name="twitter:description"', description)
  next = replaceAttr(next, 'property="og:title"', title)
  next = replaceAttr(next, 'name="twitter:title"', title)
  next = replaceAttr(next, 'property="og:url"', canonical)
  next = next.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${canonical}" />`,
  )
  return next
}

/**
 * Replace the content attribute on a meta tag identified by a stable attribute.
 * @param {string} html Document HTML.
 * @param {string} marker Attribute that identifies the tag, including quotes.
 * @param {string} content Escaped attribute value.
 * @returns {string} Updated HTML.
 */
function replaceAttr(html, marker, content) {
  const pattern = new RegExp(`(<meta\\s[\\s\\S]*?${marker}[\\s\\S]*?content=")[\\s\\S]*?(")`)
  if (!pattern.test(html)) {
    throw new Error(`Could not find meta tag with ${marker}`)
  }
  return html.replace(pattern, `$1${content}$2`)
}

/**
 * Escape text placed between HTML tags.
 * @param {string} value Raw text.
 * @returns {string} Escaped text.
 */
function escapeText(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;')
}

/**
 * Escape a double-quoted HTML attribute.
 * @param {string} value Raw attribute value.
 * @returns {string} Escaped attribute value.
 */
function escapeAttr(value) {
  return escapeText(value).replaceAll('"', '&quot;')
}
