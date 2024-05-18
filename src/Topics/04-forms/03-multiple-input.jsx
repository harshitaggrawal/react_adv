import React, { useState } from 'react'

const Multipleinput = () => {
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:""
    })
    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(user);
        setUser({
            name:"",
            email:"",
            password:"",
        });
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h2>Multiple inputs</h2>
        <div>
            <label htmlFor="name" >Name</label>
            <input type="text" name='name' id='name' value={user.name} onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="email" >Email</label>
            <input type="email" name='email' id='email' value={user.email} onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="password" >Password</label>
            <input type="password" name='password' id='password' value={user.password}  onChange={handleChange} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Multipleinput
