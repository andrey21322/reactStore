import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  return (
   <>
    <div>
      <span className='logo'><Link to="/home" className='link'>House Staff</Link></span>
      <ul className='nav'>
        <li><Link to="/about" className='link'>About us</Link></li>
        <li><Link to="/contacts" className='link'>Contacts</Link></li>
      </ul> 
   </div>
   <div className='hr'></div>
   </>
  );
}

export default Header;
