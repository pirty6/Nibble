'use strict';
import React, { Component } from 'react';

class Terms extends Component{
  render() {
    const {
      privacy,
      language,
      privacyEnglish,
      privacyGerman,
    } = this.props;

    let privacyRender = privacy;
    if (language === 'es') {
      privacyRender = privacy;
    } else if (language === 'en') {
      privacyRender = privacyEnglish;
    } else if (language === 'de') {
      privacyRender = privacyGerman;
    }

    return (
      <div className='privacy'>
        <div className='text' dangerouslySetInnerHTML={{ __html: privacyRender }} />
      </div>
    );
  }
}

export default Terms;
