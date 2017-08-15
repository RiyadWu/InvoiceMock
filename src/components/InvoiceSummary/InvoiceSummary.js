import React from 'react';
import { connect } from 'dva';
import { List, InputItem, Button, Card } from 'antd-mobile';
import styles from './InvoiceSummary.css';


function InvoiceSummary({ dispatch, data }) {
  function fetchData() {
    dispatch({
      type: 'invoiceSummary/fetch'
    })
  }
  return (
    <div className={styles.normal}>
      <Card className={ styles.card }>
        <Card.Body>
          <List id="#you-list">
            <InputItem value={data.orderId} className="you-input-label">订单号</InputItem>
            <InputItem value={data.group} className="you-input-label">经销商</InputItem>
            <InputItem value={data.tradeDate} className="you-input-label">交易日期</InputItem>
            <InputItem value={data.tradeAmount}>订单金额</InputItem>
          </List>
        </Card.Body>
      </Card>

      <Button className="btn you-btn" type="primary" onClick={fetchData}>确认</Button>
    </div>
  );
}

function mapStateToProps(state) {
  const { code, msg, data } = state.invoiceSummary
  return { code, msg, data };
}

export default connect(mapStateToProps)(InvoiceSummary);
