import React, { Component } from 'react'
import SidebarMobile from "../components/SidebarMobile";
import Outlines from "../components/Outlines";
import profile from "../assets/img/profile.jpg";

class Profile extends Component {
    render() {
        return (
            <div>
                <Outlines />
                <SidebarMobile />
                <hr className="section-start"/>
                <section id="profile">
                    <div className="d-flex flex-column">
                        <div className="mx-auto">
                            <img className="profileImg" src={profile} alt="profile" />
                        </div>
                        <div className="mx-auto mt-5">
                            <p className="profileName">Sundar Pichai</p>
                        </div>
                        <div className="mx-auto">
                            <p className="profileDesig">CEO, Google</p>
                        </div>
                        <div className="mx-auto mt-5">
                            <p className="profileAbtHead">About</p>
                        </div>
                        <div className="mx-auto">
                            <p className="profileAbout text-center">Pichai Sundararajan, also known as Sundar Pichai, is an Indian-American 
                            business executive, the chief executive officer of Alphabet Inc. and its subsidiary Google LLC.</p>
                        </div>
                    </div>
                </section>
                <hr className="divider" />
            </div>
        )
    }
}

export default Profile
