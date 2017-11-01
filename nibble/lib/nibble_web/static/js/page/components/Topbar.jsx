'use strict';
import React, { Component } from 'react';

class Topbar extends Component {
  state = {
    showScrollBar: window.innerWidth <= 1024,
  };

  componentDidMount() {
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop && this.props.slide === false) {
        this.setState({ showScrollBar: false });
      } else if (st <= 3 && this.props.slide === false && (window.innerWidth > 1024)) {
        this.setState({ showScrollBar: false });
      } else {
        this.setState({ showScrollBar: true });
      }
      lastScrollTop = st;
    }, false);
  }

  render() {
    console.log(window.innerWidth>1024);
    const {
      links,
      slide,
      toggle,
      goToPage,
      idVr,
      logo,
      name,
      goToHome,
      linksEnglish,
      language,
      linksGerman,
    } = this.props;


    let linksInformation = links;
    if (language) {
      if (language === 'es') {
        linksInformation = links;
      } else if( language === 'en') {
        linksInformation = linksEnglish;
      } else if (language === 'de') {
        linksInformation = linksGerman;
      }
    }

    let linksRender = linksInformation.map((element, index) => (
      <div className = 'nav' key = { index } onClick = {
        () => {(element.flag ? (goToPage(element.link), toggle())
      : window.location = element.link); }}
      >
        <h6>{ element.title }</h6>
      </div>
    ));

    let navRender = linksInformation.map((element, index) => (
      <div className='nav' key={ index } onClick={
        () => {(element.flag ? (goToPage(element.link))
        : window.location = element.link);
      }}>
        <h6>{ element.title }</h6>
      </div>
    ));

    const navBarScroll = (
      <div className={`nav-bar-scroll ${this.state.showScrollBar ? 'show' : 'hidden'}`}>
        <div className = 'container'>
          <div className='column'>
            <div className='column-container' onClick = { goToHome }>
              {/* <object className='logo' data={ logo } type="image/svg+xml"></object>
              <object className='name' data={ name } type="image/svg+xml"></object> */}
              <img src={logo} className='logo' type='image/svg+xml' />
              <img src={name} className='name' type='image/svg+xml' />
            </div>
          </div>
          <div className='column column-menu'>
            <div id = 'menu' className = {slide ? 'on' : 'menu'}
              onClick={ toggle }>
              <i className = 'close'>
                <span>
                  <p></p>
                  <p></p>
                  <p></p>
                </span>
              </i>
            </div>
          </div>
        </div>
        <div className = {'navigation ' + (slide ? 'show' : 'hidden')}>
          <div className = 'nav-container'>
            { linksRender }
          </div>
        </div>
      </div>
    );

    const navBarHeader = (
      <div className='nav-bar-header'>
        <div className='container'>
          <div className='column'>
            <div className='column-container' onClick = { goToHome }>
              <img src={logo} className='logo' type='image/svg+xml' />
              <img src={name} className='name' type='image/svg+xml' />
            </div>
          </div>
          <div className='column column-nav'>
            <div className='nav-container'>
              { navRender }
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div className = {'topbar ' + (idVr ? 'vr-active' : 'vr-not-active')}>
        { navBarHeader }
        { navBarScroll }
      </div>
    );
  }
}

export default Topbar;
