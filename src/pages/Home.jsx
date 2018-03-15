import React from 'react'
import { connect } from 'react-redux'

import { fetchGithubData } from '../store/actions'

class Home extends React.Component {
  componentDidMount () {
    this.props.fetchGithubData()
  }
  render () {
    return (
      <div>
        <h1>Welcome to Home</h1>
        <pre>
          {JSON.stringify(this.props.data, null, 2)}
        </pre>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.github.data
})

const mapDispatchToProps = {
  fetchGithubData
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
