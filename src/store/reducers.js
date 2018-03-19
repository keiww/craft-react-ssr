import { combineReducers } from 'redux'

// reducers
const githubInitialState = {
  data: {}
}
const github = (state = githubInitialState, action) => {
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

export default combineReducers({
  github
})
