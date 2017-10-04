'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Topbar from '../components/Topbar.jsx';
import { toggle } from '../actions/app';

function mapStateToProps(state) {
  return {
    links: state.topbar.links,
    slide: state.slide.slide,
    idVr: state.site.id,
    logo: state.topbar.logo,
    name: state.topbar.name,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggle: () => (dispatch(toggle())),
    goToPage: (link) => (dispatch(push(`/app/${link}`))),
    goToHome: () => (dispatch(push(`/app`))),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
