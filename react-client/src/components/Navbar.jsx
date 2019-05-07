import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => (
  <div>
    <nav className="navbar navbar-expand-lg" id='navbar'>
      <div className='container-fluid'>
        <span className="navbar-brand h1" id='navbarTitle'>Page Title</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className='nav-item dropdown mr-sm-2'>
            <button className='btn btn-secondary dropdown-toggle nav-link' type='button' id='navbarDropdown' data-toggle='dropdown'>click</button>
            <div className='dropdown-menu' id='navbarDropdownInner'>
              <button className='dropdown-item' type='button' id='navbarDropdownItem'>1</button>
              <button className='dropdown-item' type='button' id='navbarDropdownItem'>2</button>
              <button className='dropdown-item' type='button' id='navbarDropdownItem'>3</button>
            </div>
          </div>
          <form className='form-inline'>
            <button className='btn btn-outline-success my-2 my-sm-0'>Search</button>
            <input className='form-control ml-sm-2' type="search" placeholder="Search Title..."></input>
          </form>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;