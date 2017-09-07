'use strict';
import React from 'react';
import { connect } from 'react-redux';
import Hero from '../components/Hero.jsx';

function mapStateToProps(state) {
  return {
    hero: state.hero.hero,
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
