import { useEffect } from "react";
import { useState } from "react";

const UseffectFetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://api.github.com/users");
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
      <h1>Github users</h1>
      {users.map((user) => {
        const { id, login, html_url, avatar_url } = user;
        return (
          <div
            key={id}
            style={{
              backgroundColor: "#eee",
              margin: "12px 0px",
              padding: "1rem",
            }}
          >
            <img
              src={avatar_url}
              alt="profile"
              style={{ width: "75px", borderRadius: "999px" }}
            />
            <h2>{login}</h2>
            <a href={html_url}>Profile</a>
          </div>
        );
      })}
    </div>
  );
};



export default UseffectFetchData;