import { FETCH_AUTH, ERROR_AUTH, LOADING_AUTH } from '../actions/types';
import { setAuth, removeAuth } from '../utils';
const initialState = {
  auth: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AUTH:
      const user = action.payload ? action.payload : null;
      setAuth(user);
      return {
        ...state,
        auth: user,
        loading: false,
        error: null
      };
    case ERROR_AUTH:
      removeAuth();
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case LOADING_AUTH:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
