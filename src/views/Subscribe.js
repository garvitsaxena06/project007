import React, { Component } from 'react'
import Outlines from "../components/Outlines";
import SidebarMobile from "../components/SidebarMobile";

class Subscribe extends Component {
    constructor() {
        super()
        this.state = {
            subscription: '',
            price: '',
        }
    }

    render() {
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
                                    <button>
                                        <a href="/subscription/payment">
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
                                    <button>
                                        <a href="/subscription/payment">
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
                                    <button>
                                        <a href="/subscription/payment">
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
                                    <button>
                                        <a href="/subscription/payment">
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