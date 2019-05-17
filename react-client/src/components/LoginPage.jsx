import React from 'react';

const loginPage = (props) => {

  const loginMode = (
    <div className='container-fluid text-center'>
      <h1>User Login</h1>
      <form onSubmit={(e) => { e.persist(); props.loginSubmit(e) }}>
        <div className="formElement">
          <input type="text" id='usernameLogin' placeholder='username' size='25' required />
        </div>
        <div className="formElement">
          <input type="password" id='passwordLogin' placeholder='current-password' size='25' autoComplete='password' required />
        </div>
        <div className="submissionButtonContainer">
          <button type="button" className="btn btn-secondary mx-sm-1" onClick={() => props.loginCancel()}>Cancel</button>
          <button type="submit" className='btn btn-success mx-sm-1'>Login</button>
        </div>
        <br />
        <button type="button" className='btn btn-default' onClick={() => props.loginToggle()}>Create account</button>
      </form>
    </div>
  );

  const createMode = (
    <div className='container-fluid text-center'>
      <h1>Create User</h1>
      <form onSubmit={(e) => { e.persist(); props.loginCreate(e) }}>
        <div className="formElement">
          <input type="text" id='usernameCreate' placeholder='username' size='25' required />
        </div>
        <div className="formElement">
          <input type="password" id='passwordCreate' placeholder='password' autoComplete='new-password' size='25' required />
        </div>
        <div className="formElement">
          <input type="password" id='passwordCreateConfirm' placeholder='retype password' size='25' autoComplete='new-password' required />
        </div>
        <div className="submissionButtonContainer">
          <button type="button" className="btn btn-secondary mx-sm-1" onClick={() => props.loginCancel()}>Cancel</button>
          <button type="submit" className='btn btn-success mx-sm-1'>Create</button>
        </div>
        <br />
        <button type="button" className='btn btn-default' onClick={() => props.loginToggle()}>Existing user</button>
      </form>
    </div>
  );

  return props.loginMode === 0 ? loginMode : createMode;
};

export default loginPage;