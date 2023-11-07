import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import Home from "./components/Home";
import Nav from "./Components/Nav";
import Tasks from "./Components/Tasks";
import Task from "./Components/Task";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="/task" element={<Task />} />
            {/* <Route path="/colors/new" element={<New />} /> */}
            {/* <Route path="/colors/:index" element={<Show />} /> */}
            {/* <Route path="/colors/:index/edit" element={<Edit />} /> */}
            {/* <Route path="*" element={<FourOFour />} /> */}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
