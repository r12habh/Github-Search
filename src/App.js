import React from "react";
import "./App.css";
import SearchUser from "./SearchUser.js";

function App() {
  return (
    <div>
      <div className="navbar">
        <img
          id="github-logo"
          src="https://img.icons8.com/clouds/100/000000/github.png"
          alt="github-logo"
        />
        <h3> Github Search</h3>
      </div>

      <SearchUser />
    </div>
  );
}

export default App;
