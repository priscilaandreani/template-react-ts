import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import { FirstPage, SecondPage } from '../pages';

const Routes: FC = () => (
  <Switch>
    <Route path="/" exact component={FirstPage} />
    <Route path="/second" component={SecondPage} />
  </Switch>
);

export default Routes;
