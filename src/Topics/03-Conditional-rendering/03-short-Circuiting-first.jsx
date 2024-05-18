import React, { useState } from 'react'

const ShortCircuitingfirst = () => {
    //falsy value
    const [text,setText]=useState("");
    // truthy value
    const [name,SetName]=useState("Rahul");

    //? or=> first true value and executed
    //? and: first false and executed  other gives last truthy value
  return (
    <div>
      Short Circuiting
      <h2>Falssy OR:{text || "Hello World"} </h2>  
      <h2>Falssy AND:{text && "Hello World"} </h2>  
      <h2>Truthy OR:{name || "Hello World"} </h2>
      <h2>Truthy AND:{name && "Hello World"} </h2>

    </div>
  )
}

export default ShortCircuitingfirst
