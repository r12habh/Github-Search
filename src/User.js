import React from "react";

export default function Card({
  avatar = "https://github.com/r12habh/Practo-assignments/raw/master/404.png",
  name,
  username,
  followers,
  following,
  repos
}) {
  return (
    <div className="card">
      <img src={avatar} alt="Avatar" id="avatar" />
      {username ? (
        <div className="container">
          <h4>Name: {name}</h4>
          <h4>Username: {username}</h4>
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>
          <p>Repos: {repos}</p>
        </div>
      ) : (
        <h4>Nothing here.</h4>
      )}
    </div>
  );
}
