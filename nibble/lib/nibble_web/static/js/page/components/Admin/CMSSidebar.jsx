'use strict';
import React, { Component } from 'react';

class CMSSidebar extends Component{
  render() {
    const link = this.props.links.map((element, index) => (
        <div className='link' key={index}
          style={element.title === 'Libros'
          ? {backgroundImage: 'linear-gradient(to left, #a05c7b, #867284)'}
          : null }>
          <img src={element.icon} alt={element.title + ' icon'}/>
          <span
            style={element.title === 'Libros'
            ? { color: '#fff'}
            : null }>
            { element.title }
          </span>
        </div>
    ));

    return (
      <div className='cms-sidebar'>
        <div className='container'>
          { link }
        </div>
      </div>
    );
  }
}

export default CMSSidebar;
