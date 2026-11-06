import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { AppRoutes } from './App.jsx'

/**
 * Renders a route to HTML for the production prerender step.
 * @param {string} url Path to render, such as "/".
 * @returns {string} HTML for the route.
 */
export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>,
  )
}
