import React from 'react'
import { NavLink, Outlet, Route, Routes } from 'react-router-dom'
import Blogs1 from './Blogs1'
import Blogs2 from './Blogs2'
import Blogs3 from './Blogs3'

const Blogs = () => {
  return (
    <div>
    <h1>Blogs</h1>
    <div>
        
        <NavLink to="blogs1">Blog 1</NavLink>
       

    </div>
    <div>
      
        <NavLink to="blogs2">Blog 2</NavLink>
       
    </div>
    <div>
        
        <NavLink to="blogs3">Blog 3</NavLink>
       
    </div>

    <Outlet/>
    {/* we can use both method  if we make routes here then we dont need to make routes in app.jsx means nested routes  */}
    {/* <Routes>
        <Route path='blogs1' element={<Blogs1/>} />
          <Route path='blogs2' element={<Blogs2/>} />
          <Route path='blogs3' element={<Blogs3/>} />
    </Routes> */}
    </div>
  )
}

export default Blogs
