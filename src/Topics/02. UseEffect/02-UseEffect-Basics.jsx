import {useState,useEffect} from 'react'


const UseEffectBasics = () => {
    const [value,setValue]=useState(0);
   
    // useEffect(function() {
    //     console.log("hello user");  //? its work initail render and re-render
    // },[]); 
    // //? Empty array dependency means to work only initail render

    useEffect(function() {
        console.log("hello user");  //? its work initail render and re-render
    },[value]); 
    //? run on initial render and also re-render when value is update 
  return (
    <div>
      <h1>value: {value}</h1>
      <button onClick={()=>{setValue(value+1)}}>increment</button>
    </div>
  )
}

export default UseEffectBasics
