// Component
import Home from "./components/Home";
import Navbar from "./components/Navbar";

// Routes
import About from "./routes/about";
import AboutApp from "./routes/about-app";
import AboutAuthor from "./routes/about-author";

// React-Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<About />}>
          <Route path="about-app" element={<AboutApp />} />
          <Route path="about-author" element={<AboutAuthor />} />
        </Route>
        <Route path="notfound" element={<div style={{ marginLeft: "400px", paddingTop: "300px", fontSize: "100px" }}>Ups! Ada yang salah!</div>} />
      </Routes>
    </div>
  );
}

export default App;