# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


### React

1. Built by facebook
2. Angular, vue, svelte
3. Components
4. Indepedence
5. Resuable
6. Speed

# install
1 . npm create vite@latest project_name or  npm create-react-app folder_name
2 . cd project_name
3 . npm install
4 . npm run dev  to start the projects  



#### Folder Structure

- node_modules
  Contains all dependencies required by the app. Main dependencies also listed in package.json

- public
  Contains static assets including index.html (page template)
  - index.html
    - title
    - fonts
    - css
    - favicon
    - id="root" - our entire app
- src
  In simplest form it's the brain of our app. This is where we will do all of our work. src/index.js is the JavaScript entry point.
- .gitignore
  Specifies which files source control (Git) should ignore

- package.json
  
  Every Node.js project has a package.json and it contains info about our project, for example list of dependencies and scripts

- package-lock.json
  A snapshot of the entire dependency tree

- README
  The markdown file where you can share more info about the project for example build instructions and summary

### Images in React

-external image - just copy paste an URL

- local image (public folder) - slow
- local image (src folder) - faster in loading for assets
  under the hood they get optimizied

### {}

- {} in JSX entering back to javascript world
- value inside {} must be an expression, it can not be a statement (like loop and condition we can use map,filter reduce  instead of loop and use ternary operator insted of condition)
# use map ,filter ,reduce with return 

### VS Shortcuts

- close/open integrated terminal: Ctrl + `
- close/open sidebar: Ctrl + b

### Children Props

- everything we render between component tags
- during the context api we use it the most
- special props, has to be "children"
- can place anywhere in JSX


### Events
 - in js-> const btn=document.querySelector(".btn);
 - btn.addEventListener('click',()=>{
 -     fnction body
 - })
 -  in React Js 
 -  we use onclick function and make the function into same components
-  


### Hooks 

1. useState(value)
  - this return an array of two elements first is value and second is function this is used to update value 
  - syntax
  - const [value,setvalue]= useState(1);
  - then value =1
  - and setvalue is function this is used  to change the value 
- this  is also can take  array,object as a value 
- we can make toggle,and CRUD operations

2. useEffect(function(),[condition])
   - useEffect Hooks is used to render the function according to yourself
   - useEffect takes two input first is what we want render according to condition or intial-render and 2nd parametr is array when the array elemmnt is change then the function is render otherwise not 
   - if we want only initial render then give empty array [].
   - all the elemnts change or atleast one elemnt chnage one time then function is render 
   - uses-- suppose we want to call api then we dont want to call api again and again then we use useEffect hooks 


# props ->  are those parameter that are we pass through component render that pass as a object like
  < component_name   props={value} /> 
  
  
    we can send multiple props like this
  < component_name   props1={value1} props2={value1} props3={value1} />  


  where we are making this component value goes like a object then we distruct 

  const component_name=(props)=>{
    const {destruct props}=props
    #code
  }


# user taken value input fields  
const [user,setUser]=useState({
        name:"",
        email:"",
        password:""
    })
 const handleChange=(e)=>{
      setUser({...user,[e.target.name]:e.target.value})
    }


handle change is a function that is call by onchange  method input fields 


# we can use formik package to take value and used predefined method




#  3rd Hooks 
3. useContext - Context provides a way to pass data through the component tree without having to pass props down manually at every level.

const MyContext = React.createContext(defaultValue);   use this which file we wnat to store value 
export const navbarContext=createContext();  or make like this 

provide value like this 
<MyContext.Provider value={/* some value */}>
  {/* child components */}
</MyContext.Provider>    


use like this 
const value = useContext(MyContext);


