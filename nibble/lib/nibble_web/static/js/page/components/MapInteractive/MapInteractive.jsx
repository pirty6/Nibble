'use strict';
import React, { Component } from 'react';
import Header from '../Header.jsx';

class MapInteractive extends Component{
  render() {
    const {
      header,
    } = this.props;
    return (
      <div className = 'map'>
        <Header { ...header }/>
      </div>
    );
  }
}

export default MapInteractive;
