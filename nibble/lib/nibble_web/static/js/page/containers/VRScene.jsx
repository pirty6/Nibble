'use strict';
import React from 'react';
import { connect } from 'react-redux';
import VRScene from '../components/MapInteractive/VRScene.jsx';
import { push } from 'react-router-redux';
import { setId } from '../actions/app';

function mapStateToProps(state) {
  return {
    sites: state.map.sites,
    idVr: state.site.id,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    goToPage: () => (dispatch(push(`/app/mapa`))),
    setId: (id) => (dispatch(setId(id))),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VRScene);
