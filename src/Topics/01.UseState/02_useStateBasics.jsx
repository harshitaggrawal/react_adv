import {useState} from 'react'

const UseStateBasics = () => {
    console.log(useState()); //?return array[undefined, function]
    //?? First  value is used to store any type of data
    console.log(useState(1));
    console.log(useState("Harshit"));
    const [number,setnumber]=useState(1);
    
    
    
    function handleClicked()
    {
        setnumber(number+1);
    }

  return (
    <div>
    <h1>Value: {number} </h1>
    <button onClick={handleClicked} >Increment</button>
    </div>
  )
}

export default UseStateBasics
