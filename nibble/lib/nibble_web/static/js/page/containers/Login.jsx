'use strict'
import React from 'react';
import { connect } from 'react-redux';
import Login from '../components/Admin/Login.jsx';

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
    goToPage: (link) => (dispatch(push(`/admin${link}`))),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
