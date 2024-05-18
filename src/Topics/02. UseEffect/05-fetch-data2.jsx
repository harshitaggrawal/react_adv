import {useEffect,useState} from 'react'
const  url="https://restcountries.com/v3.1/all";
const FetchData = () => {
    
        const [users, setUsers] = useState([]);
      
        useEffect(() => {
          async function fetchUsers() {
            try {
              const response = await fetch(url);
              const result = await response.json();
              setUsers(result);
              console.log(result);
            } catch (error) {
              console.log(error);
            }
          }
          fetchUsers();
        }, []);
  return (
    <div>
     
      {users.map((country)=>{
        const {area,coatOfArms,region,population}=country;
        
        const {png,svg}=coatOfArms;
        return (
        <div key={region}>
          <h4>Country: {region}</h4>
          <p>Area: {area}</p>
          {/* <p>Capital: {cap}</p> */}
          <img src={svg} style={{height:"300px", width:"300px"}}  />
          <p>Populations: {population}</p>

        </div>
        )
      })}
    </div>
  )
}

export default FetchData
