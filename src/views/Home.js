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
                <section id="profile-description">
                    <div className="text show-more-height">
                        <h6 className="text-center">My Watchlist</h6>
                        <div className="row mx-auto">
                            <div className="col-md-4">
                                <VideoCard />
                            </div>
                            <div className="col-md-4">
                                <VideoCard />
                            </div>
                            <div className="col-md-4">
                                <VideoCard />
                            </div>
                        </div>
                        <div className="row mx-auto">
                            <div className="col-md-4">
                                <VideoCard />
                            </div>
                            <div className="col-md-4">
                                <VideoCard />
                            </div>
                            <div className="col-md-4">
                                <VideoCard />
                            </div>
                        </div>
                    </div>
                    <div className="show-more">(Show More)</div>
                </section>
            </div>
        )
    }
}

export default Home