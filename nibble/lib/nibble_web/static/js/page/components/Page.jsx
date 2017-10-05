'use strict';
import React, { Component } from 'react';

class Page extends Component {
  render() {
    const {
      page,
    } = this.props;

    console.log(page.state);
    return (
      <div>

      </div>
    );
  }
}

export default Page;
