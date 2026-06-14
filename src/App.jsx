import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Freelance from "./pages/Freelance";
import Experience from "./pages/Experience";


import Illustration from "./pages/Illustration";
import SocialMedia from "./pages/SocialMedia";
import LogoDesign from "./pages/LogoDesign";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects/freelance" element={<Freelance />} />
      <Route path="/projects/illustration" element={<Illustration />} />
      <Route path="/projects/social-media" element={<SocialMedia />} />
      <Route path="/projects/logo-design" element={<LogoDesign />} />
    </Routes>
  );
};

export default App;
