import { queryUserList } from '@/services/configure';

export default {
  namespace: 'configure',

  // 初始化字段，避免undefined的bug
  state: {
    data: {
      code: '',
      msg: '',
      data: {
        list: [],
        pagination: {
          total: '',
          pageSize: '',
          current: '',
        },
      },
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryUserList, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
};
