import React from "react";
import "./App.css";

const List = ({ userlist, handleSubmit }) => {
  return (
    <ul className="myUL">
      {userlist.map(item => {
        return (
          <li onClick={handleSubmit} key={item.toString()}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
