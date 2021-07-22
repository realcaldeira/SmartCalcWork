import React from 'react';

import Home from '../pages/Home';
import Calculator from '../pages/Calculator';
import Result from '../pages/Result';
import ResultDatails from '../pages/ResultDatails';

import { Switch, Route } from 'react-router-dom';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/calculator" component={Calculator} />
      <Route path="/result" component={Result} />
      <Route path="/resultDatails" component={ResultDatails} />
      <Route component={() => <div>Page 404!</div>} />
    </Switch>
  );
}
