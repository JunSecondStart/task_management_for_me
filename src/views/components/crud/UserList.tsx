// UserList.js
import React, { useEffect, useState } from "react";
import { item } from "../../../types";

const UserList: React.FC = () => {
  const [users, setUsers] = useState<item[]>([
    {
      id: 0,
      name: "",
      param1: 0,
      param2: 0,
      param3: 0,
    },
  ]);

  useEffect(() => {
    // APIからユーザー情報を取得
    fetch("http://127.0.0.1:8888/fastAPI_sample/items/")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id}:{user.name}:{user.param1}:{user.param2}:{user.param3}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
