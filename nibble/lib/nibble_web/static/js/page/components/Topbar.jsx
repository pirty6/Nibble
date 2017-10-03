'use strict';
import React, { Component } from 'react';

class Topbar extends Component {
  render() {
    const {
      links,
      slide,
      toggle,
      goToPage,
      idVr,
    } = this.props;

    let linksRender = links.map((element, index) => (
      <div className = 'nav' key = { index } onClick = {
        () => {(element.flag ? goToPage(element.link)
      : window.location = element.link); }}
      >
        <h6>{ element.title }</h6>
      </div>
    ));

    return (
      <div className = {'topbar ' + (idVr ? 'vr-active' : 'vr-not-active')}>
        <div className = 'container'>
          <div className='column'>

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
  }
}

export default Topbar;
