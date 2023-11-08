import React from "react";

function Total({ tasks }) {
  const totalTasks = tasks.length;
  return (
    <div className=" d-flex justify-content-center m-5">
      <h2>
        <span> Total Tasks: </span>
        {totalTasks}
      </h2>
    </div>
  );
}
export default Total;
