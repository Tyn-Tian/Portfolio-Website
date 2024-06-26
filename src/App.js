import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Skill from "./pages/Skill/Skill";
import Experience from "./pages/Experience/Experience";
import Education from "./pages/Education/Education";
import Project from "./pages/Project/Project";
import NotFound from "./pages/NotFound/NotFound";

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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
