import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import {withGetScreen} from 'react-getscreen'

import Home from './views/Home';
import Profile from "./views/Profile";
import AddVideo from "./views/AddVideo";
import Subscribe from "./views/Subscribe";
import Trending from "./views/Trending";
import Recommended from "./views/Recommended";
import Bookmarked from "./views/Bookmarked";

import Technology from "./views/Categories/Technology";
import Marketing from "./views/Categories/Marketing";
import Designing from "./views/Categories/Designing";
import Content from "./views/Categories/Content";

import Preloader from "./components/Preloader";
import BackToTop from "./components/BackToTop";
import CreateBtn from "./components/CreateBtn";
import Payment from "./components/Payment";


class App extends Component {
  render() {
    if (this.props.isMobile())
      return (
        <div>
          <Router>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/profile' component={Profile} />
              <Route path='/create' component={AddVideo} />
              <Route path='/trending' component={Trending} />
              <Route path='/recommended' component={Recommended} />
              <Route path='/bookmarked' component={Bookmarked} />
              <Route path='/categories/technology' component={Technology} />
              <Route path='/categories/marketing' component={Marketing} />
              <Route path='/categories/designing' component={Designing} />
              <Route path='/categories/content' component={Content} />
              <Route path='/subscribe' exact component={Subscribe} />
              <Route path='/subscribe/payment' component={Payment} />
            </Switch>
          </Router>
          <Preloader />
          <BackToTop />
          <CreateBtn />
        </div>
      )

    if (this.props.isTablet()) {
      return (
        <div id="mainTablet">
          <Router>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/profile' component={Profile} />
              <Route path='/create' component={AddVideo} />
              <Route path='/trending' component={Trending} />
              <Route path='/recommended' component={Recommended} />
              <Route path='/bookmarked' component={Bookmarked} />
              <Route path='/categories/technology' component={Technology} />
              <Route path='/categories/marketing' component={Marketing} />
              <Route path='/categories/designing' component={Designing} />
              <Route path='/categories/content' component={Content} />
              <Route path='/subscribe' exact component={Subscribe} />
              <Route path='/subscribe/payment' component={Payment} />
            </Switch>
          </Router>
          <Preloader />
          <BackToTop />
          <CreateBtn />
        </div>
      )
    }  
      
    return (
      <div id="main">
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/profile' component={Profile} />
            <Route path='/create' component={AddVideo} />
            <Route path='/trending' component={Trending} />
            <Route path='/recommended' component={Recommended} />
            <Route path='/bookmarked' component={Bookmarked} />
            <Route path='/categories/technology' component={Technology} />
            <Route path='/categories/marketing' component={Marketing} />
            <Route path='/categories/designing' component={Designing} />
            <Route path='/categories/content' component={Content} />
            <Route path='/subscribe' exact component={Subscribe} />
            <Route path='/subscribe/payment' component={Payment} />
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