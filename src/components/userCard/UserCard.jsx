import React from "react";
import { useActionData } from "react-router-dom";
import "./userCard.scss";

const UserCard = () => {
  const data = useActionData();
  const { userData, repos } = data;

  return (
    <div className="card">
      <div className="card_details">
        <div>
          <h3>{userData?.name}</h3>
          <h4>
            <span>Public Repos: </span>
            {userData?.public_repos}
          </h4>
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

export const action = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("user");
  const getUserData = await fetch(`https://api.github.com/users/${name}`);
  const userData = await getUserData.json();
  const getRepos = await fetch(userData.repos_url);
  const repos = await getRepos.json();
  return { userData, repos };
};
