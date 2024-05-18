import React from 'react'

const ExampleError = () => {
    let num=0;
    function handleClicked()
    {
        num++;
        console.log(num);
    }
  return (
    <div>
    <h1>Value: {num} </h1>
    <button onClick={handleClicked}>Increment</button>
    </div>
  )
}

export default ExampleError
