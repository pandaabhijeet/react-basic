import React from "react";
import "./App.css";

function Map() {
  let listItems = [
    "This is item 1",
    "This is item 2",
    "This is item 3",
    "This is item 4",
    "This is item 5",
    "This is item 6",
  ];
  return (
    <React.Fragment>
      <h1>This is an example of how Map is used in react</h1>
      <ul className="list-group">
        {listItems.map((item) => {
          <li className="list-group-item">{item}</li>
        })}
      </ul>
    </React.Fragment>
  );
}

export default Map;
