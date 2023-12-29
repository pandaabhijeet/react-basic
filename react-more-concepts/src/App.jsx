import React from "react";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <React.Fragment>
        <h1>This is an example of how fragments are used in react</h1>
        <ul class="list-group">
        <li class="list-group-item">We have used React.Fragment here</li>
          <li class="list-group-item">This is item 1</li>
          <li class="list-group-item">This is item 2</li>
          <li class="list-group-item">This is item 3</li>
          <li class="list-group-item">This is item 4</li>
          <li class="list-group-item">This is item 5</li>
        </ul>
      </React.Fragment>
      <>
        <h1>This is an example of how fragments are used in react</h1>
        <ul class="list-group">
          <li class="list-group-item">We have used short React.Fragment here</li>
          <li class="list-group-item">This is item 2</li>
          <li class="list-group-item">This is item 3</li>
          <li class="list-group-item">This is item 4</li>
          <li class="list-group-item">This is item 5</li>
        </ul>
      </>
    </React.Fragment>
  );
}

export default App;
