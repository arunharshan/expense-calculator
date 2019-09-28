import {
  ERROR_EXPENSE,
  FETCH_EXPENSES,
  LOADING_EXPENSE,
  DELETE_EXPENSE,
  ADD_EXPENSE,
  UPDATE_EXPENSE,
  IS_EDIT_EXPENSE
} from '../actions/types';

const initState = {
  loading: false,
  error: false,
  expense: null,
  hasAdded: false,
  hasDeleted: false,
  hasUpdated: false,
  editExpense: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case IS_EDIT_EXPENSE:
      return {
        ...state,
        editExpense: action.payload
      };
    case LOADING_EXPENSE:
      return {
        ...state,
        loading: action.payload
      };
    case FETCH_EXPENSES:
      return {
        ...state,
        loading: false,
        error: null,
        hasDeleted: false,
        hasAdded: false,
        hasUpdated: false,
        expense: action.payload.sort((a, b) => b.id - a.id)
      };
    case ERROR_EXPENSE:
      return {
        ...state,
        loading: false,
        hasDeleted: false,
        hasAdded: false,
        hasUpdated: false,
        error: action.payload
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        loading: false,
        error: null,
        hasAdded: false,
        hasUpdated: false,
        hasDeleted: action.payload
      };
    case UPDATE_EXPENSE:
      return {
        ...state,
        loading: false,
        error: null,
        hasAdded: false,
        hasDeleted: false,
        hasUpdated: action.payload
      };
    case ADD_EXPENSE:
      return {
        ...state,
        loading: false,
        hasDeleted: false,
        error: null,
        hasUpdated: false,
        hasAdded: action.payload
      };
    default:
      return state;
  }
};
