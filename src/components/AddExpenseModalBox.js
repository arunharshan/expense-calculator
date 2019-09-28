import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MDBModal, MDBModalBody } from 'mdbreact';

import ExpenseFormElements from './ExpenseFormElements';

import { closeModel } from '../actions/modelAction';
import { addNewExpense } from '../actions/expenseActions';

const AddExpenseModalBox = () => {
  const modelState = useSelector(state => state.model);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(modelState.hasModel ? true : false);
  const [hasFieldError, setHasFieldError] = useState({
    isError: false,
    message: null
  });

  useEffect(() => {
    setIsOpen(modelState.hasModel ? true : false);
  }, [modelState, hasFieldError]);

  const onCancelHandler = () => {
    dispatch(closeModel());
    setHasFieldError({
      isError: false,
      message: null
    });
  };
  const submitHandler = value => {
    dispatch(addNewExpense(value.data));
    dispatch(closeModel());
  };

  return (
    <>
      <MDBModal isOpen={isOpen} backdrop={false}>
        <MDBModalBody className='modal-body'>
          <div className='modal-header text-center'>
            <h4 className='modal-title w-100 font-weight-bold'>Add Expense</h4>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
              onClick={onCancelHandler}
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <ExpenseFormElements
            onFormSubmit={submitHandler}
            onCancel={onCancelHandler}
            edit={false}
          />
        </MDBModalBody>
      </MDBModal>
    </>
  );
};

export default AddExpenseModalBox;
