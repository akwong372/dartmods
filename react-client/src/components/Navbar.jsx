import React from 'react';

const Navbar = () => (
  <div>
    <nav className="navbar navbar-expand-lg" id='navbar'>
      <div className='container-fluid'>
        <span className="navbar-brand h1" id='navbarTitle'>Page Title</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <div className='nav-item dropdown mr-sm-2'>
            <button className='btn btn-secondary dropdown-toggle nav-link' type='button' id='navbarDropdown' data-toggle='dropdown'>click</button>
            <div className='dropdown-menu' id='navbarDropdownInner'>
              <button className='dropdown-item' type='button' id='navbarDropdownItem'>1</button>
              <button className='dropdown-item' type='button' id='navbarDropdownItem'>2</button>
              <button className='dropdown-item' type='button' id='navbarDropdownItem'>3</button>
            </div>
          </div> */}
          <ul className='navbar-nav'>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
        </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
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