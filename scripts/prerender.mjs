import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = process.cwd()
const templatePath = path.join(root, 'dist/index.html')
const serverEntry = path.join(root, 'dist/server/entry-server.js')
const placeholder = '<div id="root"></div>'

const template = fs.readFileSync(templatePath, 'utf8')
if (!template.includes(placeholder)) {
  throw new Error(`Could not find ${placeholder} in dist/index.html`)
}

const { render } = await import(pathToFileURL(serverEntry).href)
const appHtml = render('/')
if (!appHtml.includes('Smarter Waste Management')) {
  throw new Error('Prerendered homepage is missing the main heading')
}
if (!appHtml.includes('Where do you operate?')) {
  throw new Error('Prerendered homepage is missing the FAQ')
}

fs.writeFileSync(templatePath, template.replace(placeholder, `<div id="root">${appHtml}</div>`))
console.log('Prerendered / into dist/index.html')
