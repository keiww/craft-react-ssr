import API from '../utils/api'

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
