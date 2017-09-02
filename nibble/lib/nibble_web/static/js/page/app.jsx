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

//import containers
import Topbar from './containers/Topbar.jsx';
import Library from './containers/Library.jsx';
import MapInteractive from './containers/MapInteractive.jsx';

class App extends Component {

  render() {
    return (
      <Provider store = { store }>
        <Router history = { history }>
          <Route render = {({ location }) => (
            <div className = 'react-body'>
              <Topbar/>
              <Route exact path = '/app/libreria'
                component = { Library }/>
              <Route exact path = '/app/mapa'
                component = { MapInteractive }/>
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
