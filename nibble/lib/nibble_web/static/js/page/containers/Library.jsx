'use strict';
import React from 'react';
import { connect } from 'react-redux';
import Library from '../components/Library/Library.jsx';
import { toggleModal } from '../actions/app';

function mapStateToProps(state) {
  return {
    header: state.library.header,
    // books: state.library.books,
    toggle: state.modal.toggle,
    page: state.page.locationBeforeTransitions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleModal: () => (dispatch(toggleModal())),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);
