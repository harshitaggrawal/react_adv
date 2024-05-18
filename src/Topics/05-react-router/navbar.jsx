import React from 'react'

import {Link, NavLink} from 'react-router-dom';
const Navbar
 = () => {
  return (
   <nav className='navbar'>
    <div className='logo'>
    <Link to="/">Logo</Link>
    </div>
    <div className='nav-links'>
    <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/project">Project</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/blogs'>Blogs</NavLink></li>
        <li><NavLink to='/users'>Users</NavLink></li>

        <li><NavLink to="/contact">Contacts</NavLink></li>
    </ul>
    </div>
    <div className='nav-btn-group'>
        <button className='btn-sign-in'><Link to="/signup">Signup</Link></button>
        <button className='btn-log-in'><Link to="/login">Login</Link></button>

    </div>
   </nav>
  )
}

export default Navbar

