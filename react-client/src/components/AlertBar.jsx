import React from 'react';

const alertBar = (props) => (
  <div className={`container alert alert-${props.status} alert-dismissable fade show`} role='alert'>
    {props.message}
    <button type='button' className='close' data-dismiss='alert' onClick={props.alertDismiss}>&times;</button>
  </div>
);

export default alertBar;