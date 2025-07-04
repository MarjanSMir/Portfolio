import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Projects from "../../pages/Projects/Projects";
import Contact from "../../pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/client/src/pages/About" element={<About />} />
        <Route path="/client/src/pages/Projects" element={<Projects />} />
        <Route path="/client/src/pages/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
