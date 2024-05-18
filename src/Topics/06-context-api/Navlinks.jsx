import React from 'react'
import { NavLink } from 'react-router-dom'
import UserConatiner from './UserConatiner'

const Navlinks = () => {
    
  return (
    <div>
      <ul>
       
      <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/about">About</NavLink>
        </li>
      </ul>
      <UserConatiner />
    </div>
  )
}

export default Navlinks
