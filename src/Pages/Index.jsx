import React from "react";
import Tasks from "../Components/Tasks";

function Index() {
  return (
    <div className="Index" style={{ height: "1000vh" }}>
      <h2 className=" text-center m-5">To-Do List</h2>
      <div className="container my-5">
        <Tasks />
      </div>
    </div>
  );
}

export default Index;
