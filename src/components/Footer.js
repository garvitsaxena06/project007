import React, { Component } from 'react'
import { withGetScreen } from "react-getscreen";

class Footer extends Component {
    render() {
        if (this.props.isMobile()) {
            return (
                <React.Fragment>
                    <div className="d-flex flex-column">
                        <div className="mx-auto titleMobile">
                            <p>InstaGrat</p>
                        </div>
                        <div className="mx-auto tabletSocial">
                            <div className="d-flex">
                              <a href="/" className="p-2 ml-1"><i className="fab fa-linkedin-in fa-lg"></i></a>
                              <a href="/" className="p-2"><i className="fab fa-facebook-f fa-lg"></i></a>
                            </div>
                        </div>
                    </div>
                    <section className="footerContent">
                        <div className="d-flex flex-wrap">
                            <div className="p-4 mx-auto">
                                <p className="title">Technology</p>
                                <p>Content</p>
                                <p>Technology</p>
                                <p>Content</p>
                            </div>
                            <div className="p-4 mx-auto">
                                <p className="title">Technology</p>
                                <p>Content</p>
                                <p>Technology</p>
                                <p>Content</p>
                            </div>
                            <div className="p-4 mx-auto">
                                <p className="title">Technology</p>
                                <p>Content</p>
                                <p>Technology</p>
                                <p>Content</p>
                            </div>
                            <div className="p-4 mx-auto">
                                <p className="title">Technology</p>
                                <p>Content</p>
                                <p>Technology</p>
                                <p>Content</p>
                            </div>
                        </div>
                    </section>
                    <section className="copyrightsMobile">
                        <div className="d-flex flex-wrap">
                            <div className="p-1 mx-auto">
                                <p>Privacy Policy</p>
                            </div>
                            <div className="p-1 mx-auto">
                                <p>About Us</p>
                            </div>
                            <div className="p-1 mx-auto">
                                <p>Help</p>
                            </div>
                            <div className="p-1 mx-auto">
                                <p><i className="far fa-copyright"></i><text className="font-weight-light"> 2020</text><text className="font-weight-bold"> IDS</text></p>
                            </div>
                        </div>
                    </section>
                </React.Fragment>
            )
        }

        if (this.props.isTablet()) {
            return (
                <React.Fragment>
                    <div className="red-section">
                        <div className="social-icons">
                            <div className="row mx-auto text-center">
                                <div className="col-md-6 offset-md-3">
                                    <p>We are here for YOU,<br/> say hi.</p>
                                </div>
                            </div><br/>
                            <div className="row mx-auto text-center">
                                <div className="col-md-6 offset-md-3">
                                    <p><a href="/"><i className="fab fa-linkedin-in fa-lg mr-3"></i></a><a href="/"><i className="fab fa-facebook-f fa-lg"></i></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="footerContent">
                        <div className="d-flex flex-wrap">
                            <div className="p-4 mx-auto">
                                <p className="title">Technology</p>
                                <p>Content</p>
                                <p>Technology</p>
                                <p>Content</p>
                            </div>
                            <div className="p-4 mx-auto">
                                <p className="title">Technology</p>
                                <p>Content</p>
                                <p>Technology</p>
                                <p>Content</p>
                            </div>
                            <div className="p-4 mx-auto">
                                <p className="title">Technology</p>
                                <p>Content</p>
                                <p>Technology</p>
                                <p>Content</p>
                            </div>
                            <div className="p-4 mx-auto">
                                <button className="mt-5">SUBSCRIBE</button>
                            </div>
                        </div>
                    </section>
                    <section className="copyrights">
                        <div className="d-flex flex-wrap">
                            <div className="p-1 mx-auto">
                                <p>Privacy Policy</p>
                            </div>
                            <div className="p-1 mx-auto">
                                <p>About Us</p>
                            </div>
                            <div className="p-1 mx-auto">
                                <p>Help</p>
                            </div>
                            <div className="p-1 mx-auto">
                                <p><i className="far fa-copyright"></i><text className="font-weight-light"> 2020</text><text className="font-weight-bold"> IDS</text></p>
                            </div>
                        </div>
                    </section>
                </React.Fragment>
            )
        }

        return (
            <React.Fragment>
                <div className="red-section">
                    <div className="social-icons">
                        <div className="row mx-auto text-center">
                            <div className="col-md-6 offset-md-3">
                                <p>We are here for YOU,<br/> say hi.</p>
                            </div>
                        </div><br/>
                        <div className="row mx-auto text-center">
                            <div className="col-md-6 offset-md-3">
                            <p><a href="/"><i className="fab fa-linkedin-in fa-lg mr-3"></i></a><a href="/"><i className="fab fa-facebook-f fa-lg"></i></a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="footerContent">
                    <div className="d-flex flex-wrap">
                        <div className="p-4 mx-auto">
                            <p className="title">Technology</p>
                            <p>Content</p>
                            <p>Technology</p>
                            <p>Content</p>
                        </div>
                        <div className="p-4 mx-auto">
                            <p className="title">Technology</p>
                            <p>Content</p>
                            <p>Technology</p>
                            <p>Content</p>
                        </div>
                        <div className="p-4 mx-auto">
                            <p className="title">Technology</p>
                            <p>Content</p>
                            <p>Technology</p>
                            <p>Content</p>
                        </div>
                        <div className="p-4 mx-auto">
                            <p className="title">Technology</p>
                            <p>Content</p>
                            <p>Technology</p>
                            <p>Content</p>
                        </div>
                        <div className="p-4 mx-auto">
                            <button className="mt-5">SUBSCRIBE</button>
                        </div>
                    </div>
                </section>
                <section className="copyrights">
                    <div className="d-flex flex-wrap">
                        <div className="p-1 mx-auto">
                            <p>Privacy Policy</p>
                        </div>
                        <div className="p-1 mx-auto">
                            <p>About Us</p>
                        </div>
                        <div className="p-1 mx-auto">
                            <p>Help</p>
                        </div>
                        <div className="p-1 mx-auto">
                            <p><i className="far fa-copyright"></i><text className="font-weight-light"> 2020</text><text className="font-weight-bold"> IDS</text></p>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default withGetScreen(Footer)