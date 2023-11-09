import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  MDBCheckbox,
  MDBListGroup,
  MDBListGroupItem,
  MDBTooltip,
} from "mdb-react-ui-kit";
import axios from "axios";
import Total from "./Total";

const API = process.env.API_BASE_URL;

function Tasks() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getTasks() {
      try {
        const result = await axios.get(`${API}`);
        setTasks(result.data);
      } catch (e) {
        console.log(e);
      }
    }

    getTasks();
  }, []);

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

  const handleNew = () => {
    navigate(`/new`);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="container">
        <div className="loader">
          <h2 className="loader">Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      {isLoading ? (
        <div className="loader">
          <h2>Loading...</h2>
        </div>
      ) : (
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
              <MDBTooltip
                tag="a"
                wrapperProps={{ href: "#!" }}
                title="Remove item"
              >
                <FontAwesomeIcon
                  icon={faTimes}
                  className="primary-text-color mx-5"
                  onClick={() => handleTaskDeletion(task.id)}
                />
              </MDBTooltip>
            </MDBListGroupItem>
          ))}
          <div className="container d-flex justify-content-center">
            <button
              className="btn btn-secondary form-label container m-5"
              onClick={handleNew}
            >
              Add New
            </button>
          </div>
          <div>
            <Total tasks={tasks} />
          </div>
        </MDBListGroup>
      )}
    </div>
  );
}

export default Tasks;
