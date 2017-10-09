'use strict';
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    let footerInformation = this.props.footer;
    if (this.props.language) {
      if (this.props.language === 'es') {
        footerInformation = this.props.footer;
      } else if (this.props.language === 'en') {
        footerInformation = this.props.footerEnglish;
      } else if (this.props.language === 'de'){
        footerInformation = this.props.footerGerman;
      }
    }

    const {
      footer,
      footerEnglish,
      language,
      idVr,
      goToPage,
      goTo,
      changeLanguage,
    } = this.props;

    const upLinks = footerInformation.upperLinks.map((element, index) => (
      <div className='upLink' key = { index }
        onClick={(element.link ? (element.flag ?
          () => {goToPage(element.link)} : () => { window.location = element.link} )
          : () => changeLanguage(element.language))}>
        <h6>{ element.title }</h6>
      </div>
    ));

    const botLinks = footerInformation.bottomLinks.map((element, index) => (
      <div className='botLink' key = { index } onClick = { element.link ? () => {goTo(element.link)} :  null }>
        <p>{ element.title }</p>
      </div>
    ));

    const social = footerInformation.icons.map((element, index) => (
      <div className='icon' key = { index } onClick={ () => {window.location = element.link}}>
        <img src = { element.icon } />
      </div>
    ));

    return (
      <div className={'footer ' + (idVr ? 'vr-active' : 'vr-not-active')}>
        <div className='container'>
          <div className='left-column'>
            <h6>{ footerInformation.contact.title }</h6>
            <div className='column'>
              <p>{ footerInformation.contact.address}</p>
            </div>
            <div className='column tel-column'>
              <p>{ footerInformation.contact.telephone }</p>
            </div>
          </div>
          <div className='right-column'>
            <div className='top'>
                { upLinks }
            </div>
            <div className='bottom'>
              <p>{ footerInformation.text }</p>
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
