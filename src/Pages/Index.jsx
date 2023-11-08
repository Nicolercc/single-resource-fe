import React from "react";
import { useNavigate } from "react-router-dom";
import Tasks from "../Components/Tasks";

function Index() {
  const navigate = useNavigate();
  const handleNew = () => {
    navigate(`/new`);
  };

  return (
    <div className="Index" style={{ height: "1000vh" }}>
      <div className="my-5">
        <h2 className=" text-center m-4">To-Do List</h2>
        <h5 className="d-flex justify-content-center m-4">
          Master Your Day, One Task at a Time{" "}
        </h5>
      </div>
      <div className="container my-5">
        <Tasks />
      </div>
      <div className="container d-flex justify-content-center">
        <button
          className="btn btn-secondary form-label container mx-5"
          onClick={handleNew}
        >
          Add New
        </button>
      </div>
    </div>
  );
}

export default Index;
