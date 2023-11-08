import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import Home from "./components/Home";
import Nav from "./Components/Nav";
import Tasks from "./Components/Tasks";
import Task from "./Components/Task";
import TaskNewForm from "./Components/TaskNewForm";
import TaskEditForm from "./Components/TaskEditForm";


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="/:id" element={<Task />} />
            <Route path="/tasks/New Task" element={<TaskNewForm />} />
            {/* <Route path="/colors/:index" element={<Show />} /> */}
            <Route path="/tasks/:id/edit" element={<TaskEditForm />} />
            {/* <Route path="*" element={<FourOFour />} /> */}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
