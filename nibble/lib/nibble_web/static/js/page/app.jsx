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
import { toggle } from './actions/app';

//initialize store
const store = configureStore();

//import containers
import Topbar from './containers/Topbar.jsx';
import Library from './containers/Library.jsx';
import MapInteractive from './containers/MapInteractive.jsx';
import VRScene from './containers/VRScene.jsx';
import Hero from './containers/Hero.jsx';
import Page from './containers/Page.jsx';
import Login from './containers/Login.jsx';
import Footer from './containers/Footer.jsx';
import Cms from './containers/Cms.jsx';
import CMSTopbar from './containers/CMSTopbar.jsx';
import CMSSidebar from './containers/CMSSidebar.jsx';
import Team from './containers/Team.jsx';


class App extends Component {

  constructor(props) {
    super(props);

    store.subscribe(
      () => {
        const state = store.getState();
        let root = document.getElementsByTagName('html')[0];
        if (state.routing.location.pathname != '/app/vr'
        && root.classList) {
          root.classList.remove('a-html');
        }

        if (state.routing.location.pathname.includes('/admin') || state.routing.location.pathname.includes('/cms')) {
          this.setState({ showUserTopbar: false});
          this.setState({ showFooter: false });
        }

        if(state.routing.location.pathname.includes('/cms')) {
          this.setState({ showAdminTopbar: true });
        } else {
          this.setState({ showAdminTopbar: false });
        }

        if (state.routing.location.pathname != '/app/vr'
        && document.body.classList) {
          document.body.classList.remove('a-body');
        }

        if (state.routing.location.pathname == '/app') {
          document.body.classList.add('toggle-hero');
        }

        if (state.routing.location.pathname != '/app'
        && document.body.classList) {
          document.body.classList.remove('toggle-hero');
        }

        if (state.routing.location.pathname.includes('api') || state.routing.location.pathname === '/app'){
          this.setState({ showFooter: false });
        }
      }
    );
  }


  state = {
    route: '/app',
    showUserTopbar: true,
    showFooter: true,
    showAdminTopbar: false,
  };


  render() {
    // console.log(this.props);

    return (
      <Provider store = { store }>
        <Router history = { history }>
          <Route render = {({ location }) => (
            <div className = 'react-body'>
              { this.state.showUserTopbar ? <Topbar /> : null }
              { this.state.showAdminTopbar ? <CMSTopbar /> : null }
              { this.state.showAdminTopbar ? <CMSSidebar /> : null }
              <Route exact path = '/app'
                component = { Hero }/>
              <Route exact path = '/app/libreria'
                component = { Library }/>
              <Route exact path = '/app/mapa'
                component = { MapInteractive }/>
              <Route exact path = '/app/vr'
                component = { VRScene }/>
              <Route exact path = '/app/page'
                component = { Page } />
                <Route exact path = '/admin/new'
                component = { Login } />
                <Route exact path = '/app/desarrolladores'
                component = { Team } />
                <Route path = '/cms'
                component = { Cms } />
                { this.state.showFooter ? <Footer /> : null }
            </div>
          )}>
        </Route>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('react-content'));
