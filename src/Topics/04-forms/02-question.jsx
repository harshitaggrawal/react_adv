import React, { useState } from 'react'
//? Setup controlled input (name input)
//? setup onnsubmit
//? import people data
//? crete state value (set default as a data) 
//? iterate over and write after form
//? when user submit form then value added to the form
import {people} from '/public/data'

// const Question = () => {
//     const[name,Setname]=useState("");
//     const[data,setdata]=useState(people);
  
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         console.log(name);
//         const fakeid=Date.now();
//         const obj={
//           id:fakeid,
//           name:name
//         };
//         console.log(obj);
//        const newData= [...data,obj];
//         setdata(newData);
//         Setname("");       
//     }
//    const handleClear=()=>{
//       setdata([]);
//     }
//     const handleRemove=(id)=>{

//       const updateData=  data.filter((ele)=>{
//             return ele.id!=id;
//         });
//         setdata(updateData)
//     }
//     const handleRefresh=()=>{
//       setdata(people);
//     }
    
   
//   return (
//     <div>

//       <form action="" onSubmit={handleSubmit}>
//         <label htmlFor="name">Name </label>
//        <br/>
//         <input 
//         type="text" 
//         id='name'
//          value={name} 
//          name='name' 
//          onChange={(e)=>{Setname(e.target.value)}} />
//          <br/>
//            <button >Submit</button>
//       </form>


//       {data.map((ele)=>{
//         return(
//           <div key={ele.id}>            
//             <h3>Name: {ele.name}</h3>
//             <button onClick={()=>handleRemove(ele.id)}>remove</button>
//           </div>
//         );
//       })}
//       {data.length==0?<button onClick={handleRefresh}>Refresh</button>: <button onClick={handleClear}>Clear</button>
//       }  
      
//     </div>
//   )
// }


// made my me
const Question =()=>{
  const [name,setName]=useState("");
  const [data,setData]=useState(people);

 
  const handleSubmit=(e)=>{
    e.preventDefault();
    const newPeople={
      id:Date.now(),
      name:name,
    }
    console.log(newPeople);
    setName("");
    const newData=[...data,newPeople];
    setData(newData);
  }
  const remove= (id)=>{
    const newone=data.filter((user)=>{
      return user.id!=id;
    })
    setData(newone);
  }

  const refresh=()=>{
    setData(people);
  }
  const clear=()=>{
    setData([]);
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={name} placeholder='Enter your name' onChange={(e)=>{setName(e.target.value)}} />
        <button>Submit</button>
      </form>


      {data.map((user)=>{
        return (
        <div key={user.id}>
          <h4>{user.name}</h4>
          <button onClick={()=>remove(user.id)}>Remove</button>
        </div>
        )
      })}

      {data.length==0? <button onClick={refresh}>refresh</button>: <button onClick={clear}>clear</button>}

    </div>
  )
}

export default Question
