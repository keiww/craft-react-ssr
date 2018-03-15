import { createStore as _createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import API from './utils/api'

// actions
export const fetchGithubData = (user) => (dispatch) => {
  return API.fetchGithubData().then(data => {
    if (data) {
      dispatch({
        type: 'GET_GITHUB_DATA',
        data
      })
    }
  })
}

// reducers
const initialState = {
  data: {}
}
const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_GITHUB_DATA':
      return {
        ...state,
        data: action.data
      }
    default:
      return state
  }
}

// store
const middleware = [thunk]
const enhancers = compose(
  applyMiddleware(...middleware)
)
const createStore = (initialState = {}) => {
  const store = _createStore(reducers, initialState, enhancers)
  return store
}

export default createStore
