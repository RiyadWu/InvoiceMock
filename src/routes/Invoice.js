import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Tabs } from 'antd-mobile';
import styles from './Invoice.css';

const TabPane = Tabs.TabPane;

function Invoice() {
  return (
    <div className={styles.normal}>
      <Tabs defaultActiveKey="1" onChange={(key) => { console.log(key) }}>
        <TabPane tab="选项卡一" key="1">
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', height: 100,
          }}>
            选项卡一内容
          </div>
        </TabPane>
        <TabPane tab="选项卡二" key="2">
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', height: 100,
          }}>
            选项卡二内容
          </div>
        </TabPane>
        <TabPane tab="选项卡三" key="3">
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', height: 100,
          }}>
            选项卡三内容
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Invoice);


