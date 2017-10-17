'use strict';
import React from 'react';
import { connect } from 'react-redux';
import Terms from '../components/Terms.jsx';

function mapStateToProps(state) {
  return {
    privacy: state.terms.privacy,
    language: state.language.language,
    privacyEnglish: state.terms.privacyEnglish,
    privacyGerman: state.terms.privacyGerman,
  };
}

function mapDispatchToProps(dispatch){
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Terms);
