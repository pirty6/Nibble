'use strict';
import React, { Component } from 'react';

class Cms extends Component{
  render() {
    let add = null;
    const form = document.getElementById('showBooks').outerHTML;
    let title = null;

    if (this.props.location) {
      if (this.props.location.pathname === '/cms/libreria') {
        title = 'Libreria';
      }
    }


    if (document.getElementById('add')) {
      add = document.getElementById('add').outerHTML;
    }
    return (
      <div className='cms-library'>
        <div className='container'>
          <div className='title-container'>
            <h2>{ title }</h2>
            {(document.getElementById('add')
            ? <div className='button-admin' dangerouslySetInnerHTML={{ __html: add }} />
            : null )}
          </div>
          <div
            className='text'
            dangerouslySetInnerHTML={{ __html: form }}
          />
        </div>
      </div>
    );
  }
}

export default Cms;
