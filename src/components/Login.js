import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBMask } from 'mdbreact';

import fetchAuth from '../actions/authActions';
import { getAuth } from '../utils';
import AlertBox from './AlertBox';
import LoadingBox from './LoadingBox';

import { isMobile } from '../utils';

const Login = props => {
  // check if the user is already Sign in then dont show login page
  if (getAuth() !== null) {
    props.history.push('/dashboard');
  }
  const loginRef = useRef(null);
  useEffect(() => {
    if (isMobile && loginRef) loginRef.current.setFocus();
  }, []); // Set userName focus if not a mobile device.

  // set the Store values to a local variable
  const authResult = useSelector(state => state.auth);

  // Dispatch an action. Create the dispatch instance
  const dispatch = useDispatch();

  // Create a state variable to store input values
  const [userCredentials, setUserCredentials] = useState({});

  // set the username and password to the userCredential variable
  const onChangeHandler = e => {
    e.persist();
    setUserCredentials(values => ({
      ...values,
      [e.target.name]: e.target.value
    }));
  };

  // submit the form
  // Dispatch the submission to the action
  // use async since the redirect is not working along with Action
  const onSubmitHandler = e => {
    e.preventDefault();
    e.target.className += ' was-validated';
    if (userCredentials.username && userCredentials.password) {
      dispatch(fetchAuth(userCredentials));
      props.history.push('/dashboard');
    }
  };

  const hasLoading = () => {
    return authResult ? authResult.loading == true ? <LoadingBox /> : '' : '';
  };

  return (
    <MDBContainer>
      {hasLoading()}
      <AlertBox message={{ error: authResult.error }}></AlertBox>
      <MDBMask className='flex-center flex-column text-white text-center'>
        <h1 className='text-brand mt-5'>SIGN IN</h1>
        <img alt='login image' src='../assets/account.png' className='' />
        <small className='text-info'>
          {' '}
          username/password: user/user -or- guest/guest{' '}
        </small>
      </MDBMask>
      <MDBRow className='d-flex justify-content-center'>
        <MDBCol sm='6'>
          <form onSubmit={onSubmitHandler} noValidate className='light'>
            <div className='grey-text'>
              <MDBInput
                ref={loginRef}
                label='Username Eg: user or guest'
                group
                type='text'
                name='username'
                required
                error='Enter username'
                success='right'
                onChange={onChangeHandler}
              >
                {' '}
                <div className='invalid-feedback'>Please enter username.</div>
              </MDBInput>
              <MDBInput
                label='Password Eg: user or guest'
                group
                type='password'
                name='password'
                error='Enter password'
                onChange={onChangeHandler}
                required
              >
                <div className='invalid-feedback'>Please enter password.</div>
              </MDBInput>
            </div>
            <div className='text-center'>
              <button type='submit' className='btn btn-grad'>
                Sign In
              </button>
              {/* <MDBBtn className='z-depth-2' color='pink' rounded type='submit'>
                Sign In
              </MDBBtn> */}
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
