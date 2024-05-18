import React, { useState } from 'react'

const ToggleChallenge = (props) => {
  const {heading,details}=props;
    const [value,setValue]=useState(false);
    const toggleAlert=()=>{
        setValue(!value)
    }
   
  return (
    <div>
     
        <button onClick={toggleAlert}>{value?"Hide Toggle": "Show Toggle"}</button>
        {value && <Alert heading={heading} details={details}/>}

    </div>
  )
};

const Alert=({heading,details})=>{
  return(
    <div>
      <h2>{heading}</h2>
      <p>{details}</p>
    </div>
  )
}

export default ToggleChallenge
