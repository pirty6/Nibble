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
            <picture className = 'image'>
              <source media = '(max-width:1366px)' srcSet={hero.image.desktop}/>
              <source media = '(min-width:1366px)' srcSet={hero.image.hd}/>
              <img src = { hero.image.desktop }/>
            </picture>
          </div>
          <div className = 'right-column'>
            <h1>{ hero.title }</h1>
            <h3 className = 'subtitle'>{ hero.subtitle }</h3>
            <img src = { hero.logos.desktop }/>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
