// @flow
import { compose, createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
// import ReactGA from 'react-ga';
import {
  createEpicMiddleware,
} from 'redux-observable';

import epics from '../epics';
import reducers from '../reducers';

export const history = createHistory();
// ReactGA.initialize(ANALYTICS.google.analytics_id, {
//   debug: __DEVTOOLS__,
//   titleCase: false,
// });
// ReactGA.ga('set', 'language', ANALYTICS.shared.lang);
//
// history.listen(() => {
//   ReactGA.set({ page: window.location.pathname + window.location.search });
//   ReactGA.pageview(window.location.pathname + window.location.search);
// });

const epicMiddleware = createEpicMiddleware(epics);
let middleware = [
  epicMiddleware,
  routerMiddleware(history),
];

if (__DEVTOOLS__) {
  const createLogger = require('redux-logger').createLogger;
  // const immutableLogger = require('redux-immutable-state-invariant').immutableStateInvariantMiddleware;

  const logger = createLogger({ collapsed: true });
  middleware = [
    ...middleware,
    logger,
  ];
} else {
  middleware = [...middleware];
}

const devToolsExt = typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
  ? window.devToolsExtension()
  : f => f;

const enhancers = compose(
  applyMiddleware(...middleware),
  devToolsExt,
);

const initialState = {};

export function configureStore() {
  return createStore(
    reducers,
    initialState,
    enhancers,
  );
}
