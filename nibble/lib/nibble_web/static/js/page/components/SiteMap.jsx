'use strict';
import React, { Component } from 'react';

class SiteMap extends Component {
  render() {
    const {
      language,
      img,
      imgEn,
      imgGe,
    } = this.props;

    let imageRender = img;
    if (language === 'es') {
      imageRender = img;
    } else if (language === 'en') {
      imageRender = imgEn;
    } else if (language === 'de') {
      imageRender = imgGe;
    }


    return (
      <div className='privacy'>
        <div className='image' style={{ backgroundImage: `url(${imageRender})`}}/>
      </div>
    );
  }
}

export default SiteMap;
