'use strict';
import React from 'react';
import { connect } from 'react-redux';
import MapInteractive from '../components/MapInteractive/MapInteractive.jsx';
import { setId } from '../actions/app';
import { push } from 'react-router-redux';

function mapStateToProps(state) {
  return {
    header: state.map.header,
    sites: state.map.sites,
    idVr: state.site.id,
    headerEnglish: state.map.headerEnglish,
    language: state.language.language,
    headerGerman: state.map.headerGerman,
    page: state.page.locationBeforeTransitions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setId: (id) => (dispatch(setId(id))),
    goToPage: () => (dispatch(push(`/app/vr`))),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MapInteractive);
