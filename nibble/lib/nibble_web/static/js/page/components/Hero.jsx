'use strict';
import React, { Component } from 'react';
import inViewport from 'in-viewport';

class Hero extends Component {

  componentDidMount() {
    this.watcher = inViewport(this.title, this.title.classList.add('title'));
    this.watcherSubtitle = inViewport(this.subtitle, this.subtitle.classList.add('subtitle'));
  }

  componentWillUnmount(){
    // this.watcher.dispose();
    // this.watcherSubtitle.dispose();
  }

  render() {
    const{
      hero,
      heroEnglish,
      language,
      heroGerman,
    } = this.props;

    let heroInformation = hero;
    if(language){
      if(language === 'es'){
        heroInformation = hero;
      } else if( language === 'en'){
        heroInformation = heroEnglish;
      } else if (language === 'de') {
        heroInformation = heroGerman;
      }
    }

    return (
      <div className = 'hero'>
        <div className = 'container'>
          <div className = 'left-column'>
            <picture className = 'image'>
              <source media = '(max-width:1366px)' srcSet={heroInformation.image.desktop}/>
              <source media = '(min-width:1366px)' srcSet={heroInformation.image.hd}/>
              <img src = { heroInformation.image.desktop }/>
            </picture>
          </div>
          <div className = 'right-column'>
            <h1 ref={(title) => { this.title = title; }}>{ heroInformation.title }</h1>
            <h6 ref={(subtitle) => { this.subtitle = subtitle; }} className = 'subtitle'>{ heroInformation.subtitle }</h6>
            <picture>
              <source media = '(min-width:400px)' srcSet={ heroInformation.logos.desktop}/>
              <source media = '(max-width:400px)' srcSet={ heroInformation.logos.mobile }/>
              <img src = { heroInformation.image.desktop }/>
            </picture>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
