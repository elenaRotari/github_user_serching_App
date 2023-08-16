import React from "react";
import { useActionData } from "react-router-dom";

const UserCard = () => {
  const user = useActionData();
  console.log(user);
  return <div>user</div>;
};

export default UserCard;

export const action = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("user");
  const getUserData = await fetch(`https://api.github.com/users/${name}`);
  const userData = await getUserData.json();
  return userData;
};
