import React, { Component } from 'react'
import background from "../assets/img/background.png";

class VideoCard extends Component {
    render() {
        return (
            <div>
                <div className="card mx-auto" style={{width: "18rem"}}>
                    <img className="card-img-top" src={background} alt="videoCover"></img>
                    <div className="card-body">
                        <div className="d-flex flex-wrap">
                            <div>
                                <h5 className="card-title">Title of the video</h5>
                            </div>
                            <div className="ml-auto">
                                <h5 className="card-title font-weight-bolder">4:30</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoCard