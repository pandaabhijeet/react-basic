function App() {
  return (
    <center className="todo-container">
      <h1>TO-DO App</h1>
      <div className="container text-center">
        <div className="row">
          <div className="col-6">
            <input type="text" placeholder="Enter to-do here"></input>
          </div>
          <div className="col-4">
            <input type="date"></input>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success">
              Add
            </button>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col-6">Make a To-Do App</div>
          <div className="col-4">19/12/2023</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col-6">Push it to Github</div>
          <div className="col-4">19/12/2023</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
