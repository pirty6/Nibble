'use strict';
import React, { Component } from 'react';

class Header extends Component{
  render() {
    return (
      <div className = 'header'>
        <div className = 'container'>
          <div className = 'container-text'>
            <h2>{ this.props.title }</h2>
            <h6>{ this.props.subtitle }</h6>
          </div>
        </div>
        {/* TOFIX:  */}
        {/* <div className = { this.props.image.desktop
          ? 'image-container'
          : null }
          style = { this.props.image.desktop
            ? { backgroundImage: 'url(' + this.props.image.desktop + ')' }
            : null }>
        </div> */}
      </div>
    );
  }
}

export default Header;
