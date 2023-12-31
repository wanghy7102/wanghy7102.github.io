import { HashRouter, Routes, Route } from "react-router-dom";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
//import './App.css'
import Layout from "./Layout";
import Home from "./home/Home";
import Projects from "./projects/Projects";
import About from "./about/About";
import Contact from "./contact/Contact";
import Success from "./success/Success";
import Error from "./error/Error";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="success" element={<Success />} />
          <Route path="error" element={<Error />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
