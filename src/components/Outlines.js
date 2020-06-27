import React, { Component } from 'react';
import logo from "../assets/img/logo.png";
import {withGetScreen} from 'react-getscreen'

class Outlines extends Component {
  constructor() {
      super()
      this.state = {
          isOpen: false
      }
  }

  closeNav = () => {
      var element = document.getElementById("navbarMobile")
      element.classList.add("fixed-top")
      document.getElementById("mySearchBar").style.width = "0";
      this.setState({
          isOpen: false
      })
  }

  openNav = () => {
      var element = document.getElementById("navbarMobile")
      element.classList.remove("fixed-top")
      document.getElementById("mySearchBar").style.width = "100%";
      this.setState({
          isOpen: true
      })
  }
  render() {
    if (this.props.isMobile()) 
      return (
          <React.Fragment>
            <div id="mySearchBar" className="searchbarMobile">
                <button className="closebtn" onClick={this.closeNav}><i className="fas fa-arrow-left fa-xs"></i></button>
                <div className="d-flex">
                  <div className="ml-auto">
                    <form className="form-inline">
                      <input className="mainLoginInputMob form-control mr-sm-2" type="search" placeholder="&#61442; Search" aria-label="Search"/>
                    </form>
                  </div>
                </div>
            </div>
            <div className="navbarMobile d-flex justify-content-around">
              <a href="/"><i className="fas fa-home fa-lg"></i></a>
              <a href="/"><i className="fas fa-star fa-lg"></i></a>
              <button onClick={this.openNav}><i className="fas fa-search fa-lg"></i></button>
              <a href="/"><i className="fas fa-cart-plus fa-lg"></i></a>
              <a href="/profile"><i className="fas fa-user fa-lg"></i></a>
            </div>
          </React.Fragment>
      )
    return (
      <div>
          <nav className="navbar navbar-expand-md fixed-top">
            <div className="navbar-collapse collapse w-50 order-1 order-md-0 dual-collapse2">
                <div className="sidenav">
                    <div style={{borderBottom: "1px solid #1B1B1B"}}>
                      <div className="navbar-brand">
                        <a href="/" className="navbar-brand logo"><img src={logo} alt="IGLogo"/></a>
                      </div>
                    </div>
                    <a className="mt-5" href="/"><i className="fas fa-cart-plus fa-lg" style={{paddingRight: "15px"}}></i>My Cart</a>
                    <a href="/"><i className="far fa-star fa-lg" style={{paddingRight: "15px"}}></i>My Watchlist</a>
                    <a className="mb-5" href="/profile"><i className="fas fa-user fa-lg" style={{paddingRight: "16px", paddingLeft: "2px"}}></i>My Account</a>
                    <button className="mt-5 mb-5 create-btn"><i className="fas fa-video"></i> Create</button>
                    <a className="mt-5" href="/"><i className="far fa-question-circle fa-lg" style={{paddingRight: "15px"}}></i>Help</a>
                </div>
            </div>

            <div className="mx-auto order-0">
              <form className="form-inline mx-auto">
                <input className="mainLoginInput form-control mr-sm-2" type="search" placeholder="&#61442; Search" aria-label="Search" id="top" />
              </form>
            </div>

            <div className="navbar-collapse collapse w-50 order-3 dual-collapse2">
              <div className="sidenavRight">
                  <div style={{paddingTop: "50px"}}>
                    <a className="mt-5" href="/"><i className="fas fa-bolt fa-lg" style={{paddingRight: "18px"}}></i>Trending</a>
                    <a href="/"><i className="far fa-thumbs-up fa-lg" style={{paddingRight: "10px"}}></i>Recommended</a>
                    <a className="mt-5" href="/"><span className="ml-4" style={{paddingLeft: "6px"}}>Technology</span></a>
                    <a href="/"><span className="ml-4" style={{paddingLeft: "6px"}}>Content</span></a>
                    <a href="/"><span className="ml-4" style={{paddingLeft: "6px"}}>Marketing</span></a>
                    <a href="/"><span className="ml-4" style={{paddingLeft: "6px"}}>Designing</span></a>
                  </div>
              </div>
            </div>
          </nav>
      </div>
    );
  }
}

export default withGetScreen(Outlines);