'use strict';
import React from 'react';
import { connect } from 'react-redux';
import Library from '../components/Library.jsx';

function mapStateToProps(state) {
  return {
    header: state.library.header,
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);
