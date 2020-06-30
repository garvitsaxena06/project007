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
            <h6>{location.state.subscription}</h6>
        </div>
    )
}

export default Payment