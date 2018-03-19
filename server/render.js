import { routes, createStore, App } from './assets'
import { matchRoute, createReactApp, view } from './helpers'


/**
 * render react app to html and send to client
 * @param  {Object} ctx
 * @param  {Function} next
 */
const render = async (ctx, next) => {
  // check if any route is matched
  const { match, matchedRoute } = matchRoute(routes, ctx.path)

  // pass to next if can't match any route
  if (!match) {
    return next()
  }

  // create a temporary redux store
  const store = createStore()
  // call component's fetchData function if exists
  const { fetchData } = matchedRoute.component
  if (fetchData) {
    // responsed data will be stored in store's state
    console.log('[detected fetchData]')
    await fetchData(store.dispatch, match.parmas)
  }
  // create react app instant
  const app = createReactApp(store, ctx.originalUrl, App)
  // get state from store
  const state = store.getState()
  // send rendered html
  ctx.body = view({ app, state })
}

export default render
