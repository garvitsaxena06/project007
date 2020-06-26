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
      document.getElementById("mySidebar").style.width = "0";
      this.setState({
          isOpen: false
      })
  }

  openNav = () => {
      document.getElementById("mySidebar").style.width = "100%";
      this.setState({
          isOpen: true
      })
  }

  render() {
    if (this.props.isMobile()) 
      return (
        <React.Fragment>
          <div>
            <div id="mySidebar" className="sidebarMobile">
            <button className="closebtn" onClick={this.closeNav}><i className="fas fa-arrow-left fa-xs"></i></button>
                <div className="content">
                    <a href="/"><i className="fas fa-bolt mr-2"></i>Trending</a>
                    <a className="mb-5" href="/"><i className="far fa-thumbs-up mr-2"></i>Recommended</a>
                    <a className="mt-5" style={{paddingTop: "50px"}} href="/">Technology</a>
                    <a href="/">Content</a>
                    <a href="/">Marketing</a>
                    <a href="/">Designing</a>
                </div>
            </div>
            <div>
                <div className="d-flex">
                    <div>
                      <div className="navbar-brand">
                        <a href="/" className="navbar-brand logo"><img src={logo} alt="IGLogo" height="50px"/></a>
                      </div>
                    </div>
                    <div className="ml-auto">
                        <button className="openbtn ml-2 mt-3" onClick={this.openNav}><i className="fas fa-bars fa-lg icons"></i></button>
                    </div>
                </div>
            </div>
        </div>
          

          <div>
            <div className="navbarMobile d-flex justify-content-around">
              <a href="/"><i className="fas fa-home fa-lg"></i></a>
              <a href="/"><i className="fas fa-star fa-lg"></i></a>
              <a href="/"><i className="fas fa-search fa-lg"></i></a>
              <a href="/"><i className="fas fa-cart-plus fa-lg"></i></a>
              <a href="/"><i className="fas fa-user fa-lg"></i></a>
            </div>
          </div>
        </React.Fragment>
      )
    return (
      <div>
          <nav className="navbar navbar-expand-md fixed-top">
            <div className="navbar-collapse collapse w-50 order-1 order-md-0 dual-collapse2">
                <div className="sidenav">
                    <div style={{borderBottom: "1px solid #1B1B1B", paddingBottom: "10px"}}>
                      <div className="navbar-brand">
                        <a href="/" className="navbar-brand logo"><img src={logo} alt="IGLogo"/></a>
                      </div>
                    </div>
                    <a className="mt-5" href="/"><i className="fas fa-cart-plus fa-lg" style={{paddingRight: "15px"}}></i>My Cart</a>
                    <a href="/"><i className="far fa-star fa-lg" style={{paddingRight: "15px"}}></i>My Watchlist</a>
                    <a className="mb-5" href="/"><i className="fas fa-user fa-lg" style={{paddingRight: "16px", paddingLeft: "2px"}}></i>My Account</a>
                    <button className="mt-5 mb-5 create-btn"><i className="fas fa-video"></i> Create</button>
                    <a className="mt-5" href="/"><i className="far fa-question-circle fa-lg" style={{paddingRight: "15px"}}></i>Help</a>
                </div>
            </div>

            <div className="mx-auto order-0">
              <form className="form-inline mx-auto">
                <input className="mainLoginInput form-control mr-sm-2" type="search" placeholder="&#61442; Search" aria-label="Search"/>
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