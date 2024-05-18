import './App.css'
import ExampleError from './Topics/01.UseState/01-example-error'
import UseStateBasics from './Topics/01.UseState/02_useStateBasics'
import UseStatearray from './Topics/01.UseState/03-useState-array'
import UseStateObject from './Topics/01.UseState/04-useState-Object'
import UseStatelast from './Topics/01.UseState/05-useState-last'
import UseEffectExample from './Topics/02. UseEffect/01-UseEffect-Example'
import UseEffectBasics from './Topics/02. UseEffect/02-UseEffect-Basics'
import UseEffect_multiple from './Topics/02. UseEffect/03-UseEffect_multiple'
import UseffectFetchData from './Topics/02. UseEffect/04-fetch-Data'
import FetchData from './Topics/02. UseEffect/05-fetch-data2'
import Cleanupfunction from './Topics/02. UseEffect/06-cleanup-ffunction'
import Basics from './Topics/03-Conditional-rendering/01-Basics'
import MultipleReturns from './Topics/03-Conditional-rendering/02-MultipleReturnFetchData'
import ShortCircuitingfirst from './Topics/03-Conditional-rendering/03-short-Circuiting-first'
import ShortCircuitExample from './Topics/03-Conditional-rendering/04-Short-Circuit_example'
import ToggleChallenge from './Topics/03-Conditional-rendering/05-toggle-Challenge'
import Userchallange from './Topics/03-Conditional-rendering/06-user-challnge'
import Controlledinput from './Topics/04-forms/01-controlled-input'
import Question from './Topics/04-forms/02-question'
import Multipleinput from './Topics/04-forms/03-multiple-input'
import Otherinput from './Topics/04-forms/04-other-input'
import Radioinput from './Topics/04-forms/05-radio-input'
import FormValidation from './Topics/04-forms/06-form-validation'
import About from './Topics/05-react-router/About'
import Blogs from './Topics/05-react-router/Blogs/Blogs'
import Blogs1 from './Topics/05-react-router/Blogs/Blogs1'
import Blogs2 from './Topics/05-react-router/Blogs/Blogs2'
import Blogs3 from './Topics/05-react-router/Blogs/Blogs3'
import Contact from './Topics/05-react-router/Contact'
import Error from './Topics/05-react-router/Error'
import Home from './Topics/05-react-router/Home'
import Login from './Topics/05-react-router/Log-in'
import Project from './Topics/05-react-router/Project'
import Signup from './Topics/05-react-router/Sign-up'
import Users from './Topics/05-react-router/Users/users'
import User from './Topics/05-react-router/Users/users'
import Navbar from './Topics/05-react-router/navbar'

import {Routes , Route} from 'react-router-dom';

function App() {
  /*
const obj={
  name:"Harshit",
  age:23,
}
console.log(obj.name);
console.log(obj.add); //? if key  not found give unnddefined

const randvalue=null;
console.log(randvalue?.name);  //? if not exixt give undefined othewise it will give error bcoz randvalue is not an object thats why we use question marks first cheeck null if it is null then it will not go forward and gives undefined

const randArray=[];
console.log(randArray[0]?.name);

*/


const users=[
  {id:1,name:"harshit"},
  {id:2,name:"Aman"},
  {id:3,name:"Rahul"},
  {id:4,name:"Sandeep"},

];
  return (
    <>
     {/* <h1>React advance</h1> */}
     {/* <ExampleError/> */}
    {/* <UseStateBasics/> */}
    {/* <UseStatearray/> */}
    {/* <UseStateObject/> */}
    {/* <UseStatelast/> */}


    {/* <UseEffectExample/> */}
    {/* <UseEffectBasics/> */}
    {/* <UseEffect_multiple/> */}
    {/* <UseffectFetchData/> */}
    {/* <FetchData/> */}
    {/* <Cleanupfunction/> */}

    {/* <Basics/> */}
    {/* <MultipleReturns/> */}
    {/* <ShortCircuitingfirst/> */}
    {/* <ShortCircuitExample/> */}
    {/* <ToggleChallenge /> */}
    {/* <ToggleChallenge heading={"toogle1"} details={"sdfghhjj 1 fghjsjkjgte hghhggft tyuiyuty"}/>
    <ToggleChallenge heading={"toogle2"} details={"sdfghhjj 2 fghjsjkjgte hghhggft tyuiyuty"}/>
    <ToggleChallenge heading={"toogle3"} details={"sdfghhjj  3 fghjsjkjgte hghhggft tyuiyuty"}/> */}
    {/* <Userchallange/> */}  
 
    {/* <Controlledinput/> */}
    {/* <Question/> */}
    {/* <Multipleinput/> */}
    {/* <Otherinput/> */}
    {/* <Radioinput/> */}
    {/* <FormValidation/> */}

    {/* Navbar   */}

   
    {/* Firstly  install>>  npm install react-router-dom localforage match-sorter sort-by
    
    1. import {Routes , Route} from 'react-router-dom';   import on render  page 
    2.import {Link, NavLink} from 'react-router-dom';  import on where we have navbar links 
    
    */}
     <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/project' element={<Project/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/blogs' element={<Blogs/>} >

          <Route path='blogs1' element={<Blogs1/>} />
          <Route path='blogs2' element={<Blogs2/>} />
          <Route path='blogs3' element={<Blogs3/>} />
      </Route>

      <Route path='/users' element={<Users users={users}/>} >
          <Route path=":userId" element={<User/>} />
        
      </Route>

      <Route path='/contact' element={<Contact/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/#' element={<Error/>} />
    
    </Routes>

    
    </>
  )
}

export default App
