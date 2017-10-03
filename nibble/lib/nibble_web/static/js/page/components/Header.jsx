'use strict';
import React, { Component } from 'react';

class Header extends Component{
  render() {
    return (
      <div className = 'header'>
        <div className = 'container'>
          <div className = 'container-text'>
            <h3>{ this.props.title }</h3>
            <h4>{ this.props.subtitle }</h4>
          </div>
        </div>
        <div className = { this.props.image.desktop
          ? 'image-container'
          : null }
          style = { this.props.image.desktop
            ? { backgroundImage: 'url(' + this.props.image.desktop + ')' }
            : null }>
        </div>
      </div>
    );
  }
}

export default Header;
