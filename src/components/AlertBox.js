import React from 'react';
import { MDBNotification } from 'mdbreact';
const AlertBox = ({ message }) => {
  const { add, deleted, error, updated, confirm, text } = message;
  console.log(message);

  if (add || updated) {
    return (
      <MDBNotification
        show
        fade
        autohide={4000}
        icon='bell'
        className='spcl-message'
        iconClassName={`text-success`}
        title='Message'
        message={
          add
            ? 'Data has been added successfully'
            : 'Data has been updated successfully'
        }
      />
    );
  } else if (deleted) {
    return (
      <MDBNotification
        show
        fade
        autohide={4000}
        icon='bell'
        className='spcl-danger'
        iconClassName={`text-danger`}
        title='Message'
        message={'Data has been deleted successfully'}
      />
    );
  } else if (error) {
    return (
      <MDBNotification
        show
        fade
        autohide={8000}
        icon='bell'
        className='spcl-warning'
        iconClassName={`text-danger`}
        title='Message'
        message={error ? error : 'Error occured, please try again'}
      />
    );
  } else if (confirm) {
    return (
      <div
        className='toast'
        role='alert'
        aria-live='polite'
        aria-atomic='true'
        data-delay='10000'
      >
        <div
          role='alert'
          aria-live='assertive'
          aria-atomic='true'
          className='spcl-warning'
        >
          <input type='button' />
          test
        </div>
      </div>
      // <MDBNotification
      //   show
      //   fade
      //   // autohide={8000}
      //   icon='bell'
      //   className='spcl-warning'
      //   iconClassName={`text-danger`}
      //   title='Message'
      //   message={text ? text : 'Need your confirmation'}
      // >
      //   <input type='button'>test</input>
      // </MDBNotification>
    );
  } else {
    return null;
  }
};

AlertBox.defaultProps = {
  message: [
    {
      message: '',
      add: false,
      edit: false,
      delete: false,
      updated: false,
      confirm: false
    }
  ]
};
export default AlertBox;
