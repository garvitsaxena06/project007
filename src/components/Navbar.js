import React, { Component } from 'react'
import logo from "../assets/img/logo.png"

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar justify-content-between">
                    <a href="/" className="navbar-brand"><img src={logo} alt="icon" width="150px"/></a>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav> 
            </div>
        )
    }
}

export default Navbar
