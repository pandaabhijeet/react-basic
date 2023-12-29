import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'

function Conditions() {
  //let listItems = [];
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
      <h1>This is an example of how conditions are used in react</h1>
      {listItems.length === 0 ? <h1>Opps! No conditions satisfied !</h1> : null}
      <ul className="list-group">
        {listItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default Conditions;
