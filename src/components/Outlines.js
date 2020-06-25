import React, { Component } from 'react';
import {withGetScreen} from 'react-getscreen'

class Outlines extends Component {
  render() {
    if (this.props.isMobile()) 
      return (
        <div>
          Mobile
        </div>
      )
    return (
      <div>
          <nav className="navbar navbar-expand-md">
            <div className="navbar-collapse collapse w-50 order-1 order-md-0 dual-collapse2">
                <div className="sidenav">
                    <span>Logo</span>
                    <a className="mt-5" href="/"><i className="fas fa-shopping-cart fa-lg" style={{paddingRight: "15px"}}></i>My Cart</a>
                    <a href="/"><i className="fas fa-star fa-lg" style={{paddingRight: "15px"}}></i>My Watchlist</a>
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
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
               
            </div>
          </nav>
      </div>
    );
  }
}

export default withGetScreen(Outlines);