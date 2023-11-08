import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API = `http://localhost:3005/tasks`;

function Task() {
  const { id } = useParams();
  const [task, setTask] = useState({});

  useEffect(() => {
    getTask();
  }, [id]);

  async function getTask() {
    try {
      const result = await axios.get(`${API}/${id}`);
      setTask(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="card" style={{}}>
      <div className="cardbody">
        <h2 className="card-title">{task.name}</h2>
        <h4 className="card-text">{task.description} </h4>
        <h5>{task.deadline} </h5>
        <p>category: {task.category} </p>
        <p>assigned to: {task.assigned_to}</p>
        <p>status: {task.status}</p>
      </div>
    </div>
  );
}

export default Task;
