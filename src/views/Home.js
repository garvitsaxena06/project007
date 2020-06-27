import React, { Component } from 'react'
import Outlines from "../components/Outlines";
import SidebarMobile from "../components/SidebarMobile";
import VideoCard from "../components/VideoCard";
import $ from "jquery"

class Home extends Component {
    componentDidMount() {
        $(".show-more").click(function () {
            if($(".text").hasClass("show-more-height")) {
                $(this).removeClass("fas fa-chevron-down");
                $(this).addClass("fas fa-chevron-up");
            } else {
                $(this).removeClass("fas fa-chevron-up");
                $(this).addClass("fas fa-chevron-down");
            }
    
            $(".text").toggleClass("show-more-height");
        });

        // var element = document.getElementById("show")
        // element.click(() => {
        //     if($(".text").hasClass("show-more-height")) {
        //         let icon = document.getElementById("showIcon")
        //         icon.classList.remove("fas fa-chevron-down")
        //         icon.classList.add("fas fa-chevron-up")
        //     }
        //     else {
        //         let icon = document.getElementById("showIcon")
        //         icon.classList.remove("fas fa-chevron-up")
        //         icon.classList.add("fas fa-chevron-down ")
        //     }
        //     $(".text").toggleClass("show-more-height");
        // })
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
                            <div className="show-more fas fa-chevron-down" id="show"></div>
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
                            <div className="show-more fas fa-chevron-down" id="show"></div>
                        </div>
                    </div>
                </section>
                <hr className="divider" />
            </div>
        )
    }
}

export default Home