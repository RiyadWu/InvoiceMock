import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Invoice from './routes/Invoice';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/invoice" component={Invoice} />
    </Router>
  );
}

export default RouterConfig;
