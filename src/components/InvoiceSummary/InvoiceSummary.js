import React from 'react';
import { connect } from 'dva';
import { List, InputItem, Button, WhiteSpace, Card } from 'antd-mobile';
import { routerRedux } from 'dva/router';
import styles from './InvoiceSummary.css';

function InvoiceSummary({ dispatch, summary }) {
  return (
    <div className={styles.normal}>
      <Card>
        <Card.Body>
          <List>
            <InputItem value={summary.orderId}>订单号</InputItem>
            <InputItem value={summary.group}>经销商</InputItem>
            <InputItem value={summary.tradeDate}>交易日期</InputItem>
            <InputItem value={summary.tradeAmount}>订单金额</InputItem>
          </List>
        </Card.Body>
      </Card>

      <Button className="btn" type="primary" onclick="">确认</Button>
    </div>
  );
}

function mapStateToProps(state) {
  const { summary } = state.invoice;
  return {
    summary
  };
}

export default connect(mapStateToProps)(InvoiceSummary);
