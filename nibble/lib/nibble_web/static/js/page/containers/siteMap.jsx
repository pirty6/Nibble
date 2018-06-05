'use strict';
import React from 'react';
import { connect } from 'react-redux';
import SiteMap from '../components/SiteMap.jsx';

function mapStateToProps(state) {
  return {
    language: state.language.language,
    img: '/images/SiteMap_ESP.png',
    imgEn: '/images/SiteMap_ING.png',
    imgGe: '/images/SiteMap_ALE.png',
  }
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteMap);
