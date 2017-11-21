
import React from 'react';
import { connect } from 'react-redux';
import { fetch } from '../actions/page';
import Cms from '../components/Admin/Cms.jsx';

function mapStateToProps(state) {
  return {
    location: state.page.locationBeforeTransitions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getRole: () => (dispatch(fetch('cms'))),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cms);
