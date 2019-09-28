import React, { useState, useRef, useEffect } from 'react';
import { MDBInput, MDBAlert } from 'mdbreact';
import PropTypes from 'prop-types';
import SelectBox from './SelectBox';
import uuidv4 from 'uuid';
import { currentDate } from '../utils';
const ExpenseFormElements = ({ onFormSubmit, onCancel, edit, inputs }) => {
  const [formInputs, setFormInputs] = useState({
    title: inputs.title ? inputs.title : '',
    description: inputs.description ? inputs.description : '',
    amount: inputs.amount ? inputs.amount : '',
    category: inputs.category ? inputs.category : 1
  }); // set a default dropdown value 1

  const inputRef = useRef(null);
  const pageRef = useRef(null);

  useEffect(() => {
    if (inputRef) inputRef.current.setFocus();
    if (edit.status && pageRef) {
      pageRef.current.scrollIntoView();
    }
  }, [inputs, edit.status]);

  const [hasFieldError, setHasFieldError] = useState({
    isError: false,
    message: null
  });
  const onChangeHandler = e => {
    let value = '';
    let name = '';
    // hack to check the input is select. Select return a number only 1,2.. etc.
    if (e.target) {
      value = e.target.value;
      name = e.target.name;
      e.persist();
    } else {
      name = 'category';
      value = parseInt(e);
    }
    setFormInputs(values => ({
      ...values,
      cid: uuidv4(),
      [name]: value,
      createdOn: currentDate()
    }));
  };
  const cancelHandler = () => {
    onCancel(false);
  };
  const getSelectedOption = x => {
    console.log('selected option on edit is', x);
  };
  const submitHandler = e => {
    e.preventDefault();
    setHasFieldError(value => ({ ...value, isError: false }));
    e.target.className += ' was-validated';

    if (
      formInputs.title &&
      formInputs.description &&
      formInputs.amount &&
      formInputs.category
    ) {
      if (formInputs.amount < 5 || formInputs.amount > 3000) {
        setHasFieldError(value => ({
          ...value,
          isError: true,
          message: 'Enter $ amount between 5 and 3000'
        }));
      } else {
        onFormSubmit({ data: formInputs, id: inputs.id });
      }
    } else {
      setHasFieldError(value => ({
        ...value,
        isError: true,
        message: 'Please fill all the fields'
      }));
    }
  };

  return (
    <>
      <form onSubmit={submitHandler} noValidate ref={pageRef}>
        <div className='modal-body mx-3'>
          {hasFieldError.isError && (
            <MDBAlert color='danger'>{hasFieldError.message}</MDBAlert>
          )}
          <div className='md-form mb-5'>
            <MDBInput
              ref={inputRef}
              label='Title'
              group
              type='text'
              name='title'
              id='title'
              required
              error='Enter title'
              success='right'
              maxLength='40'
              value={formInputs.title}
              onChange={onChangeHandler}
            >
              {' '}
              <div className='invalid-feedback'>Please enter title.</div>
            </MDBInput>
          </div>
          <div className='md-form mb-5'>
            <MDBInput
              label='Amount'
              group
              type='number'
              name='amount'
              required
              error='Enter amount'
              success='right'
              value={formInputs.amount}
              onChange={onChangeHandler}
            >
              {' '}
              <div className='invalid-feedback'>
                Please enter amount between 5 - 3000.
              </div>
            </MDBInput>
          </div>
          <div className='md-formd mb-4'>
            <SelectBox
              name='category'
              style='custom-select'
              label={edit ? 'Change category' : 'Select category'}
              selected={formInputs.category}
              optionSelect={getSelectedOption}
              optionChange={onChangeHandler}
            />
          </div>
          <div className='md-form mb-4'>
            <MDBInput
              label='Description'
              group
              type='textarea'
              name='description'
              required
              error='Enter description'
              success='right'
              value={formInputs.description}
              onChange={onChangeHandler}
            >
              {' '}
              <div className='invalid-feedback'>Please enter description.</div>
            </MDBInput>
          </div>
        </div>
        <div className='mt-3 mb-2 d-flex justify-content-center align-items-center'>
          <button type='submit' className='btn btn-grad'>
            Save
          </button>
          <a
            href={null}
            className='text-warning ml-3 font-weight-normal'
            onClick={cancelHandler}
          >
            CANCEL
          </a>
        </div>
      </form>
    </>
  );
};

ExpenseFormElements.defaultProps = {
  inputs: [
    {
      title: '',
      description: '',
      amount: '',
      category: 1
    }
  ]
};

export default ExpenseFormElements;
