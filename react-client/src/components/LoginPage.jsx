import React from 'react';

const loginPage = (props) => (
  <div className='container-fluid text-center'>
    <h1>User Login</h1>
    <form action="">
      <div className="formElement">
        <input type="text" id='usernameLogin' placeholder='username' size='25' required />
      </div>
      <div className="formElement">
        <input type="text" id='passwordLogin' placeholder='password' size='25' required />
      </div>
      <div className="submissionButtonContainer">
        <button type="button" className="btn btn-secondary mx-sm-1" onClick={() => props.loginCancel()}>Cancel</button>
        <button type="submit" className='btn btn-success mx-sm-1'>Submit</button>
      </div>
    </form>
  </div>
);

export default loginPage;