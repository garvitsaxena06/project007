import React, { Component } from 'react'
import Outlines from "../../components/Outlines";
import SidebarMobile from "../../components/SidebarMobile";
import VideoCard from "../../components/VideoCard";
import $ from "jquery"

class Designing extends Component {
    componentDidMount() {
        $(".show-more1").click(function () {
            if($(".text1").hasClass("show-more-height")) {
                $(this).removeClass("fas fa-chevron-down");
                $(this).addClass("fas fa-chevron-up");
            } else {
                $(this).removeClass("fas fa-chevron-up");
                $(this).addClass("fas fa-chevron-down");
            }
    
            $(".text1").toggleClass("show-more-height");
        });
    }
    render() {
        return (
            <div>
                <Outlines />
                <SidebarMobile />
                <hr className="section-start"/>
                
                <section className="text-center" id="profile-description">
                    <div className="text1 show-more-height"> 
                        <h6 className="text-center">Designing</h6>
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
                            <div className="show-more1 fas fa-chevron-down"></div>
                        </div>
                    </div>
                </section>
                <hr className="divider" />
            </div>
        )
    }
}

export default Designing