import React from 'react';
import { connect } from 'dva';
import styles from './InvoiceInput.css';
import InputComponent from '../components/InvoiceInput/InvoiceInput';


function InvoiceInput() {
  return (
    <div className={styles.normal}>
      <InputComponent />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(InvoiceInput);
