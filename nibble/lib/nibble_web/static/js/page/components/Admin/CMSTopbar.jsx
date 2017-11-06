'use strict';
import React, { Component } from 'react';

class CMSTopbar extends Component{
  render() {
    let log = null;
    let user = null;
    if (document.getElementById('logout')) {
      log = document.getElementById('logout').outerHTML;
    }
    if (document.getElementById('user')) {
      user = document.getElementById('user').outerHTML;
    }
    return (
      <div className='cms-topbar'>
        <div className='container'>
          <div className='column'>
          </div>
          <div className='column column-logout'>
            {(document.getElementById('logout')
            ? <div dangerouslySetInnerHTML={{ __html: user }} />
            : null )}
            {(document.getElementById('logout')
            ? <div dangerouslySetInnerHTML={{ __html: log }} />
            : null )}
          </div>
        </div>
      </div>
    );
  }
}

export default CMSTopbar;
