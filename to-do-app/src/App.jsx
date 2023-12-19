import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import ShowToDo from "./components/ShowToDo";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />

      <div className="item-container">
        <AddToDo />
        <ShowToDo />
        <ShowToDo />
      </div>
    </center>
  );
}

export default App;
