'use strict';
import React, { Component } from 'react';

class CMSTopbar extends Component{
  render() {
    return (
      <div className='cms-topbar'>
        <div className='container'>
          <div className='column'>
            {/* <img className='logo' src='/images/nibble.svg' alt='nibble-logo' /> */}
          </div>
          <div className='column column-logout'>
            <img className='logout' src='/images/logout.svg' alt='logout' />
          </div>
        </div>
      </div>
    );
  }
}

export default CMSTopbar;
