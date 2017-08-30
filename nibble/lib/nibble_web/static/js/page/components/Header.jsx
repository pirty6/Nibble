'use strict';
import React, { Component } from 'react';

class Header extends Component{
  render() {
    return (
      <div className = 'header'>
        <div className = 'container'>
          <div className = 'container-text'>
            <h1>{ this.props.title }</h1>
            <h2>{ this.props.subtitle }</h2>
          </div>
        </div>
        <div className = 'image-container'
          style = {{ backgroundImage: 'url('+ this.props.image.desktop +')' }}>
        </div>
      </div>
    );
  }
}

export default Header;
