import React, { useState } from 'react'
//? we dont use name attributs in innput field we use checked
const Radioinput = () => {
    const [gender,setGender]=useState('male');

    const handleGEnderChange=(e)=>{
        setGender(e.target.value);
        console.log(e.target.value);
    }
  return (
    <div>
      <form action="">
        <h1>Radio Input</h1>
        <label htmlFor="">Male</label>
        <input type="radio" value='male' checked={gender==='male'} onChange={handleGEnderChange} />
        <label htmlFor="">female</label>
        <input type="radio" value='female' checked={gender==='female'} onChange={handleGEnderChange} />
      </form>
    </div>
  )
}

export default Radioinput
