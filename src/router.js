import React from 'react';
import { Router, Route } from 'dva/router';
import Users from "./routes/Users.js";

import InvoiceSummary from "./routes/InvoiceSummary.js";

import InvoiceInput from "./routes/InvoiceInput.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={InvoiceSummary} />
      <Route path="/users" component={Users} />
      <Route path="/invoiceInput" component={InvoiceInput} />
    </Router>
  );
}

export default RouterConfig;
