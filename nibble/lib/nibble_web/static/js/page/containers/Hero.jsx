'use strict';
import React from 'react';
import { connect } from 'react-redux';
import Hero from '../components/Hero.jsx';

function mapStateToProps(state) {
  return {
    hero: state.hero.hero,
    heroEnglish: state.hero.heroEnglish,
    language: state.language.language,
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
