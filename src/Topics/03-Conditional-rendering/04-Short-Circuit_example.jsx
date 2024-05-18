import React, { useState } from 'react'

const ShortCircuitExample = () => {
     //falsy value
     const [text,setText]=useState("");
     // truthy value
     const [name,SetName]=useState("Rahul");
     const [user,SetUSer]=useState({name:"Manoj"});
     const [isEditing,setIsEditing]=useState(false);
  return (
    <div>
      ShortCircuitExample
      <h2>{text || "hello World"}</h2>
      <div>
        {name && <div>
                <h1>hello</h1>
                <p>{name}</p>
            </div>}
      </div>

      {user && <SomeComponents name={user.name}/>}

      <h2>Ternnaruy opertaor</h2>

      <button
      className={`btn ${isEditing? "edit":"add"}`}
      onClick={()=>{
        setIsEditing(!isEditing)
      }}
      >
        {isEditing? "Edit":"Add"}
      </button>
      
    </div>
  )
}

const SomeComponents=(name)=>{
  const {newName}=name;
    return(
        <div>
            <h1>Hello Components</h1>
            <p>{newName}</p>
        </div>
    )
}

export default ShortCircuitExample
