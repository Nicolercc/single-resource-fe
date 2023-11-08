import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import Task from "./Task";
const API = `http://localhost:3005/tasks`;

function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  });

  async function getTasks() {
    try {
      const result = await axios.get(`${API}`);
      setTasks(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="tasks">
      <section>
        <div className="list-group">
          {tasks.map((task, index) => {
            return (
              <Link
                to={`/${task.id}`}
                key={index}
                className="list-group-item list-group-item-action"
              >
                {task.name}
              </Link>
            );
          })}
          <li className="list-group-item"></li>
        </div>
      </section>
    </div>
  );
}

export default Tasks;
