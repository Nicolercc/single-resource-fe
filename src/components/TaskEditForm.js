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
    assigne_to: "",
    status: "",
  });

  const handleTextChange = (event) => {
    setTask({ ...task, [event.target.id]: event.target.value });
  };

  

  // Update a color. Redirect to show view
  const updateTask = () => {
    fetch(`${API}/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        navigate(`/tasks/${id}`);
      });
  };

  // On page load, fill in the form with the Task data.
  useEffect(() => {
    fetch(`${API}/tasks/${id}`)
      .then((res) => res.json(task))
      .then((res) => setTask(res));
  }, [id, task]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTask();
  };

  return (
    <div className="Edit">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">name</label>
          <input
            id="name"
            value={task.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Name of task"
            required
          />

          <label htmlFor="description">description</label>
          <input
            id="description"
            value={task.description}
            type="text"
            onChange={handleTextChange}
            placeholder="description of task"
            required
          />

          <label htmlFor="deadline">deadline</label>
          <input
            id="deadline"
            value={task.deadline}
            type="text"
            onChange={handleTextChange}
            placeholder="deadline of task"
            required
          />

          <label htmlFor="category">category</label>
          <input
            id="category"
            value={task.category}
            type="text"
            onChange={handleTextChange}
            placeholder="category of task"
            required
          />

          <label htmlFor="assigned_to">assigned_to</label>
          <input
            id="assigned_to"
            value={task.assigne_to}
            type="text"
            onChange={handleTextChange}
            placeholder="assigned_to of task"
            required
          />

          <label htmlFor="status">status</label>
          <input
            id="status"
            value={task.status}
            type="text"
            onChange={handleTextChange}
            placeholder="status of task"
            required
          />
      </form>
      <br />
      <Link to={`/tasks/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default TaskEditForm

