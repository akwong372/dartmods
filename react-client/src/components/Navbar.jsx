import React from 'react';

const Navbar = (props) => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id='navbar'>
      <div className='container-fluid'>
        <span className="navbar-brand h1" id='navbarTitle'>Page Title</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className='nav-item dropdown mr-sm-2 mb-sm-2'>
            <button className='btn btn-secondary dropdown-toggle nav-link' type='button' id='navbarDropdown' data-toggle='dropdown'>Order By: </button>
            <div className='dropdown-menu' id='navbarDropdownInner'>
              <button className='dropdown-item navbarDropdownItem' type='button' id='dropdownNew' onClick={props.sortByDate}>New</button>
              <button className='dropdown-item navbarDropdownItem' type='button' id='dropdownLikes'>Likes</button>
            </div>
          </div>
          <form className='input-group form-inline navbar-nav navbarSearch flex-row mr-sm-2 mb-sm-2'>
            <input className='form-control' type='search' placeholder='Search Tags...'></input>
            <div className='input-group-append'>
              <button className='btn btn-secondary' type='button'>
                <i className="fas fa-search"></i>
              </button>
            </div>
          </form>
          <button type='button' className='btn btn-success mr-sm-2 mb-sm-2' data-toggle="modal" data-target="#createEntryModal">
            Create
          </button>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;