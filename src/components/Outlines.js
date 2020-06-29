import React, { Component } from 'react';
import logo from "../assets/img/logo.png";
import {withGetScreen} from 'react-getscreen'

class Outlines extends Component {
  constructor() {
      super()
      this.state = {
          isOpen: false,
          isOpenT: false
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
  
  // ---------------------------------------------------------------------------------- //

  closeNavT = () => {
      document.getElementById("sidebarTablet").style.width = "0";
      this.setState({
          isOpenT: false
      })
  }

  openNavT = () => {
      document.getElementById("sidebarTablet").style.width = "300px";
      this.setState({
          isOpenT: true
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

    // ---------------------------------------------------------------------------------- //

    if (this.props.isTablet()) {
      return (
          <React.Fragment>
            <div id="sidebarTablet" className="sidebarTablet">
                <button className="closebtn" onClick={this.closeNavT}><i className="fas fa-arrow-left fa-xs"></i></button>
                <div className="content mx-auto">
                    <p>For You</p>
                    <a href="/"><i className="fas fa-bolt mr-2"></i>Trending</a>
                    <a href="/"><i className="far fa-thumbs-up mr-2"></i>Recommended</a>
                    <a className="mb-5" href="/"><i class="far fa-bookmark mr-2"></i>Bookmarked</a>
                    <p className="mt-5">Categories</p>
                    <a href="/">Technology</a>
                    <a href="/">Content</a>
                    <a href="/">Marketing</a>
                    <a className="mb-5" href="/">Designing</a>
                    <div className="d-flex flex-column mt-5" style={{paddingTop: "200px"}}>
                        <div className="mx-auto titleTablet">
                            <p>InstaGrat</p>
                        </div>
                        <div className="mx-auto tabletSocial">
                            <p><i className="fab fa-linkedin-in fa-lg mr-3"></i><i className="fab fa-facebook-f fa-lg"></i></p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="d-flex flex-column sideSectionT">
                  <div style={{borderBottom: "1px solid #1B1B1B", paddingBottom: "20px", paddingLeft: "10px"}}>
                      <a href="/" className="navbar-brand logo"><img src={logo} alt="IGLogo"/></a>
                  </div>
                  <div className="items mx-auto">
                    <button className="mt-4 mb-5" style={{paddingLeft: "6px"}} onClick={this.state.isOpenT ? this.closeNavT : this.openNavT}><i className="fas fa-bars fa-lg"></i></button>
                    <a href="/" className="mt-5" style={{paddingLeft: "6px"}}><i className="fas fa-bell fa-lg"></i></a>
                    <a href="/" className="mt-4" style={{paddingLeft: "7px"}}><i className="far fa-bookmark fa-lg"></i></a>
                    <a href="/create" className="mt-4 mb-5 create"><i className="fas fa-video fa-lg"></i></a>
                    <a href="/" className="mt-5" style={{paddingTop: "200px", paddingLeft: "7px"}}><i className="far fa-question-circle fa-lg"></i></a>
                  </div>
                </div>
              </div>
            <nav className="navbar fixed-top">
              <div className="mx-auto order-0">
                <form className="form-inline mx-auto">
                  <input className="mainLoginInput form-control mr-sm-2" type="search" placeholder="&#61442; Search" aria-label="Search" id="top" />
                </form>
              </div>

              <div className="navbar-collapse collapse w-50 order-3 dual-collapse2">
              </div>
            </nav>
          </React.Fragment>
      )
    }

    // ---------------------------------------------------------------------------------- //

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
                    <button href="/create" className="mt-5 create-btn red-btn"><a href="/create"><i className="fas fa-video"></i> Create</a></button>
                    <button href="/create" className="mt-3 mb-5 create-btn"><a href="/create">Subscribe</a></button>
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