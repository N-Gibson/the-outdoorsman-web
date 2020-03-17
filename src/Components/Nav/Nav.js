import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to='/trails'> 
        <button>Trails</button>
      </Link>
      <Link to='/campgrounds'>
        <button>Campgrounds</button>
      </Link>
    </nav>
  )
}

export default Nav;
