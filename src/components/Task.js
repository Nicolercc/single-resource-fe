import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { formatDateForFrontend } from "./Utils";
import axios from "axios";

const API = process.env.API_BASE_URL;

function Task() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getTask() {
      try {
        const result = await axios.get(`${API}/${id}`);
        setTask(result.data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    }

    getTask();
  }, [id]);

  const handleDelete = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (isConfirmed) {
      try {
        await axios.delete(`${API}/${id}`);
        navigate("/tasks");
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("Deletion canceled.");
    }
  };

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="container  my-5">
      {isLoading ? (
        <div className="loader">
          <h2>Loading...</h2>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <h2 className="card-header text-center my-3">{task.name}</h2>
              <div className="card-body text-center">
                <h4 className="card-text">{task.description}</h4>
                <hr />
                <h6>Deadline:</h6>
                <p className="text-muted">
                  {formatDateForFrontend(task.deadline)}
                </p>
                <h6>Category:</h6>
                <p className="text-muted">{task.category}</p>
                <h6>Assigned to:</h6>
                <p className="text-muted">{task.assigned_to}</p>
                <h6>Status:</h6>
                <p className="text-muted">{task.status}</p>
              </div>
            </div>
            <div className="text-center  ">
              <button className="btn btn-danger m-3" onClick={handleDelete}>
                Delete
              </button>
              <button className="btn btn-primary m-3" onClick={handleEdit}>
                Edit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Task;
