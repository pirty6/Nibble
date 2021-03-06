'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Topbar from '../components/Topbar.jsx';
import { toggle } from '../actions/app';
import { fetch } from '../actions/page';
import { setLanguage } from '../actions/app';

function mapStateToProps(state) {
  return {
    links: state.topbar.links,
    slide: state.slide.slide,
    idVr: state.site.id,
    logo: state.topbar.logo,
    name: state.topbar.name,
    linksEnglish: state.topbar.linksEnglish,
    language: state.language.language,
    linksGerman: state.topbar.linksGerman,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggle: () => (dispatch(toggle())),
    goToPage: (link) => (dispatch(fetch(`/app/${link}`))),
    goToHome: () => (dispatch(push(`/app`))),
    changeLanguage: (language) => (dispatch(setLanguage(language))),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
