import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MDBContainer, MDBRow, MDBCol, MDBMask } from 'mdbreact';

import { fetchExpense } from '../actions/expenseActions';
import AlertBox from './AlertBox';
import LoadingBox from './LoadingBox';

import ExpenseItem from './ExpenseItem';
import TotalExpense from './TotalExpense';
import AddExpenseModalBox from './AddExpenseModalBox';
import GlobalActionButtons from './GlobalActionButtons';

const Dashboard = () => {
  // initilize useSelector or connect in prev redux-react. version
  const expenseState = useSelector(state => state.expenses);
  // initiate dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    const loadExpense = () => {
      dispatch(fetchExpense());
    };
    loadExpense();
  }, [dispatch]);

  return (
    <div className='dashboard-container body-container about-container'>
      <MDBContainer>
        <MDBMask>
          {/* className='flex-center flex-column text-white' */}
          <h3>
            {' '}
            DASHBOARD{' '}
            <span className='text-muted text-sm'>Add upto 5 expense</span>
          </h3>
        </MDBMask>
        <hr />
        {expenseState.loading && <LoadingBox />}
        {
          <AlertBox
            message={{
              add: expenseState.hasAdded,
              deleted: expenseState.hasDeleted,
              error: expenseState.error,
              updated: expenseState.hasUpdated
            }}
          />
        }
        <div className='global-button-container col-sm-1'>
          <GlobalActionButtons
            expenses={expenseState.expense}
            edit={expenseState.editExpense}
          />
        </div>
        <MDBRow className='d-flex justify-content-center'>
          {expenseState.expense != '' ? (
            <MDBCol sm='12'>
              <MDBRow>
                <MDBCol lg='8' md='7' sm='12'>
                  <ExpenseItem expenses={expenseState.expense} />
                </MDBCol>
                <MDBCol lg='4' md='5' sm='12'>
                  <TotalExpense expense={expenseState.expense} />
                </MDBCol>
              </MDBRow>
            </MDBCol>
          ) : (
            <MDBCol md='12' sm='12'>
              {' '}
              <div className='d-flex align-items-center mt-5 justify-content-center'>
                <div>
                  <h3 className='text-center text-info'> No expense found! </h3>
                  <p className='text-center text-info'>
                    You can add up to 5 expense
                  </p>
                </div>
              </div>
            </MDBCol>
          )}
          <AddExpenseModalBox />
        </MDBRow>
      </MDBContainer>
    </div>
  );
};
export default Dashboard;
