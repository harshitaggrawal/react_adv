import React, { useState } from 'react'

const Otherinput = () => {
    const[shipping,setShipping]=useState(false);
    const  handleShpping=(e)=>{
        console.log(e.target.checked);
        setShipping(e.target.checked);
    }

    const language=['Html','Css','JavaScript','Java'];
    const [lang,setlang]=useState('Html');
    const HandleLang=(e)=>{
        setlang(e.target.value);
        console.log(e.target.value);
    }

   
  return (
    <div>
      <form action="">
        <h2>Other Type  Inputs</h2>
        <div>
            <label htmlFor="shipping">Free Shipping</label>
            <input type="checkbox"  name='shipping' id='shipping' onChange={handleShpping} checked={shipping} />
        </div>
        <div>
            <label htmlFor="lang">Select Languge</label>
            <select name="lang" id="lang" onChange={HandleLang}>
                {language.map((ele,index)=>{
                    return <option key={index} value={ele}>
                        {ele}
                    </option>
                })}
            </select>
        </div>
        
      </form>
    </div>
  )
}

export default Otherinput
