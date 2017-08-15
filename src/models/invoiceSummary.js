import * as invoiceService from '../services/invoice';

export default {
  namespace: 'invoiceSummary',
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
      return { ...state, data, msg, code };
    },
  },
  effects: {
    *fetch({ }, { call, put }) {
      const  data  = yield call(invoiceService.fetch);
      yield put({ type: 'querySuccess', payload: data  });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/invoiceSummary') {
          dispatch({ type: 'fetch'});
        }
      });
    },
  },
};
