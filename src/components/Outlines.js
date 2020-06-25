import React, { Component } from 'react';
import {withGetScreen} from 'react-getscreen'

class Outlines extends Component {
  render() {
    if (this.props.isMobile()) 
      return (
        <div>
          Mobile
        </div>
      )
    return (
      <div>
        Desktop
      </div>
    );
  }
}

export default withGetScreen(Outlines);