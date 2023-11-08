import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  MDBCheckbox,
  MDBListGroup,
  MDBListGroupItem,
  MDBTooltip,
} from "mdb-react-ui-kit";


const API = `http://localhost:3005/tasks`;

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

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
  const handleTaskCompletion = (id) => {
    if (completedTasks.includes(id)) {
      setCompletedTasks(completedTasks.filter((id) => id !== parseInt(id)));
    } else {
      setCompletedTasks([...completedTasks, id]);
    }
  };
  const handleTaskDeletion = async (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (isConfirmed) {
      try {
        await axios.delete(`${API}/${id}`);
        window.location.reload();
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("Deletion canceled.");
    }
  };

  return (
    <MDBListGroup className="mb-0">
      {tasks.map((task, index) => (
        <MDBListGroupItem
          className={`d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2 ${
            completedTasks.includes(task.id) ? "completed-task" : ""
          }`}
          key={index}
        >
          <div className="d-flex align-items-center">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id={`flexCheck${index}`}
              className="me-3"
              checked={completedTasks.includes(task.id)}
              onChange={() => handleTaskCompletion(task.id)}
            />
            <Link to={`/${task.id}`} className="text-decoration-none">
              {completedTasks.includes(task.id) ? (
                <s>{task.description}</s>
              ) : (
                task.description
              )}
            </Link>
          </div>
          <MDBTooltip tag="a" wrapperProps={{ href: "#!" }} title="Remove item">
            <FontAwesomeIcon
              icon={faTimes}
              className="primary-text-color mx-5"
              onClick={() => handleTaskDeletion(task.id)}
            />
          </MDBTooltip>
        </MDBListGroupItem>
      ))}
    </MDBListGroup>
  );
}

export default Tasks;
