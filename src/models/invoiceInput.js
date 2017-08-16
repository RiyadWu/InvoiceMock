import * as invoiceService from '../services/invoice';

const sumAmount = function (arr) {
  return arr.reduce((pre, cur) => pre + cur.amount, 0)
}

export default {
  namespace: 'invoiceInput',
  state: {
    data: {},
    msg: null,
    code: null,
  },
  reducers: {
    querySuccess(state,  { payload: { data: {code, msg, data}} }  ) {
      if (code !== 50) {
        return { ...state };
      }
      const sum = sumAmount(data)
      return { ...state, data, msg, code, sum };
    },
  },
  effects: {
    *fetch({ }, { call, put }) {
      const  data  = yield call(invoiceService.details);
      yield put({ type: 'querySuccess', payload: data  });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/invoiceInput') {
          dispatch({ type: 'fetch'});
        }
      });
    },
  },
};
