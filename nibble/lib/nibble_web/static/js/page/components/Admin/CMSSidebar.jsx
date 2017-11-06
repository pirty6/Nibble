'use strict';
import React, { Component } from 'react';

class CMSSidebar extends Component{
  render() {
    const link = this.props.links.map((element, index) => (
        <div className='link' key={index}
          style={this.props.location.pathname.includes(element.link)
          ? {backgroundColor: '#425967'}
          : null } onClick={ () => { window.location = `/cms${element.link}`}}>
          <img src={this.props.location.pathname.includes(element.link)
            ? element.iconActive : element.icon } alt={element.title + ' icon'}/>
          <span
            style={this.props.location.pathname.includes(element.link)
            ? { color: '#fff'}
            : null }>
            { element.title }
          </span>
        </div>
    ));

    return (
      <div className='cms-sidebar'>
        <div className='container'>
          <div className='logo'>
            <h6>Nibble</h6>
          </div>
          { link }
        </div>
      </div>
    );
  }
}

export default CMSSidebar;
