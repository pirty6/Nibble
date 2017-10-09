'use strict';
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const {
      footer,
      language,
      idVr,
    } = this.props;

    const upLinks = footer.upperLinks.map((element, index) => (
      <div className='upLink' key = { index }>
        <h6>{ element.title }</h6>
      </div>
    ));

    const botLinks = footer.bottomLinks.map((element, index) => (
      <div className='botLink' key = { index }>
        <p>{ element.title }</p>
      </div>
    ));

    const social = footer.icons.map((element, index) => (
      <div className='icon' key = { index }>
        <img src = { element.icon } />
      </div>
    ));

    return (
      <div className={'footer ' + (idVr ? 'vr-active' : 'vr-not-active')}>
        <div className='container'>
          <div className='left-column'>
            <h6>{ footer.contact.title }</h6>
            <div className='column'>
              <p>{ footer.contact.address}</p>
            </div>
            <div className='column tel-column'>
              <p>{ footer.contact.telephone }</p>
            </div>
          </div>
          <div className='right-column'>
            <div className='top'>
                { upLinks }
            </div>
            <div className='bottom'>
              <p>{ footer.text }</p>
            </div>
          </div>
          <div className='links'>
            <div className='link'>
              { botLinks }
            </div>
            <div className='social'>
              <div className='container'>
                { social }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
