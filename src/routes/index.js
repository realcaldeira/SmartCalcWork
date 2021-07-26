import React from 'react';

import Home from '../pages/Home';
import Calculator from '../pages/Calculator';
import Result from '../pages/Result';
import ResultDatails from '../pages/ResultDatails';
import Error from '../pages/Error';

import { StateMachineProvider, createStore } from 'little-state-machine';

import { Switch, Route } from 'react-router-dom';

createStore({
  data: {
    dataInicio: '',
    dataTermino: '',
    ultimoSalario: '',
    numeroDependentes: '',
    feriasVen: '',
    avisoPrev: '',
  },
});

export function updateData(globalStore, payload) {
  return {
    ...globalStore,
    data: {
      ...payload,
    },
  };
}

export default function Routes() {
  return (
    <Switch>
      <StateMachineProvider>
        <Route path="/" component={Home} exact />
        <Route path="/calculator" component={Calculator} />
        <Route path="/result" component={Result} />
        <Route path="/resultDatails" component={ResultDatails} />
      </StateMachineProvider>
      <Route component={() => <Error />} />
    </Switch>
  );
}
