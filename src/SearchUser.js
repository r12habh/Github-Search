import React, { useState } from "react";
import Result from "./Result.js";
import List from "./List.js";

const SearchUser = props => {
  const [userInput, setUserInput] = useState("");
  const [userData, setData] = useState([]);
  const [userList, setList] = useState([]);

  const handleSearch = event => {
    setUserInput(event.target.value);
    fetch(`https://api.github.com/search/users?q=${event.target.value}`)
      .then(result => result.json())
      .then(listdata => {
        let userArray = [];
        if (listdata.message) {
          setList([]);
          return;
        } else if (!listdata.items) {
          setList(["No User Found"]);
          return;
        }

        let n =
          Object.keys(listdata.items).length < 4
            ? Object.keys(listdata.items).length
            : 4;

        for (let i = 0; i < n; i++) {
          userArray.push(listdata.items[i].login);
        }
        setList(userArray);
      });
  };

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then(res => res.json())
      .then(data => {
        setList([]);
        setData(data);
      });
  };

  const _handleKeyPress = e => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="user-content">
      <div className="search">
        <input
          autoComplete="off"
          placeholder="Github User"
          name="github user"
          onChange={handleSearch}
          type="text"
          onKeyPress={_handleKeyPress}
          id="input"
        />
        <List handleSubmit={handleSubmit} userlist={userList} />
      </div>
      {userData !== [] ? <Result user={userData} /> : <h4>Search a user</h4>}
    </div>
  );
};

export default SearchUser;
