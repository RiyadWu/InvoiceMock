import React from 'react';
import { connect } from 'dva';
import styles from './InvoiceSummary.css';
import SummaryComponent from '../components/InvoiceSummary/InvoiceSummary'

function InvoiceSummary() {
  return (
    <div className={styles.normal}>
      <SummaryComponent />
    </div>
  );
}

export default connect()(InvoiceSummary);
