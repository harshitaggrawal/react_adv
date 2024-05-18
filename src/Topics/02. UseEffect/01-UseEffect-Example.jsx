import { useState } from "react"

const UseEffectExample = () => {
    const [value,setValue]=useState(0);
    const greeting=()=>{
        console.log("hello useers");
    }
    greeting();  //? when component re-render it execute it this is not rright way
    //? the right way is to render function only one times  

  return (
    <div>
      <h1>value: {value}</h1>
      <button onClick={()=>{setValue(value+1)}}>increment</button>
    </div>
  )
}

export default UseEffectExample
