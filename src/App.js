import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import {withGetScreen} from 'react-getscreen'
import Home from './views/Home';
import Profile from "./views/Profile";
import Preloader from "./components/Preloader";
import BackToTop from "./components/BackToTop";
import CreateBtn from "./components/CreateBtn";

class App extends Component {
  render() {
    if (this.props.isMobile())
      return (
        <div>
          <Router>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/profile' component={Profile} />
            </Switch>
          </Router>
          <Preloader />
          <BackToTop />
          <CreateBtn />
        </div>
      )
    return (
      <div id="main">
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/profile' component={Profile} />
          </Switch>
        </Router>
        <Preloader />
        <BackToTop />
        <CreateBtn />
      </div>
    )
  }
}

export default withGetScreen(App)