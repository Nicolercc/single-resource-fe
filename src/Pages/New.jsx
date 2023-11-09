import React from "react";
import TaskNewForm from "../Components/TaskNewForm";

function New() {
  return (
    <div>
      <div className="d-flex justify-content-center mt-5 my-3">
        <h2> Ready, Set, Task:</h2>
      </div>
      <div className="d-flex justify-content-center ">
        <h5> Add a new task below!</h5>
      </div>
      <div>
        <TaskNewForm />
      </div>
    </div>
  );
}

export default New;
