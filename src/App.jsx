import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Projects from "./pages/Projects";
import Resources from "./pages/Resources";
import "./App.css";
import { FaMoon, FaSun, FaUser } from "react-icons/fa";


const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 50);
    });
  }, []);

  return (
    <Router>
      <div className={`container ${darkMode ? "dark" : ""}`}>
        {/* Sidebar */}
        <nav className="sidebar">
          <h2>UMFT</h2>
          <ul>
            <li><Link to="/">Bosh sahifa</Link></li>
            <li><Link to="/courses">Fanlarga oid darslar</Link></li>
            <li><Link to="/projects">Loyihalar</Link></li>
            <li><Link to="/resources">Vazifalar</Link></li>
          </ul>
        </nav>

        {/* Navbar */}
        <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
          <div className="navbar-content">
            <button onClick={() => setDarkMode(!darkMode)} className="dark-mode-btn">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <FaUser className="profile-icon" />
          </div>
        </header>

        {/* Main Content */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;