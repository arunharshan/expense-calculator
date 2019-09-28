import { OPEN_ADD_EXPENSE_MODEL, CLOSE_ADD_EXPENSE_MODEL } from './types';

const openModel = () => dispatch => {
  dispatch({ type: OPEN_ADD_EXPENSE_MODEL, payload: true });
};
const closeModel = () => dispatch => {
  dispatch({ type: CLOSE_ADD_EXPENSE_MODEL, payload: false });
};

export { openModel, closeModel };
