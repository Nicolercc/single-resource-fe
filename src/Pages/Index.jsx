import React from "react";
import Tasks from "../Components/Tasks";

function Index() {
  return (
    <div className="Index" style={{ height: "1000vh" }}>
      <div className="my-5">
        <h2 className=" text-center m-4">To-Do List</h2>
        <h5 className="d-flex justify-content-center m-4">
          Master Your Day, One Task at a Time
        </h5>
      </div>
      <div className="container my-5">
        <Tasks />
      </div>
    </div>
  );
}

export default Index;
