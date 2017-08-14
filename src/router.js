import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Invoice from './routes/Invoice';
import InvoiceSummary from "./routes/InvoiceSummary.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/invoice" component={Invoice} />
      <Route path="/invoiceSummary" component={InvoiceSummary} />
    </Router>
  );
}

export default RouterConfig;
