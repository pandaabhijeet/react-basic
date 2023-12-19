function ShowToDo() {
  return (
    <div className="container">
      <div className="row todo-row">
        <div className="col-6">Push it to Github</div>
        <div className="col-4">19/12/2023</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger todo-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowToDo;
