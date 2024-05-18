
import { useState } from "react";
const UseStateObject = () => {
    const [person1,setperson]=useState({
        name:"Rahul",
        age:18,
        job:"Developer",
    });
    console.log(person1);
    console.log({...person1,age:20});

    const updateKey=()=>{
       setperson({...person1,name:"Harshit"});
    }

  return (
    <div>
       <h1>Person details</h1>
               <h3>{person1.name}</h3> 
               <p> {person1.age}</p>
               <p> {person1.job}</p>
            <button onClick={updateKey}>Update value</button>

   </div>
     
  )
}

export default UseStateObject
