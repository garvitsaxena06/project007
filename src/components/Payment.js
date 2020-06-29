import React, { Component } from 'react'
import Outlines from "../components/Outlines";
import SidebarMobile from "../components/SidebarMobile";

class Payment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        }
    }
    render() {
        return (
            <div>
                <Outlines />
                <SidebarMobile />
                <hr className="section-start"/>

                <h3>Hello World {this.props.subscription}</h3>
            </div>
        )
    }
}

export default Payment