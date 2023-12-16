import { useState } from "react";
import "./App.css";

function App() {
  const [colour, setColour] = useState("olive");

  return (
    <div
      className="w-full  h-screen duration-200"
      style={{ backgroundColor: "#000000" }}
    ></div>
  );
}

export default App;
