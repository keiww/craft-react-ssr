import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDOM from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router'
import { Provider } from 'react-redux'

const template = fs.readFileSync(path.resolve(__dirname, './template.html'), 'utf-8')


/**
 * @param  {Array}  routes
 * @param  {String} path
 * @return {Object} { matchedRoute, match }
 */
export const matchRoute = (routes, path) => {
  let match, matchedRoute = null
  routes.some(route => {
    match = matchPath(path, route)
    if (match) {
      console.log(`[matched ${path}]`)
      matchedRoute = route
      return true
    }
    return false
  })
  return { match, matchedRoute }
}


/**
 * Insert react and state to index.html for rendering
 * @param  {Object} app
 * @param  {Object} app
 * @return {String} html
 */
export const view = ({ app, state = {} }) => {
  const html = template
    .replace('<!--app-->', ReactDOM.renderToString(app))
    .replace('<!--state-->', `<script type="text/javascript">window.__INIT_STATE__=${JSON.stringify(state)}</script>`)
  return html
}


/**
 * Create a React app instant object
 * @param  {Object} store
 * @param  {String} url
 * @param  {Object} App
 * @return {Object} react jsx object
 */
export const createReactApp = (store, url , App) => {
  return (
    <Provider store={store}>
      <StaticRouter
        location={url}
        context={{}}
      >
        <App />
      </StaticRouter>
    </Provider>
  )
}
