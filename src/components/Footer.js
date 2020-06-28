import React, { Component } from 'react'

class Footer extends Component {
    render() {
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
                                <p><i class="fab fa-linkedin-in fa-lg mr-3"></i><i class="fab fa-facebook-f fa-lg"></i></p>
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
                            <button className="create-btn">SUBSCRIBE</button>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Footer