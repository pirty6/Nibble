
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
          <Entity primitive='a-sky' src={id} />
        </Scene>
      );
    }

    return null;
  }

  render() {
    const {
      idVr,
      goToPage,
      setId,
    } = this.props;

    return (
      <div className='vr'>
        <div
          className='close'
          onClick={() => {
            goToPage(); setId(null);
          }}
        >
          <span>
            X
          </span>
        </div>
        { this.renderVr(idVr) }
      </div>
    );
  }
}

export default VRScene;
