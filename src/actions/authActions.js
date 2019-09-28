import { FETCH_AUTH, ERROR_AUTH, LOADING_AUTH } from './types';
import axios from 'axios';

const baseurl =
  process.env.NODE_ENV == 'production'
    ? 'https://react-json-server-db.herokuapp.com'
    : 'http://localhost:5000';

const fetchAuth = user => async dispatch => {
  dispatch(isLoading());
  try {
    await axios
      .get(
        `${baseurl}/users?user_name=${user.username}&password=${user.password}`
      )
      .then(result => {
        if (result.data[0]) {
          dispatch({
            type: FETCH_AUTH,
            payload: result.data[0]
          });
        } else {
          dispatch({
            type: ERROR_AUTH,
            payload: `Could not find the user!. Try username/password as user/user -or- guest/guest`
          });
        }
      });
  } catch (error) {
    dispatch({ type: ERROR_AUTH, payload: 'something went wrong' });
  }
};

const isLoading = () => {
  return {
    type: LOADING_AUTH
  };
};

export default fetchAuth;
