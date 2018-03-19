import React from 'react'
import { connect } from 'react-redux'

import { fetchGithubData } from '../store/actions'

class Home extends React.Component {
  componentDidMount () {
    if (!this.hasData()) {
      this.props.fetchGithubData()
    }
  }
  hasData = () => {
    const { data } = this.props
    return !!Object.keys(data).length
  }
  render () {
    const { data } = this.props
    return (
      <main>
        <h1>Welcome to Home</h1>
        {this.hasData() &&
          <pre>
            {JSON.stringify(data, null, 2)}
          </pre>
        }
      </main>
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
