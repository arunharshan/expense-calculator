import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteExpense } from '../actions/expenseActions';
import { openModel } from '../actions/modelAction';

//Calling on Clear All button-  has a great performance issue when deleting a large number of item at once hence limitting the add count by < 8 or so.

const GlobalActionButtons = ({ expenses, edit }) => {
  const dispatch = useDispatch();
  const modal = useSelector(state => state.model.hasModel);

  const deleteAllHandler = async () => {
    await expenses.map(res => {
      dispatch(deleteExpense(res.id));
    });
  };

  const openModelHandler = () => {
    dispatch(openModel());
  };

  return (
    <>
      {expenses && !edit && !modal && (
        <>
          <button
            type='button'
            className='btn round btn-grad'
            onClick={openModelHandler}
            disabled={expenses.length >= 4}
          >
            <i className='fas fa-plus fa-lx'></i>
          </button>
          <button
            type='button'
            className={`btn btn-danger round ${expenses.length <= 0 && 'hide'}`}
            onClick={deleteAllHandler}
          >
            <i className='fas fa-trash-alt fa-lx'></i>
          </button>
        </>
      )}
    </>
  );
};

export default GlobalActionButtons;
