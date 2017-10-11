'use strict';
import React, { Component } from 'react';

class Cms extends Component{
  render() {
    const form = document.getElementById('showBooks').outerHTML;
    return (
      <div className='cms-library'>
        <div
          className='text'
          dangerouslySetInnerHTML={{ __html: form }}
        />
      </div>
    );
  }
}

export default Cms;
