'use strict';
import React from 'react';
import { connect } from 'react-redux';
import VRScene from '../components/MapInteractive/VRScene.jsx';

function mapStateToProps(state) {
  return {
    sites: state.map.sites,
    idVr: state.site.id,
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VRScene);
