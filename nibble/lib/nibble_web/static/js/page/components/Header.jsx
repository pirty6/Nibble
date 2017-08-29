'use strict';
import React, { Component } from 'react';

class Header extends Component{
  render() {
    return (
      <div className = 'header'>
        <div className = 'container'>
          <h1>{ this.props.title }</h1>
          <h2>{ this.props.subtitle }</h2>
          <div className = 'image-container'>
            { this.props.image.desktop }
            <img className = 'image' src = '/nibble/lib/nibble_web/assets/images/book-1200.jpg'/>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
