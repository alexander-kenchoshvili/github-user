import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
  return (
      <div className='search'>
        <form onSubmit={props.onSubmit}  >
          <input type="text"
            onChange={props.onInputChange}
            placeholder='Type Username' />
          <button>Search</button>
        </form>
    </div>
  )
}

export default SearchBar