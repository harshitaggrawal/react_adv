import React, { useState } from 'react'

const Userchallange = () => {
    const [user,setUser]=useState(null);
    const obj={
        name:"harshit",
        age:21,
        add:"mzn"
    };
     
    const login=()=>{
        setUser(obj)
    }
    const logout=()=>{
       setUser(null);
    }

  return (
    <div>
      {user? (
        <div>
            <h2>hello there ,{user.name} ,{user.age},{user.add}</h2>
            <button onClick={logout}> logout</button>
        </div>
      )
      :
      (
        <div>
            <h2>please login</h2>
            <button onClick={login}>login</button>
        </div>
      )};
    </div>
  )
}

export default Userchallange
