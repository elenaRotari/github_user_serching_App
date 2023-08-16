import React from "react";
import { useActionData } from "react-router-dom";
import "./userCard.scss";
const UserCard = () => {
  const data = useActionData();
  const { userData, repos } = data;
  console.log(data);

  return (
    <div className="card">
      <img src={userData?.avatar_url} alt={userData.name} />
      <h1>
        {" "}
        <span> Name: </span>
        {userData?.name}
      </h1>
      <h4>
        {" "}
        <span>Public Repos: </span>
        {userData?.public_repos}
      </h4>
      {repos?.map((repo) => (
        <div key={repo.id}>
          <h3>
            <span>Repos Name: </span>
            {repo.name}
          </h3>
          <h4>
            <span>Description:</span>
            {repo.description
              ? repo.description
              : " Unfortunately, there is no description for this repository"}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default UserCard;

export const action = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("user");
  const getUserData = await fetch(`https://api.github.com/users/${name}`);
  const userData = await getUserData.json();
  const getRepos = await fetch(userData.repos_url);
  const repos = await getRepos.json();
  return { userData, repos };
};
