import React, { useState, useRef, useEffect } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from 'mdbreact';
import SelectBox from './SelectBox';

import { useDispatch } from 'react-redux';

import { deleteExpense, updateExpense } from '../actions/expenseActions';
import { IS_EDIT_EXPENSE } from '../actions/types';

import CategoryIcon from './CategoryIcon';
import ExpenseFormElements from './ExpenseFormElements';

const ExpenseItem = ({ expenses }) => {
  const dispatch = useDispatch();

  const inputRef = useRef(null);
  const [isEdit, setIsEdit] = useState({ status: false, id: null });

  const deleteExpenseHandler = id => {
    dispatch(deleteExpense(id));
  };

  const onEditChangeHandler = id => {
    setIsEdit({ id, status: true });
  };
  const onCancelHandler = key => {
    setIsEdit(value => ({ ...value, status: key }));
  };

  const submitHandler = value => {
    dispatch(updateExpense(value.id, value.data));
    setIsEdit(value => ({ ...value, status: false }));
  };
  useEffect(() => {
    //editExpense
    dispatch({ type: IS_EDIT_EXPENSE, payload: isEdit.status });
  }, [isEdit]); // dispatching isEdit value, to show-hide the global buttons

  if (expenses) {
    return expenses.map(res => {
      return (
        <MDBCard className='mt-4 mb-4' key={res.id}>
          <MDBCardBody>
            {isEdit.id === res.id && isEdit.status ? (
              <ExpenseFormElements
                onFormSubmit={submitHandler}
                onCancel={onCancelHandler}
                edit={isEdit}
                inputs={{
                  id: res.id,
                  title: res.title,
                  category: res.category,
                  amount: res.amount,
                  description: res.description
                }}
              />
            ) : (
              <>
                <div className='d-flex justify-content-between align-items-center mb-2'>
                  <div className='mr-2'>
                    <CategoryIcon icons={res.category} />
                  </div>
                  <div className='flex-grow-1'>
                    <h5 className='mb-0 text-capatilize '>{res.title}</h5>
                  </div>
                  <div className=''>
                    <MDBDropdown className='dropdown-menu-dotts'>
                      <MDBDropdownToggle>
                        <i className='fas fa-ellipsis-h'></i>
                      </MDBDropdownToggle>
                      <MDBDropdownMenu right>
                        <MDBDropdownItem
                          onClick={() => onEditChangeHandler(res.id)}
                          value='edit'
                          id={res.id}
                        >
                          <i className='fas fa-pencil-alt mr-1'></i> Edit
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          onClick={() => {
                            deleteExpenseHandler(res.id);
                          }}
                          value='delete'
                        >
                          <i className='fas fa-trash mr-1'></i> Delete
                        </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </div>
                </div>
                <span className='text-sm text-muted'>
                  {res.createdOn} | Expense category&nbsp;&nbsp;
                </span>
                <SelectBox
                  selected={res.category}
                  style='no-selectbox'
                  disable={true}
                />
                <div className='mt-1'>
                  <span className='text-mute'>You spent </span>
                  <strong>${parseFloat(res.amount).toFixed(2)}</strong>
                </div>
                <p className='mt-2'>{res.description}</p>
              </>
            )}
          </MDBCardBody>
        </MDBCard>
      );
    });
  } else {
    return '';
  }
};
export default ExpenseItem;
