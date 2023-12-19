function AddToDo() {
  return (
    <div className="container">
      <div className="row todo-row">
        <div className="col-6">
          <input type="text" placeholder="Enter to-do here"></input>
        </div>
        <div className="col-4">
          <input type="date"></input>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success todo-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
