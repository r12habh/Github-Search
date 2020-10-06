import React from "react";
import User from "./User.js";

const Results = ({ user }) => {
  if (user.message) {
    return (
      <div className="card">
        <img
          id="avatar"
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
