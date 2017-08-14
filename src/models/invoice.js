import { summary } from '../services/invoice'

export default {
  namespace: 'invoice',
  state: {
    summary: {},
  },
  reducers: {
    querySuccess(state, { payload: { code, msg, data: summary } }) {
      console.log('querySuccess', state, code, msg, data,  payload)
      return { ...state, summary };
    },
  },
  effects: {
    *summary({ payload }, { put, call }) {
      const data = yield call(summary)
      console.log('*summary', data)
      // {
      //   'code': 50,
      //   'msg': '请求成功',
      //   'data': {
      //   "orderId": Random.string('number', 11),
      //     'group|1': ['广汽丰田', '上海大众'],
      //     'tradeDate|1': "@now",
      //     "tradeAmount|1-1000.1-3": 1,
      // },
      // }
      put({
        type: 'querySuccess',
        payload: { data },
      })
    }
  },
  subscriptions: {},
};
