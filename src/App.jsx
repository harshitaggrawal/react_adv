import React from 'react'
import Navbar from './Topics/06-context-api/Navbar'
// Steps 
//? Context-api setup
//! Why we  use  Context Api ==> we use context api when we pass props from one component to another if we render one component in each page then we have to pass props from on to another and  so on because we want in last component its to uch lengthy..
//? link navbar to navlinks to user conatiner
//? wecan pass  directlt props to navbar to userConatiner



/*
create three component and nest then in such way
> Navbar.jsx
  >navlinks (nested in navbar)
    > useContainer.jsx (nested in Navklinks )


import Navbar.jsx in App.jsx
> in Navbar.jsx  setup
.user state value   
  > default value {name:Mohit}
  > logout Function setuserback to null
> pass both value of then down to userConatiner .jsx
> display user and button on usercontainer
> on button click set user back to null

*/
const App = () => {
  return (
    <div>
      <h1>Context API</h1>
      <Navbar/>
    </div>
  )
}

export default App
