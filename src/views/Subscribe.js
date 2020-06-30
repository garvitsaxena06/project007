import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import Outlines from "../components/Outlines";
import SidebarMobile from "../components/SidebarMobile";

class Subscribe extends Component {
    constructor() {
        super()
        this.state = {
            subscription: '',
            price: '',
            redirect: false        }
    }

    handleClick1 = () => {
        console.log("Clicked 1!")
        this.setState({
            subscription: '30-Days',
            price: '40',
            redirect: true
        })
    }

    handleClick2 = () => {
        console.log("Clicked 2!")
        this.setState({
            subscription: '90-Days',
            price: '250',
            redirect: true
        })
    }

    handleClick3 = () => {
        console.log("Clicked 3!")
        this.setState({
            subscription: 'Monthly',
            price: '120',
            redirect: true
        })
    }

    handleClick4 = () => {
        console.log("Clicked 4!")
        this.setState({
            subscription: 'Yearly',
            price: '700',
            redirect: true
        })
    }

    render() {
        if (this.state.redirect) {
            return (
                <React.Fragment>
                    <Redirect to={{
                        pathname: "/subscribe/payment",
                        state: {subscription: this.state.subscription, price: this.state.price}
                    }} />
                </React.Fragment>
            )
        }

        else
        return (
            <div>
                <Outlines />
                <SidebarMobile />
                <hr className="section-start"/>

                <section id="subscribe-options">
                    <div className="d-flex">
                        <div className="card subscribe-card mx-auto">
                            <div className="card-body">

                                <div className="d-flex mb-2">
                                    <div className="pr-4">
                                        <a href="/"><i className="fas fa-chevron-left"></i></a>
                                    </div>
                                    <div className="">
                                        Pre-Paid
                                    </div>
                                    <div className="ml-auto">
                                        <a href="/"><i className="fas fa-times"></i></a>
                                    </div>
                                </div>

                                <ul className="list-group list-group-flush">
                                    <button onClick={this.handleClick1}>
                                        <a href="/subscribe/payment">
                                            <li className="list-group-item list-group-item-action">
                                                <div className="d-flex">
                                                    <div className="mr-auto p-2">
                                                        30-Days
                                                    </div>
                                                    <div className="pt-2 pb-2 pl-4 pr-4">
                                                        <span className="font-weight-bold">Rs. 40</span>
                                                    </div>
                                                    <div className="pt-2 pb-2 pl-4 pr-0">
                                                        <span className="font-weight-bold"><i className="fas fa-chevron-right"></i></span>
                                                    </div>
                                                </div>
                                            </li>
                                        </a>
                                    </button>
                                    <button onClick={this.handleClick2}>
                                        <a href="/subscribe/payment">
                                            <li className="list-group-item list-group-item-action">
                                                <div className="d-flex">
                                                    <div className="mr-auto p-2">
                                                        90-Days
                                                    </div>
                                                    <div className="pt-2 pb-2 pl-4 pr-4">
                                                        <span className="font-weight-bold">Rs. 250</span>
                                                    </div>
                                                    <div className="pt-2 pb-2 pl-4 pr-0">
                                                        <span className="font-weight-bold"><i className="fas fa-chevron-right"></i></span>
                                                    </div>
                                                </div>
                                            </li>
                                        </a>
                                    </button>
                                </ul>

                                <div className="d-flex mb-2">
                                    <div className="pt-4 pl-4" style={{marginLeft: "10px"}}>
                                        Subscription
                                    </div>
                                </div>

                                <ul className="list-group list-group-flush">
                                    <button onClick={this.handleClick3}>
                                        <a href="/subscribe/payment">
                                            <li className="list-group-item list-group-item-action">
                                                <div className="d-flex">
                                                    <div className="mr-auto p-2">
                                                        Monthly
                                                    </div>
                                                    <div className="pt-2 pb-2 pl-4 pr-4">
                                                        <span className="font-weight-bold">Rs. 120</span>
                                                    </div>
                                                    <div className="pt-2 pb-2 pl-4 pr-0">
                                                        <span className="font-weight-bold"><i className="fas fa-chevron-right"></i></span>
                                                    </div>
                                                </div>
                                            </li>
                                        </a>
                                    </button>
                                    <button onClick={this.handleClick4}>
                                        <a href="/subscribe/payment">
                                            <li className="list-group-item list-group-item-action">
                                                <div className="d-flex">
                                                    <div className="mr-auto p-2">
                                                        Yearly
                                                    </div>
                                                    <div className="pt-2 pb-2 pl-4 pr-4">
                                                        <span className="font-weight-bold">Rs. 700</span>
                                                    </div>
                                                    <div className="pt-2 pb-2 pl-4 pr-0">
                                                        <span className="font-weight-bold"><i className="fas fa-chevron-right"></i></span>
                                                    </div>
                                                </div>
                                            </li>
                                        </a>
                                    </button>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Subscribe