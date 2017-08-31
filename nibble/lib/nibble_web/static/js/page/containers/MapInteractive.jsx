'use strict';
import React from 'react';
import { connect } from 'react-redux';
import MapInteractive from '../components/MapInteractive/MapInteractive.jsx';

function mapStateToProps(state) {
  return {
    header: state.map.header,
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MapInteractive);
