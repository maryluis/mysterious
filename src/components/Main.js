import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import { LoginPage, ProfilePage, NewsPage } from './mainComponents';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/profile" component={ProfilePage} />
      <Route exact path="/news" component={NewsPage} />
      <Route render={() => <Redirect to="/login" />} />
    </Switch>
  </main>
);

export default Main;
