import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from './views/Home';

class App extends Component {
  render() {
    return (
      <div id="main">
        <Router>
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App