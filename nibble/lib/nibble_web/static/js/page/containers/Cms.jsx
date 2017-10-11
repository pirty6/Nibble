'use strict';
import React from 'react';
import { connect } from 'react-redux';
import Cms from '../components/Admin/Cms.jsx';

function mapStateToProps(state) {
  return {
    location: state.page.locationBeforeTransitions,
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cms);
