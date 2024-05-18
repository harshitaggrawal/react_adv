import { useState } from 'react';
import {people} from "/public/data"

const UseStatearray = () => {
   const [data,setData]=useState(people);

   function handledClicked(){
    setData([]);
   }

   function removeHandled(arg){
    const newPeople=data.filter(function(person){
        return person.id != arg
    });
    setData(newPeople);
   
   }
   const RefreshClicked=()=>{
    setData(people);
   }
   const handledAdd=()=>{
      const newName={
        id:5,
        name:"Sakshi",
      }
      setData([...data,newName]);
   }

  return (
    <div>
      <h1>Use State Array</h1>
      <button onClick={RefreshClicked}>Refresh</button>
      {data.map(({id,name})=>{
        return <div key={id}>
            {name}  <button onClick={() => removeHandled(id)}>Remove</button>
        </div>
      })}
      <button onClick={handledAdd}>Add </button>

      <button onClick={handledClicked}>Clear List</button>
    </div>
    
  )
}

export default UseStatearray
