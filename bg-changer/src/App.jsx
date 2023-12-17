import { useState } from "react";
import "./App.css";

function App() {
  const [color, setBackgroundColor] = useState("green");
  return (
    <div
      className="h-screen w-full duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex justify-center flex-wrap bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-3xl">
          <button
            onClick={() => setBackgroundColor("red")}
            className="outline-none px-5 w-20 rounded-full py-1 text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setBackgroundColor("blue")}
            className="outline-none px-5 w-20 rounded-full py-1 text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setBackgroundColor("Green")}
            className="outline-none px-5 w-20 rounded-full py-1 text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setBackgroundColor("purple")}
            className="outline-none px-5 w-20 rounded-full py-1 text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setBackgroundColor("brown")}
            className="outline-none px-5 w-20 rounded-full py-1 text-white shadow-lg"
            style={{ backgroundColor: "brown" }}
          >
            brown
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
