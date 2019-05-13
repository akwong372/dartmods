import React from 'react';

const alertBar = (props) => (
  <div className={'alert alert-' + props.status} role='alert'>
    {props.message}
  </div>
);

export default alertBar;