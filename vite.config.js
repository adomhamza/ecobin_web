import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

/** Serve prerendered legal pages at /privacy and /terms in `vite preview`. */
function legalPagePreview() {
  const routes = {
    '/privacy': '/privacy.html',
    '/privacy/': '/privacy.html',
    '/terms': '/terms.html',
    '/terms/': '/terms.html',
  }

  return {
    name: 'legal-page-preview',
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        const path = req.url?.split('?')[0]
        const target = routes[path]
        if (target) req.url = target
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), legalPagePreview()],
})
