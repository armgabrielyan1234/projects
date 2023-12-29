import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { request } from "../../../hooks";

function User() {
  const [users, setUsers] = useState([]);

  const data = request("https://jsonplaceholder.typicode.com/users", "GET");
  useEffect(() => {
    setUsers(data);
  }, [data]);

  return (
    <div>
      <h1 className="text text-center m-5 text-xl">Users</h1>
      <div className="flex gap-5 flex-wrap justify-center items-center">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex flex-col gap-5 p-5 font-mono w-80 text-center border-solid border-2 border-black"
          >
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.company.name}</p>
            <p>{user.phone}</p>
            <Link to={`/post/${user.id}`}>
              <button className="text font-mono text-lg border-4 border-gray-800 p-2">
                Posts
              </button>
            </Link>
            <Link to={`/album/${user.id}`}>
              <button className="text font-mono text-lg border-4 border-gray-800 p-2">
                Albums
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default User;
