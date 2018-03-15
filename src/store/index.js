import { createStore as _createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

// middleware
const middleware = [thunk]
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose
const enhancers = composeEnhancers(
  applyMiddleware(...middleware)
)

const createStore = (initialState = {}) => {
  const store = _createStore(reducers, initialState, enhancers)
  return store
}

export default createStore
