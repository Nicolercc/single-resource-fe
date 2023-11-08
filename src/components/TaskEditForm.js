import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = `http://localhost:3005/tasks`;

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
    fetch(`${API}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        navigate(`/${id}`);
      });
  };

  // On page load, fill in the form with the Task data.
  useEffect(() => {
    fetch(`${API}/${id}`)
      .then((res) => res.json())
      .then((res) => {
        // Set default values if the fetched data is null or undefined
        const updatedTask = res || {
          name: "",
          description: "",
          deadline: "",
          category: "",
          assigned_to: "",
          status: "",
        };
        setTask(updatedTask);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTask();
  };

  return (
    <div className="Edit container m-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group my-4 h5">
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
        <div className="form-group my-4 h5">
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
        <div className="form-group my-4 h5">
          <label htmlFor="deadline" className="d-flex justify-content-center ">
            Deadline:
          </label>
          <input
            id="deadline"
            value={task.deadline}
            type="text"
            onChange={handleTextChange}
            placeholder="deadline of task"
            className="form-control"
            required
          />
        </div>
        <div className="form-group my-4 h5">
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
        <div className="form-group my-4 h5">
          <label
            htmlFor="assigned_to"
            className="d-flex justify-content-center "
          >
            Assigned to:
          </label>
          <input
            id="assigned_to"
            value={task.assigne_to}
            type="text"
            onChange={handleTextChange}
            placeholder="assigned_to of task"
            className="form-control"
            required
          />
        </div>
        <div className="form-group my-4 h5">
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
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TaskEditForm;
