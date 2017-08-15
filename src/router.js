import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Users from "./routes/Users.js";

import InvoiceSummary from "./routes/InvoiceSummary.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/users" component={Users} />
      <Route path="/invoiceSummary" component={InvoiceSummary} />
    </Router>
  );
}

export default RouterConfig;
