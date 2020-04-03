import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Login from './pages/Login';

function AppRouter() {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </Router>
  );
}

export default AppRouter;