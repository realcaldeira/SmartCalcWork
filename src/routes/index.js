import React from 'react';

import Home from '../pages/Home';
import Calculator from '../pages/Calculator';
import Result from '../pages/Result';
import ResultDatails from '../pages/ResultDatails';
import Error from '../pages/Error';

import { StateMachineProvider, createStore } from 'little-state-machine';

import { BrowserRouter as Router, Route } from 'react-router-dom';

createStore({
  data: {
    dataInicio: '',
    dataTermino: '',
    ultimoSalario: '',
    numeroDependentes: '',
    motivoTermino: '',
    feriasVen: '',
    avisoPrev: '',
  },
  dataResults: {
    saldoDeSalario: '',
    ref: '50',
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
export function updateDatails(globalStore, payload) {
  return {
    ...globalStore,
    dataResults: {
      ...payload,
    },
  };
}

export default function Routes() {
  return (
    <StateMachineProvider>
      <Router>
        <Route path="/" component={Home} exact />
        <Route path="/calculator" component={Calculator} />
        <Route path="/result" component={Result} />
        <Route path="/resultDatails" component={ResultDatails} />
      </Router>
      {/* <Route component={() => <Error />} /> */}
    </StateMachineProvider>
  );
}
