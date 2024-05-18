import React from 'react'
import { useParams } from 'react-router-dom'
const user = () => {
    const {userId}=useParams();
    console.log(userId);
  return (
    <div>
      <h1>User : {userId}</h1>
    </div>
  )
}

export default user
