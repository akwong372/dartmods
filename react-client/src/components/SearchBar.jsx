import React from 'react';

const searchBar = (props) => (
  <form className='input-group form-inline navbar-nav navbarSearch flex-row mr-sm-2 mb-sm-2' onSubmit={(e)=>{e.persist(); props.sortByTags(e)}}>
    <input className='form-control' type='search' placeholder='Search Tags...'></input>
    <div className='input-group-append'>
      <button className='btn btn-secondary' type='submit'>
        <i className="fas fa-search"></i>
      </button>
    </div>
  </form>
);

export default searchBar;