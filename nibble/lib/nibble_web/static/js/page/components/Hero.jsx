'use strict';
import React, { Component } from 'react';

class Hero extends Component {
  render() {
    const{
      hero,
    } = this.props;

    return (
      <div className = 'hero'>
        <div className = 'container'>
          <div className = 'left-column'>
            {/* TODO ASSETS */}
            <img src = { hero.image.desktop }/>
          </div>
          <div className = 'right-column'>
            <h1>{ hero.title }</h1>
            <h2 className = 'subtitle'>{ hero.subtitle }</h2>
            <div className = 'rectangle'></div>
            <img src = { hero.logos.desktop }/>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
