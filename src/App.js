import React, { useState } from "react";
import "./App.css";

function App() {
  const [Name, setName] = useState("");
  const [userName, setUsername] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState(
    "https://github.com/r12habh/Practo-assignments/raw/master/404.png"
  );
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState("");
  const [options, setOptions] = useState([]);

  const setData = ({
    name,
    login,
    followers,
    following,
    public_repos,
    avatar_url
  }) => {
    console.log(name);

    setName(name);
    setUsername(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
  };

  const handleSearch = event => {
    setUserInput(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = () => {
    console.log(userInput);
    fetch(`https://api.github.com/users/${userInput}`)
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          setError(data.message);
        } else {
          setData(data);
          setError(null);
        }
      });
  };

  const handleDynamicInput = event => {
    fetch(`https://api.github.com/search/users?q=${event.target.value}`)
      .then(results => results.json())
      .then(data => {
        let n =
          4 < Object.keys(data.items).length
            ? 4
            : Object.keys(data.items).length;
        let oldArray = [];
        for (let i = 0; i < n; i++) {
          //   console.log(data.items[i].login);

          oldArray.push(data.items[i].login);
          setOptions(oldArray);
        }
        console.log(options);
      });
    // console.log(options);
  };

  return (
    <div>
      <div className="navbar">Github Search</div>
      <div className="search">
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <input
            placeholder="Github User"
            name="github user"
            onChange={handleSearch}
            type="text"
          />
        </form>
      </div>
      <div className="grid">
        {error ? (
          <div className="card">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
              alt="Avatar"
            />
            <div className="container">
              <h4>
                <b>User {error}</b>
              </h4>
            </div>
          </div>
        ) : (
          <div className="card">
            <img src={avatar} alt="Avatar" />
            <div className="container">
              <h4>
                <b>Name: {Name}</b>
              </h4>
              <h4>
                <b>Username: {userName}</b>
              </h4>
              <p>Followers: {followers}</p>
              <p>Following: {following}</p>
              <p>Repos: {repos}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
