import React from 'react';
import { connect } from 'dva';
import { NavBar, Card, List, InputItem, Accordion, Table, WhiteSpace, Button, Toast  } from 'antd-mobile';
import { routerRedux } from 'dva/router';
import { createForm } from 'rc-form';
import styles from './InvoiceInput.css';

function InvoiceInput({ dispatch, data, form:{
  getFieldDecorator,
  validateFieldsAndScroll,
} }) {
  const onChange = (key) => {
    console.log(key);
  }

  const invoiceInfo = () => {
    console.log('invoiceInfo')
  }

  const back = () => {
    dispatch(routerRedux.goBack());
  }

  const columns = [
    { title: '标题', dataIndex: 'title', key: 'title' },
    { title: '金额', dataIndex: 'a', key: 'a' },
    { title: '税率', dataIndex: 'b', key: 'b' },
  ];

  const tableData = [
    { title: '项目一', a: '二哈', b: '32', key: '1'},
    { title: '项目二', a: '小明', b: '98', key: '2'},
  ];

  const state = {
    focused: false,
    focused1: false,
  }

  const { getFieldProps } = props.form;

  return (
    <div className={styles.normal}>
      <NavBar
              leftContent="返回"
              mode="light"
              onLeftClick={ () => { back() } }
      >输入发票抬头</NavBar>

      <WhiteSpace/>

      <Card className={ styles.card }>
        <Card.Body>
          <List id="#you-list">
            <InputItem placeholder="购方名称">购方名称</InputItem>
            <InputItem placeholder="购方税号">购方税号</InputItem>
            <Accordion className="my-accordion" onChange={onChange}>
              <Accordion.Panel header="点击填写更多购方信息">
                <List className="my-list">
                  <InputItem placeholder="地址">地址</InputItem>
                  <InputItem placeholder="电话"
                             >电话</InputItem>
                  <InputItem placeholder="开户行">开户行</InputItem>
                  <InputItem placeholder="银行账号"
                             type="bankCard">银行账号</InputItem>
                </List>
              </Accordion.Panel>
            </Accordion>
            <InputItem placeholder="接收邮箱">接收邮箱</InputItem>
            <InputItem placeholder="接收手机">接收手机</InputItem>
          </List>
        </Card.Body>
      </Card>
      <WhiteSpace/>
      <Card >
        <Card.Body>
          <Table
            columns={ columns }
            dataSource={ tableData }
            footer={data => {
              const sum = data.reduce((pre, cur) => pre + Number(cur.b), 0)
              return <div>合计: { sum }</div>
            }}
          />
        </Card.Body>
      </Card>
      <WhiteSpace/>
      <Button className="btn you-btn" type="primary" onClick={ invoiceInfo }>确认</Button>

    </div>
  );
}

function mapStateToProps(state) {
  const { code, msg, data } = state.invoiceInput
  return { code, msg, data };
}

export default connect(
  mapStateToProps
)(
  createForm()(InvoiceInput)
);

