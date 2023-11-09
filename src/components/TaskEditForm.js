import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.API_BASE_URL;

function TaskEditForm() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState({
    name: "",
    description: "",
    deadline: "",
    category: "",
    assigned_to: "",
    status: "",
  });

  const handleTextChange = (event) => {
    setTask({ ...task, [event.target.id]: event.target.value });
  };

  const updateTask = () => {
    axios
      .put(`${API}/${id}`, task, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("Updated task:", res.data);
        navigate(`/${id}`);
      })
      .catch((error) => {
        console.error("Error updating task:", error);
      });
  };

  useEffect(() => {
    axios
      .get(`${API}/${id}`)
      .then((res) => {
        const updatedTask = res.data || {
          name: "",
          description: "",
          deadline: "",
          category: "",
          assigned_to: "",
          status: "",
        };
        setTask(updatedTask);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTask();
  };

  return (
    <div className=" container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group m-4 h6">
          <label htmlFor="name" className="d-flex justify-content-center ">
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
        <div className="form-group m-4 h6">
          <label
            htmlFor="description"
            className="d-flex justify-content-center "
          >
            Description:
          </label>
          <input
            id="description"
            value={task.description}
            type="text"
            onChange={handleTextChange}
            placeholder="description of task"
            className="form-control"
            required
          />
        </div>
        <div className="form-group m-4 h6">
          <label htmlFor="deadline" className="d-flex justify-content-center ">
            Deadline:
          </label>
          <input
            id="deadline"
            value={task.deadline}
            type="date"
            onChange={handleTextChange}
            placeholder="deadline of task"
            className="form-control"
            required
          />
        </div>
        <div className="form-group m-4 h6">
          <label htmlFor="category" className="d-flex justify-content-center ">
            Category:
          </label>
          <input
            id="category"
            value={task.category}
            type="text"
            onChange={handleTextChange}
            placeholder="category of task"
            className="form-control"
            required
          />
        </div>
        <div className="form-group m-4 h6">
          <label
            htmlFor="assigned_to"
            className="d-flex justify-content-center "
          >
            Assigned to:
          </label>
          <input
            id="assigned_to"
            value={task.assigned_to}
            type="text"
            onChange={handleTextChange}
            placeholder="assigned_to of task"
            className="form-control"
            required
          />
        </div>
        <div className="form-group m-4 h6">
          <label htmlFor="status" className="d-flex justify-content-center ">
            Status:
          </label>
          <input
            id="status"
            value={task.status}
            type="text"
            onChange={handleTextChange}
            placeholder="status of task"
            className="form-control"
            required
          />
        </div>
      </form>
      <br />
      <div className="text-center">
        <Link to={`/${id}`} className="">
          <button className="btn btn-primary mx-3">Nevermind</button>
        </Link>
        <Link to={`/${id}`} className="">
          <button className="btn btn-primary mx-3" onClick={handleSubmit}>
            Save
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TaskEditForm;
