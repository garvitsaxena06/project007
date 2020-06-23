import React, { Component } from 'react'

class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }

    closeNav = () => {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        this.setState({
            isOpen: false
        })
    }

    openNav = () => {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        this.setState({
            isOpen: true
        })
    }
    render() {
        return (
            <div>
                <div id="mySidebar" className="sidebar">
                    <h5 className="categories">ALL CATEGORIES</h5>
                    <hr/>
                    <a href="/">Category 1</a>
                    <a href="/">Category 2</a>
                    <a href="/">Category 3</a>
                    <a href="/">Category 4</a>
                </div>
                <div>
                    <div className="d-flex flex-column">
                        <div className="mb-auto p-2">
                            <button className="openbtn ml-2 mt-3" onClick={this.state.isOpen ? this.closeNav : this.openNav}><i className="fas fa-bars fa-lg icons"></i></button>
                        </div>    
                        <div className="p-2 ml-1 mb-2"><a href="/"><i className="fas fa-thumbs-up fa-lg icons"></i></a></div>
                        <div className="p-2 ml-1"><a href="/"><i className="fas fa-shopping-cart fa-lg icons"></i></a></div>
                        <div className="p-2 ml-1 mt-2 mb-5"><a href="/"><i style={{paddingBottom: "100px"}} className="fas fa-video-slash fa-lg icons"></i></a></div>
                        <div className="p-2 ml-1 mt-5"><a href="/"><i className="far fa-question-circle fa-lg icons"></i></a></div>
                        <div className="p-2 ml-2 mb-5"><a href="/"><i style={{paddingLeft: "2px", paddingBottom: "50px"}} className="fas fa-info fa-lg icons"></i></a></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar
