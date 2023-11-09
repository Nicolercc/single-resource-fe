import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { formatDateForBackend } from "./Utils";

const API = process.env.API_BASE_URL;

function TaskNewForm() {
  const navigate = useNavigate();

  const [task, settask] = useState({
    name: "",
    description: "",
    deadline: "",
    category: "",
    assigned_to: "",
    status: "",
  });

  const [error, setError] = useState(null);

  const addTask = async () => {
    const taskData = {
      name: task.name,
      description: task.description,
      deadline: formatDateForBackend(task.deadline),
      category: task.category,
      assigned_to: task.assigned_to,
      status: task.status,
    };

    try {
      const response = await axios.post(API, taskData);
      console.log("Task added successfully:", response.data);
      navigate("/tasks");
    } catch (error) {
      setError("Error adding task. Please try again.");
      console.error("Error:", error);
    }
  };

  const handleTextChange = (event) => {
    settask({ ...task, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask();
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group m-4 h6 text-center">
          <label htmlFor="name" className="d-block">
            Name:
          </label>
          <input
            id="name"
            value={task.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Name of task"
            required
            className="form-control"
          />
        </div>
        <div className="form-group m-4 h6 text-center">
          <label htmlFor="description" className="d-block">
            Description:
          </label>
          <input
            id="description"
            value={task.description}
            type="text"
            onChange={handleTextChange}
            placeholder="Description of task"
            required
            className="form-control"
          />
        </div>
        <div className="form-group m-4 h6 text-center">
          <label htmlFor="deadline" className="d-block">
            Deadline:
          </label>
          <input
            id="deadline"
            value={task.deadline}
            type="date"
            onChange={handleTextChange}
            placeholder="Deadline of task"
            required
            className="form-control"
          />
        </div>
        <div className="form-group m-4 h6 text-center">
          <label htmlFor="category" className="d-block">
            Category:
          </label>
          <input
            id="category"
            value={task.category}
            type="text"
            onChange={handleTextChange}
            placeholder="Category of task"
            required
            className="form-control"
          />
        </div>
        <div className="form-group m-4 h6 text-center">
          <label htmlFor="assigned_to" className="d-block">
            Assigned to:
          </label>
          <input
            id="assigned_to"
            value={task.assigned_to}
            type="text"
            onChange={handleTextChange}
            placeholder="Who was it assigned to?"
            required
            className="form-control"
          />
        </div>
        <div className="form-group m-4 h6 text-center">
          <label htmlFor="status" className="d-block">
            Status:
          </label>
          <input
            id="status"
            value={task.status}
            type="text"
            onChange={handleTextChange}
            placeholder="Status of task"
            required
            className="form-control"
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="container text-center m-3">
          <Link to={`/tasks`} className="btn btn-secondary mx-3">
            Nevermind!
          </Link>
          <button type="submit" className="btn btn-primary mx-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskNewForm;
