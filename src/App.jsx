import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header'

import routes from './routes'

import './styles/main.css'

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Switch>
          {routes.map(route =>
            <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
          )}
        </Switch>
      </div>
    )
  }
}

export default App
