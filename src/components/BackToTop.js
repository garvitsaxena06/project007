import React from 'react';
import {withGetScreen} from 'react-getscreen'
import $ from 'jquery';

class BackToTop extends React.Component {
    componentDidMount() {
        $(document).ready(function() {
            var offset = 100;
            var duration = 500;
            $(window).scroll(function() {
                if ($(this).scrollTop() > offset) {
                    $('.back-to-top').fadeIn(duration);
                } else {
                    $('.back-to-top').fadeOut(duration);
                }
            });
     
            $('.back-to-top').click(function(event) {
                event.preventDefault();
                $('html, body').animate({scrollTop: 0}, duration);
                return false;
            })
        });
    }

    render(){
        if (this.props.isMobile()) {
            return (
                <React.Fragment>
                </React.Fragment>
            )
        }
          
        return (
            <a href="#up" className="back-to-top"><i className="fas fa-chevron-up"></i></a>
        )
    }
}

export default withGetScreen(BackToTop)


