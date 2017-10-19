'use strict';
import React from 'react';
import { connect } from 'react-redux';
import Privacy from '../components/Privacy.jsx';

function mapStateToProps(state) {
  return {
    privacy: state.privacy.privacy,
    language: state.language.language,
    privacyGerman: state.privacy.privacyGerman,
    privacyEnglish: state.privacy.privacyEnglish,
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Privacy);
