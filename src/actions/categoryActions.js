import { LOADING_CATEGORY, FETCH_CATEGORY, ERROR_CATEGORY } from './types';
import axios from 'axios';

const baseurl =
  process.env.NODE_ENV == 'production'
    ? 'https://react-json-server-db.herokuapp.com'
    : 'http://localhost:5000';

const fetchCategory = () => async dispatch => {
  dispatch(isLoading());

  try {
    await axios.get(`${baseurl}/category`).then(res => {
      if (res.data) {
        dispatch({
          type: FETCH_CATEGORY,
          payload: res.data
        });
      } else {
        dispatch({
          type: ERROR_CATEGORY,
          payload: 'No data found!'
        });
      }
    });
  } catch (error) {
    dispatch({
      type: ERROR_CATEGORY,
      payload: 'Server error occured.'
    });
  }
};

const isLoading = () => {
  return {
    type: LOADING_CATEGORY
  };
};

export { fetchCategory };
