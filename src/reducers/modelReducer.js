import {
  OPEN_ADD_EXPENSE_MODEL,
  CLOSE_ADD_EXPENSE_MODEL
} from '../actions/types';

const initState = {
  hasModel: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case OPEN_ADD_EXPENSE_MODEL:
      return {
        ...state,
        hasModel: action.payload
      };
    case CLOSE_ADD_EXPENSE_MODEL:
      return {
        ...state,
        hasModel: action.payload
      };
    default:
      return state;
  }
};
