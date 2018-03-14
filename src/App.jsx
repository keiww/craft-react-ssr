import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header'

import routes from './routes'

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Switch>
          {routes.map(route =>
            <Route path={route} exact={route.exact} component={route.component} />
          )}
        </Switch>
      </div>
    )
  }
}

export default App
