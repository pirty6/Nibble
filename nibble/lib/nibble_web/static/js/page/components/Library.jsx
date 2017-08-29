'use strict';
import React, { Component } from 'react';
import Header from './Header.jsx';

class Library extends Component{
  render() {
    const {
      header,
    } = this.props;

    return (
      <div className = 'Library'>
        <Header { ...header }/>
        PEE
      </div>
    );
  }
}

export default Library;
