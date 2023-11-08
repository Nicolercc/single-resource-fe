import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
<<<<<<< HEAD
import Tasks from "./Components/Tasks";
import Task from "./Components/Task";
import TaskNewForm from "./Components/TaskNewForm";
import TaskEditForm from "./Components/TaskEditForm";
=======
import Index from "./Pages/Index";
import Home from "./Pages/Home";
import Edit from "./Pages/Edit";
import New from "./Pages/New";
import Show from "./Pages/Show";
import "./App.css";
>>>>>>> edf725c9970c9f5f17bf062e5c486c6af6e7f205


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <main>
          <Routes>
<<<<<<< HEAD
            <Route path="/" element={<Tasks />} />
            <Route path="/:id" element={<Task />} />
            <Route path="/tasks/New Task" element={<TaskNewForm />} />
            {/* <Route path="/colors/:index" element={<Show />} /> */}
            <Route path="/tasks/:id/edit" element={<TaskEditForm />} />
=======
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Index />} />
            <Route path="/:id" element={<Show />} />
            <Route path="/new" element={<New />} />
            <Route path="/edit/:id" element={<Edit />} />
>>>>>>> edf725c9970c9f5f17bf062e5c486c6af6e7f205
            {/* <Route path="*" element={<FourOFour />} /> */}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
