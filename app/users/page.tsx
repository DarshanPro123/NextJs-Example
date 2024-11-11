import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const User: React.FC = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();

  return (
    <div className="flex flex-wrap gap-4">
      {users.map((user) => {
        return (
          <div className=" ">
            <div className="w-[400px] bg-gray-200 p-4">{user.id}</div>
            <div className="w-[400px] bg-gray-200 p-4">{user.name}</div>
            <div className="w-[400px] bg-gray-200 p-4">{user.email}</div>
          </div>
        );
      })}
    </div>
  );
};
export default User;
