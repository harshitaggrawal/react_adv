import React, { useState,createContext } from 'react'
import { NavLink } from 'react-router-dom'
import Navlinks from './Navlinks'

 //! we use creteContext
export const navbarContext=createContext();
 //console.log(navbarContext);  //it return object

const Navbar = () => {
   

    const [user,setUser]=useState({name:"Rahul"});
    const logOut=()=>{
        setUser(null);
    }
  return (
    <navbarContext.Provider value={{user,logOut}}>
    <nav>
      <h2>Context api</h2>
      <Navlinks />
    </nav>
    </navbarContext.Provider>
  )
}

export default Navbar

