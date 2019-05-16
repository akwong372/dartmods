import React from 'react';
import SearchBar from './SearchBar.jsx';

const Navbar = (props) => {

  const logoutButton = (
    <button type="button" className="btn btn-outline-success mr-sm-2 mb-sm-2" onClick={() => props.logoutSubmit()}>
      Logout
</button>
  );

  const loginButton = (
    <button type="button" className="btn btn-outline-success mr-sm-2 mb-sm-2" onClick={() => props.loginEnter()}>
      Login
</button>
  );

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" id='navbar'>
        <div className='container-fluid'>
          <span className="navbar-brand h1" id='navbarTitle'>DartMods</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className='nav-item dropdown'>
              <button className='btn btn-secondary dropdown-toggle nav-link mr-sm-2 mb-sm-2' type='button' id='navbarDropdown' data-toggle='dropdown'>Order By: </button>
              <div className='dropdown-menu' id='navbarDropdownInner'>
                <button className='dropdown-item navbarDropdownItem' type='button' id='dropdownNew' onClick={props.sortByDate}>New</button>
                <button className='dropdown-item navbarDropdownItem' type='button' id='dropdownLikes' onClick={props.sortByLikes}>Likes</button>
              </div>
            </div>
            <SearchBar sortByTags={props.sortByTags} />
            <button type='button' className='btn btn-success mr-sm-2 mb-sm-2' data-toggle="modal" data-target="#createEntryModal" disabled={!props.currentUser}>
              Create
          </button>
            {props.currentUser ? logoutButton : loginButton}
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;