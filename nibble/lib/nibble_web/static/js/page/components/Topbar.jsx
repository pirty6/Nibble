'use strict';
import React, { Component } from 'react';

class Topbar extends Component {
  render() {
    const {
      links,
      slide,
      toggle,
    } = this.props;

    return (
      <div className = 'topbar'>
        <div className = 'container'>
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
    );
  }
}

export default Topbar;
