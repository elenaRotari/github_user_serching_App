import React from "react";
import { useLoaderData } from "react-router-dom";
import "./userCard.scss";

const UserCard = () => {
  const data = useLoaderData();
  const { userData, repos } = data;

  return (
    <div className="card">
      <div className="card_details">
        <div>
          <h1>
            <span>Name: </span>
            {userData?.name}
          </h1>
          <h2>
            <span>Public Repos: </span>
            {userData?.public_repos}
          </h2>
        </div>

        <div className="card_img">
          <img src={userData?.avatar_url} alt={userData.name} />
        </div>
      </div>

      <div className="card_repos_details">
        <h3>Repositories details</h3>
        {repos?.map((repo) => (
          <div key={repo.id}>
            <p>
              <span>Repos Name: </span>
              {repo.name}
            </p>
            <p>
              <span>Description:</span>
              {repo.description ||
                " Unfortunately, there is no description for this repository"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCard;

export const loader = async ({ params }) => {
  const getUserData = await fetch(
    `https://api.github.com/users/${params.user}`
  );
  const userData = await getUserData.json();
  const getRepos = await fetch(userData.repos_url);
  const repos = await getRepos.json();
  return { userData, repos };
};
