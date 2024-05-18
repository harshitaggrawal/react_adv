import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';   //hooks
const user={
    username:"Rahul",
    password:"1234"
};


const Login = () => {
   const navigate=useNavigate();
    const [userData ,setData] =useState({
        username:"",
        password:""
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(userData);
        setData({
            username:"",
            password:""
        });

        if(user.username===userData.username && user.password===userData.password)
        {
            console.log("logged in!");
            // navigate("/");   // path when we want to go
            navigate(-1); // if we put -1 then it will go the prevoius page where when we go for login  
        }
        else{
            console.log("Wrong value");
            navigate("/signup")
        }
        
    }
    const handleChange=(e)=>{
        setData({
            ...userData,
            [e.target.name]:e.target.value
        })
    }
  return (
    <div>
     <h1> login</h1>
     <form action="" onSubmit={handleSubmit}>
    <div>
        <label htmlFor='username' >UserName</label>
        <input type='text' name='username' id='username' value={userData.username} onChange={handleChange}></input>
    </div>
    <div>
        <label htmlFor='password' >Password</label>
        <input type='password' name="password" id='password' value={userData.password} onChange={handleChange}></input>
    </div>
    <button type='submit'> login</button>
     </form>
    </div>
  )
}



export default Login
