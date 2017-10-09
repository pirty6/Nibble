'use strict';
import React, { Component } from 'react';

class Hero extends Component {
  render() {
    const{
      hero,
      heroEnglish,
      language,
    } = this.props;

    let heroInformation = hero;
    if(language){
      if(language === 'es'){
        heroInformation = hero;
      } else if( language === 'en'){
        heroInformation = heroEnglish;
      }
    }

    return (
      <div className = 'hero'>
        <div className = 'container'>
          <div className = 'left-column'>
            {/* TODO ASSETS */}
            <picture className = 'image'>
              <source media = '(max-width:1366px)' srcSet={heroInformation.image.desktop}/>
              <source media = '(min-width:1366px)' srcSet={heroInformation.image.hd}/>
              <img src = { heroInformation.image.desktop }/>
            </picture>
          </div>
          <div className = 'right-column'>
            <h1>{ heroInformation.title }</h1>
            <h3 className = 'subtitle'>{ heroInformation.subtitle }</h3>
            <img src = { heroInformation.logos.desktop }/>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
