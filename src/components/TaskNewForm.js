import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API = `http://localhost:3005/tasks`;

function TaskNewForm() {

  const navigate = useNavigate();

  const [task, settask] = useState({
    name: "",
    description: "",
    deadline: "",
    category: "",
    assigne_to: "",
    status: ""
    })
  
    const addTask = () => {
      const taskData = {
        name: task.name,
      description: task.description,
      deadline: task.deadline,
      category: task.category,
      assigne_to: task.assigne_to,
      status: task.status
      }  

      try { 
        fetch(`${API}/tasks`, {
          method: `POST`,
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(taskData)
        })
          .then(res => res.json())
          .then(() => navigate('/tasks'))

      } catch (e) {
        console.log(e)
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
      <div>
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
      </div>
    );
}

export default TaskNewForm;
