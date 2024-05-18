import React from 'react'

import {Link, NavLink, Outlet} from 'react-router-dom';
const Users = ({users}) => {
  return (
    <div>
      <h1>Users</h1>
      <ul>

        {users.map((user)=>{
            return(
                <li key={user.id}>
                    <Link to={`${user.id}`}>{user.name}</Link>
                </li>
            );
        })}
      </ul>
      <Outlet/>
    </div>
  )
}

export default Users
