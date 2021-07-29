import React, { useState, useEffect } from "react";
function Networking() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    setUsers(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      {users.map((curElem) => {
        return (
          <div>
            <h1>{curElem.login}</h1>

            <img src={curElem.avatar_url} alt="" />
          </div>
        );
      })}
    </div>
  );
}
export default Networking;
