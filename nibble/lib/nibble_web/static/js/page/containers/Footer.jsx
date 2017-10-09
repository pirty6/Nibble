'use strict';
import React from 'react';
import { connect } from 'react-redux';
import Footer from '../components/Footer.jsx';
import { fetch } from '../actions/page';
import { setLanguage } from '../actions/app';
import { push } from 'react-router-redux';

function mapStateToProps(state) {
  return {
    footer: state.footer.footer,
    language: state.language.language,
    idVr: state.site.id,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    goToPage: (link) => (dispatch(fetch(`/app/${link}`))),
    goTo: (link) => (dispatch(push(`/app/${link}`))),
    changeLanguage: (language) => (dispatch(setLanguage(language))),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
