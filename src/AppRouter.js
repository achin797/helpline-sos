import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import LoginPage from './pages/LoginPage';

function AppRouter() {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route exact path={"/"} component={LoginPage} />
        <Route path={"/login"} component={LoginPage} />
        <Route path="/signup" render={(props) => <LoginPage {...props} signUp={true}/>} />
      </Switch>
    </Router>
  );
}

export default AppRouter;