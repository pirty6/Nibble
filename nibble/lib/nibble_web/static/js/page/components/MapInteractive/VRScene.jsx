'use strict';
import 'aframe';
import { Entity, Scene } from 'aframe-react';
import React, { Component } from 'react';

class VRScene extends Component {
  constructor(props) {
    super(props);
    this.renderVr = this.renderVr.bind(this);
  }

  renderVr(id) {
    if (id) {
      return (
        <Scene>
          <Entity primitive = 'a-sky' src = { id }/>
        </Scene>
      );
    }

    return null;
  }

  render() {
    const {
      idVr,
    } = this.props;

    console.log(idVr);

    return (
      <div>
        { this.renderVr(idVr) }
      </div>
    );
  }
}

export default VRScene;
