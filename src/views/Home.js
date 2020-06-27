import React, { Component } from 'react'
import Outlines from "../components/Outlines";
import SidebarMobile from "../components/SidebarMobile";
import VideoCard from "../components/VideoCard";
import $ from "jquery"

class Home extends Component {
    componentDidMount() {
        $(".show-more").click(function () {
            if($(".text").hasClass("show-more-height")) {
                $(this).text("(Show Less)");
            } else {
                $(this).text("(Show More)");
            }
    
            $(".text").toggleClass("show-more-height");
        });
    }
   
    render() {
        return (
            <div>
                <Outlines />
                <SidebarMobile />
                <hr className="section-start"/>
                <section className="text-center" id="profile-description">
                    <div className="text show-more-height"> 
                        <h6 className="text-center">My Watchlist</h6>
                        <div className="d-flex flex-wrap">
                            <div className="mx-auto">
                                <VideoCard />
                            </div>
                            <div className="mx-auto">
                                <VideoCard />
                            </div>
                            <div className="mx-auto">
                                <VideoCard />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="mx-auto">
                            <div className="show-more">(Show More)</div>
                        </div>
                    </div>
                </section>
                <hr className="divider" />
                <section className="text-center" id="profile-description">
                    <div className="text show-more-height"> 
                        <h6 className="text-center">Recommended</h6>
                        <div className="d-flex flex-wrap">
                            <div className="mx-auto">
                                <VideoCard />
                            </div>
                            <div className="mx-auto">
                                <VideoCard />
                            </div>
                            <div className="mx-auto">
                                <VideoCard />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="mx-auto">
                            <div className="show-more">(Show More)</div>
                        </div>
                    </div>
                </section>
                <hr className="divider" />
            </div>
        )
    }
}

export default Home