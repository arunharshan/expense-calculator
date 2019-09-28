import {
  ERROR_CATEGORY,
  FETCH_CATEGORY,
  LOADING_CATEGORY
} from '../actions/types';
// if needed import the local storeage

const initState = {
  loading: false,
  error: null,
  category: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case LOADING_CATEGORY:
      return {
        ...state,
        loading: true
      };
    case FETCH_CATEGORY:
      return {
        ...state,
        loading: false,
        error: null,
        category: action.payload
      };
    case ERROR_CATEGORY:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
