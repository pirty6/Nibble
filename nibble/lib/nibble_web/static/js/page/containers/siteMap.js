'use strict';
import React from 'react';
import { connect } from 'react-redux';
import SiteMap from '../components/SiteMap.jsx';

function mapStateToProps(state) {
  return {
    language: state.language.language,
    img: '/images/Site Map_ESP.png',
    imgEn: '/images/Site Map_ING.png',
    imgGe: '/images/Site Map_ALE.png',
  }
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteMap);
