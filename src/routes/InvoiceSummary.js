import React from 'react';
import { connect } from 'dva';
import SummaryComponent from '../components/InvoiceSummary/InvoiceSummary'
import styles from './InvoiceSummary.css';

function InvoiceSummary() {
  return (
    <div className={ styles.normal }>
      <div className={ styles.logo } alt="logo"/>
      <div className={ styles.title }>电子发票自主开具</div>
      <SummaryComponent />
      <span className={ styles.hint}> 技术支持<b>：</b>用友汽车信息科技（上海）股份有限公司公司</span>
    </div>
  );
}

export default connect()(InvoiceSummary);
