import React, { useState, useEffect } from "react";
import "./App.css";
import { Form, Card, Icon } from "semantic-ui-react";
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

  // useEffect(() => {
  //   fetch(`https://api.github.com/users/${userInput}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setData(data);
  //     });
  // }, []);

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

  //   const handleSearch = event => {
  //     setUserInput(event.target.value);
  //     console.log(event.target.value);
  //   };

  const handleSubmit = () => {
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
        for (let i = 0; i < n; i++) {
          //   console.log(data.items[i].login);
          setOptions(options.push(data.items[i].login));
          console.log(options);
        }
      });
    console.log(event.target.value);
  };

  return (
    <div>
      <div className="navbar">
        <Icon name="github" />
        Github Search
      </div>
      <div className="search">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder="Gihub User"
              name="github user"
              onChange={handleDynamicInput}
            />

            {/* <Form.Button content="Search" /> */}
          </Form.Group>
        </Form>
      </div>
      <div className="card">
        {error ? (
          <Card>
            <img
              alt="avatar"
              src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>User{error}</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
              </a>
            </Card.Content>
          </Card>
        ) : (
          <Card>
            <img alt="avatar" src={avatar} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{Name}</Card.Header>
              <Card.Header>{userName}</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                {followers} Followers
              </a>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                {following} Following
              </a>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                {repos} Repos
              </a>
            </Card.Content>
          </Card>
        )}
      </div>
    </div>
  );
}

export default App;
