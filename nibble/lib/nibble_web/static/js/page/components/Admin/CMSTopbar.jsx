'use strict';
import React, { Component } from 'react';

class CMSTopbar extends Component{
  render() {
    let log = null;
    if (document.getElementById('logout')) {
      log = document.getElementById('logout');
      // console.log(document.getElementById('logout');
    }
    return (
      <div className='cms-topbar'>
        <div className='container'>
          <div className='column'>
            {/* <img className='logo' src='/images/nibble.svg' alt='nibble-logo' /> */}
          </div>
          <div className='column column-logout'>
            {/* {(document.getElementById('logout')
            ? <div
               dangerouslySetInnerHTML={{ __html: log }} />
            : null )} */}
          </div>
        </div>
      </div>
    );
  }
}

export default CMSTopbar;
