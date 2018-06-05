import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import Home from './containers/Home';
import App from './containers/App';
import NewHome from './containers/NewHome';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={NewHome}/>
    </Route>
  </Router>
);
