'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  ConnectedRouter as Router,
  push
} from 'react-router-redux';
import { Route, Switch } from 'react-router';
import {
  configureStore,
  history,
} from './store';

//initialize store
const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router history = { history }>
          <Route render = {({ location }) => (
            <div className = 'react-body'>
              Hello World!
            </div>
          )}>
        </Route>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('react-content'));
