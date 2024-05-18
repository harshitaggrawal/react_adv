import React, { useState } from 'react'

const Controlledinput = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    function handleChange(e) {      
        setName(e.target.value);      
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Name: "+name);
        console.log("Email: "+email);
        setName("");
        setEmail("");
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <h2>Controlled Input</h2>
            <div>
                <label htmlFor="name">Name</label>
                <br />
                <input
                 onChange={handleChange} 
                 type="text" 
                 id='name' 
                 name='name' 
                 value={name} 
                />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <br />
                <input
                 
                 type="email" 
                 id='email' 
                 name='email'
                 value={email}
                 onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>

            <br />
            <button>Submit</button>

        </form>
    )
}

export default Controlledinput
