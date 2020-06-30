import React, { Component } from 'react'
import logo from "../assets/img/logo.png";
import {withGetScreen} from 'react-getscreen'

class SidebarMobile extends Component {
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
                <div id="navbarMobile" className="fixed-top">
                    <div id="mySidebar" className="sidebarMobile">
                        <button className="closebtn" onClick={this.closeNav}><i className="fas fa-arrow-left fa-xs"></i></button>
                        <div className="content">
                            <a href="/trendin   dsmng"><i className="fas fa-bolt mr-2"></i>Trending</a>
                            <a className="mb-5" href="/recommended"><i className="far fa-thumbs-up mr-2"></i>Recommended</a>
                            <a className="mt-5" style={{paddingTop: "50px"}} href="/categories/technology">Technology</a>
                            <a href="/categories/content">Content</a>
                            <a href="/categories/marketing">Marketing</a>
                            <a href="/categories/designing">Designing</a>
                            <div className="mt-5 mobileSocial" style={{paddingTop: "50px"}}>
                                <div className="d-flex">
                                    <div className="mx-auto">
                                        <div className="d-flex">
                                            <a href="/" className="p-2 ml-3"><i className="fab fa-linkedin-in fa-lg"></i></a>
                                            <a href="/" className="p-2"><i className="fab fa-facebook-f fa-lg"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="d-flex navbarMobileUp">
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
            </React.Fragment>
        )
        return (
            <React.Fragment>
            </React.Fragment>
        )
    }
}

export default withGetScreen(SidebarMobile)