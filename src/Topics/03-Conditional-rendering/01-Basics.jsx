import { useEffect, useState } from "react";

const Basics = () => {

    /*
    function greting()
    {
        if(false)
        {
            return "hello";
        }
        else{
            return "Bye";
        }
        
    }
    console.log(greting());
    */

    const [isLoading,SetIsLoading]=useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            SetIsLoading(false);
        },3000)
    },[]);


//! Multiple returns
    if(isLoading)
    {
        return "Loading";
    }
  return (
    <div>
     Here is your data
    </div>
  )
  
}

export default Basics;

/*
set up twoStateValue
user=null,isloading=true

setup USeEffect
    async function
    fetch 
    user Update
    isloading=false;
    only runs on initial render

render on page
*/
