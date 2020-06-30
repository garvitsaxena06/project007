import React from 'react'
import Outlines from "../components/Outlines";
import SidebarMobile from "../components/SidebarMobile";

function Payment({location}) {
    console.log(location)
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
                                    <a href="/subscribe"><i className="fas fa-chevron-left"></i></a>
                                </div>
                                <div className="">
                                    Complete Your Purchase
                                </div>
                                <div className="ml-auto font-weight-light" style={{fontSize: "12px", letterSpacing: "2px"}}>
                                    <p>2/2</p>
                                </div>
                                <div className="ml-auto">
                                    <a href="/"><i className="fas fa-times"></i></a>
                                </div>
                            </div>

                            <ul className="list-group list-group-flush payment">
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div className="mr-auto p-2">
                                            <div className="d-flex flex-column">
                                                <div className="p-1">
                                                    Validity
                                                </div>
                                                <div className="p-1 font-weight-bold" style={{fontSize: "10px", letterSpacing: "2px"}}>
                                                    12/08/2020
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-2">
                                            <div className="d-flex flex-column">
                                                <div className="p-1">
                                                    {location.state.subscription}
                                                </div>
                                                <div className="p-1 font-weight-bold" style={{fontSize: "10px", letterSpacing: "1px"}}>
                                                    {location.state.plan}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <div className="d-flex mb-2">
                                <div className="pt-5 pl-4 font-weight-normal" style={{marginLeft: "10px"}}>
                                    Payable Amount
                                </div>
                                <div className="pt-5 pl-4" style={{marginLeft: "10px", fontSize: "12px", marginTop: "2px"}}>
                                    Rs. {location.state.price}
                                </div>
                                <div className="pt-4 pl-4 ml-auto" style={{marginLeft: "10px", marginTop: "12px"}}>
                                    <button className="buy-btn"><a href="/">Buy</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Payment