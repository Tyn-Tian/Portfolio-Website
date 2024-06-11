import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skill from "./pages/Skill";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Project from "./pages/Project";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/skills" element={<Skill />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
