import React from 'react';
import {withGetScreen} from 'react-getscreen'
import $ from 'jquery';

class CreateBtn extends React.Component {
    componentDidMount(){
        $(document).ready(function() {
            var offset = 0;
            var duration = 500;
            if ($(this).scrollTop() >= offset) {
                $('.createBtn').fadeIn(duration);
            } else {
                $('.createBtn').fadeOut(duration);
            }
        });
    }
    render(){
        if (this.props.isMobile()) {
            return (
                <a href="/" className="createBtn"><i className="fas fa-video fa-sm"></i></a>
            )
        }
          
        return (
            <React.Fragment>
            </React.Fragment>
        )
    }
}

export default withGetScreen(CreateBtn)


