import React, { Component } from 'react'
import Outlines from "../components/Outlines";
import SidebarMobile from "../components/SidebarMobile";
import { Form, Row, Col } from "react-bootstrap";

class Query extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            validated: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        var uploadThumbnail = document.getElementById("thumbnail-upload")
        uploadThumbnail.onchange = function() {
            if(this.files[0].size > 40960){
               alert("File is too big! Upload a thumbnail with size less than 40 KB");
               this.value = "";
            };
        };

        var uploadVideo = document.getElementById("video-upload")
        uploadVideo.onchange = function() {
            if(this.files[0].size > 20971520){
               alert("File is too big! Upload a video with size less than 40 KB");
               this.value = "";
            };
        };
    }
      
    handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({
            validated: true
        })
    };

    render() {
        return (
            <div>
                <Outlines />
                <SidebarMobile />
                <hr className="section-start"/>
                <section id="create">
                    <Form className="createVideoSection mx-auto mt-5" noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-md-12 mx-auto">
                                <Form.Group as={Row} controlId="name">
                                    <Col sm="6" className="offset-sm-3">
                                        <Form.Control className="mainLoginInput" required type="text" placeholder="VIDEO TITLE" />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter video title
                                        </Form.Control.Feedback>
                                        <hr/>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="emailId">
                                    <Col sm="6" className="offset-sm-3">
                                        <Form.Control as="select" className="mainLoginInput">
                                            <option className="options">CATEGORY</option>
                                            <option className="options">Technology</option>
                                            <option className="options">Content</option>
                                            <option className="options">Marketing</option>
                                            <option className="options">Designing</option>
                                        </Form.Control>
                                        <Form.Control.Feedback type="invalid">
                                            Please select valid category
                                        </Form.Control.Feedback>
                                        <hr/>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="question">
                                    <Col sm="6" className="offset-sm-3">
                                        <Form.Control className="mainLoginInput" required type="textbox" placeholder="DESCRIPTION" />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter video description
                                        </Form.Control.Feedback>
                                        <hr/>
                                    </Col>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row mx-auto addVideo">
                            <div className="col-md-3 offset-md-3">
                                <label for="thumbnail-upload" class="custom-file-upload">
                                    <p>ADD THUMBNAIL</p>
                                </label>
                                <input id="thumbnail-upload" type="file" accept="image/*" required />
                            </div>
                            <div className="col-md-3">
                                <label for="video-upload" class="custom-file-upload">
                                    <p>ADD VIDEO</p>
                                </label>
                                <input id="video-upload" type="file" accept="video/*" required />
                            </div>
                        </div>
                        <div className="row mx-auto">
                            <div className="col-md-6 offset-md-3">
                                <button type="submit" className="mt-10 btn-block btn-red">UPLOAD</button>
                            </div>
                        </div>
                    </Form>
                </section>
            </div>
        )
    }
}

export default Query