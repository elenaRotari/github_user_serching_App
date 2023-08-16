import { useLoaderData } from "react-router-dom";
import "./App.scss";

import React from "react";

function App() {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      {data.users.map((user) => {
        return (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
            <h3>{user.phone}</h3>
            <h4>{user.website}</h4>
            <h5>{user.company.name}</h5>
            <h6>{user.company.catchPhrase}</h6>
          </div>
        );
      })}
    </div>
  );
}

export default App;

export const loader = async () => {
  //get users from api
  const user = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await user.json();
  //get comments from api
  const comment = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await comment.json();
  return { users, comments };
};
