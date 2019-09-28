import {
  LOADING_EXPENSE,
  ERROR_EXPENSE,
  FETCH_EXPENSES,
  DELETE_EXPENSE,
  ADD_EXPENSE,
  UPDATE_EXPENSE
} from './types';
import axios from 'axios';

const baseurl =
  process.env.NODE_ENV == 'production'
    ? 'https://react-json-server-db.herokuapp.com'
    : 'http://localhost:5000';

const fetchExpense = () => async dispatch => {
  dispatch(isLoading());
  try {
    await axios.get(`${baseurl}/expenses`).then(res => {
      if (res.data) {
        // set time out - To slow down the data loading, so the customer can
        // see the spinner :-)
        setTimeout(() => {
          dispatch({
            type: FETCH_EXPENSES,
            payload: res.data
          });
        }, 1000);
      } else {
        dispatch({
          type: ERROR_EXPENSE,
          payload: 'Cant perform fetch all expense operation!'
        });
      }
    });
  } catch (error) {
    dispatch({
      type: ERROR_EXPENSE,
      payload: 'Server error occured.'
    });
  }
};

// used for both delete all and delete single item
const deleteExpense = id => async dispatch => {
  dispatch(isLoading());
  try {
    await axios.delete(`${baseurl}/expenses/${id}`).then(res => {
      if (res.data) {
        dispatch({
          type: DELETE_EXPENSE,
          payload: true
        });

        dispatch(fetchExpense());
      } else {
        dispatch({
          type: ERROR_EXPENSE,
          payload: 'Cant run the delete operation!'
        });
      }
    });
  } catch (error) {
    dispatch({
      type: ERROR_EXPENSE,
      payload: 'Server error occured.'
    });
  }
};

const addNewExpense = data => async dispatch => {
  dispatch(isLoading);
  try {
    await axios({
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      url: `${baseurl}/expenses/`,
      data
    }).then(res => {
      if (res.data) {
        dispatch({
          type: ADD_EXPENSE,
          payload: true
        });

        dispatch(fetchExpense());
      } else {
        dispatch({
          type: ERROR_EXPENSE,
          payload: 'No data found!'
        });
      }
    });
  } catch (error) {
    dispatch({
      type: ERROR_EXPENSE,
      payload: 'Server Error occured. Please try again'
    });
  }
};

const updateExpense = (id, data) => async dispatch => {
  dispatch(isLoading);
  try {
    await axios({
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'put',
      url: `${baseurl}/expenses/${id}`,
      data
    }).then(res => {
      if (res.data) {
        dispatch({
          type: UPDATE_EXPENSE,
          payload: true
        });

        dispatch(fetchExpense());
      } else {
        dispatch({
          type: ERROR_EXPENSE,
          payload: true
        });
      }
    });
  } catch (error) {
    dispatch({
      type: ERROR_EXPENSE,
      payload: 'Server error occured.'
    });
  }
};

const isLoading = () => {
  return {
    type: LOADING_EXPENSE,
    payload: true
  };
};

export { fetchExpense, deleteExpense, addNewExpense, updateExpense };
