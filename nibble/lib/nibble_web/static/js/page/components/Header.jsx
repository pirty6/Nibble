
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='container'>
          <div className='container-text'>
            <h2>{ this.props.title }</h2>
            <h6>{ this.props.subtitle }</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
