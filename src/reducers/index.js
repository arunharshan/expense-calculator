import { combineReducers } from 'redux';

import authReducer from './authReducer';
import expenseReducer from './expenseReducer';
import categoryReducer from './categoryReducer';
import modelReducer from './modelReducer';

export default combineReducers({
  auth: authReducer,
  categories: categoryReducer,
  expenses: expenseReducer,
  model: modelReducer
});
