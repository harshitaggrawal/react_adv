import {useState,useEffect} from 'react'

const UseEffect_multiple = () => {
    const [value,setValue]=useState(0);
    const [secondvalue,setSecondValue]=useState(0);

    useEffect(()=>{
        console.log("Hello First User");
    },[value,secondvalue]);


    useEffect(()=>{
        console.log("Hello Second User");
    },[secondvalue]);
  return (
    <div>
      <h1>value: {value}</h1>
      <button onClick={()=>{setValue(value+1)}}>click me</button>


      <h1>Second value: {secondvalue}</h1>
      <button onClick={()=>{setSecondValue(secondvalue+1)}}>click me</button>

    </div>
  )
}

export default UseEffect_multiple
