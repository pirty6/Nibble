import React from 'react';
import { connect } from 'react-redux';
import Team from '../components/Team.jsx';

function mapStateToProps(state) {
  return {
    title: state.team.title,
    team: state.team.team,
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Team);
