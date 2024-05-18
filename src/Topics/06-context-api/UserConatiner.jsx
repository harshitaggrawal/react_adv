import React from 'react'
import { navbarContext } from './Navbar';
import { useContext } from 'react';
const UserConatiner = () => {
    const  value=useContext(navbarContext);
    console.log(value);
    
  return (
    <div>
        {value.user? <>
        <p>Hello there ,{value.user.name}</p>
      <button onClick={value.logOut}>LogOut</button>
      </>:
      (
        <p>Please login</p>
      )
      }
       
      
    </div>
  )
}

export default UserConatiner
