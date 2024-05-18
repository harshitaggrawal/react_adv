import React, { useEffect, useState } from 'react'

const Cleanupfunction = () => {
    const [toggle,settoggle]=useState(false);
  return (
    <div>
      <button onClick={()=>{settoggle(!toggle)}}>toggle</button>

      {toggle && <RandomComponent/>}
    </div>
  )
}


const RandomComponent=()=>{
    //* first
    /*
    useEffect(()=>{
        console.log("this is use Effect");

        const interval=setInterval(()=>{
            console.log("hello from interval");

        },1000);

        return ()=>{
            clearInterval(interval);
            console.log("clean");
        }
    },[]);*/

    //* second

    useEffect(()=>{
        const someFunc=()=>{
        console.log("window listenier");   
        }
    window.addEventListener("scroll",someFunc);

    return ()=>{
        window.removeEventListener("scroll",someFunc);
    }
},[]);
    



    return <h1>Hello World</h1>
}

export default Cleanupfunction
