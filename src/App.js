import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/colors" element={<Index />} /> */}
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
