import React from 'react'
import { useState } from 'react'
const UseStatelast = () => {
    const [number,setNumber]=useState(0);
    const increment=()=>{
        /*
        setNumber(number+1);
        console.log(number); //? this is not synchronized way it increse number after 1
        */
       
       setNumber((currentState)=>{
       const newState=currentState+1;
       console.log(newState);
        return newState;
       })
      
      setTimeout(()=>{
        setNumber((currentState)=>{
            
            console.log(currentState);
             return currentState+1;
            })
      },3000);
    }
  return (
    <div>
      <h1>value: {number}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default UseStatelast