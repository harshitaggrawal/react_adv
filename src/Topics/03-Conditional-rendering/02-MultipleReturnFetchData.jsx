import {useState,useEffect} from 'react'

const MultipleReturns = () => {

    const [user,setuser]=useState(null);
    const [isLoading,SetIsLoading] = useState(true);
    const [isError,setisError]=useState(false);
  
    
    useEffect(() => {
      const fetchUsers = async() => {
        try {
          const response = await fetch("https://api.github.com/users/mojombo");
          const result = await response.json();
          setuser(result);
          console.log(result);
          SetIsLoading(false);
        } catch (error) {
          console.log(error);
          setisError(true);
          SetIsLoading(false);
        }
      }
      fetchUsers();
    }, []);

    

    if(isLoading)
    {
      return (
        "fetching data"
      );
    
    }
    if(isError)
    {
      return "Error Hppens"
    }
   
    else{
      return (
        <div>
          <h1>{user.login}</h1>
          <a href="{user.html_url}">check profile</a>
          
        </div>
      );
    }
}

export default MultipleReturns;
