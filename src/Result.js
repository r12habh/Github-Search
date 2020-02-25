import React from "react";
import User from "./User.js";

const Results = ({ user }) => {
  console.log(user.login);
  if (user.message) {
    return (
      <div className="card">
        <img
          src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
          alt="Avatar"
        />
        <div className="container">
          <h4>User {user.message}</h4>
        </div>
      </div>
    );
  } else {
    return (
      <User
        avatar={user.avatar_url}
        name={user.name}
        username={user.login}
        followers={user.followers}
        following={user.following}
        repos={user.public_repos}
      />
    );
  }
};

export default Results;
