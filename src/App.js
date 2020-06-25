import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import {withGetScreen} from 'react-getscreen'
import Home from './views/Home';
import Preloader from "./components/Preloader";
import BackToTop from "./components/BackToTop";

class App extends Component {
  render() {
    if (this.props.isMobile())
      return (
        <div>
          <Router>
            <Switch>
              <Route path='/' component={Home} />
            </Switch>
          </Router>
          <Preloader />
          <BackToTop />
        </div>
      )
    return (
      <div id="main">
        <Router>
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </Router>
        <Preloader />
        <BackToTop />
      </div>
    )
  }
}

export default withGetScreen(App)