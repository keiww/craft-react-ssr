function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export default {
  fetchGithubData (user) {
    return fetch('https://api.github.com')
      .then(checkStatus)
      .then(res => res.json())
      .catch(err => {
        console.log(err)
      })
  }
}
