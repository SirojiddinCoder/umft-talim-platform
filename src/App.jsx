import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Projects from "./pages/Projects";
import Resources from "./pages/Resources";
import "./App.css";
import { FaMoon, FaSun, FaUser } from "react-icons/fa";
import course1 from "./assets/rasm1.png";
import course2 from "./assets/rasm1.png";
import course3 from "./assets/rasm1.png";
import course4 from "./assets/rasm1.png";

// import './mainContent.css'

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const courses = [

    { img: course4, title: "Axborot tizimlarini loyihalash", desc: "UML tili diagrammalarni yaratish" },
    { img: course4, title: "Axborot tizimlarini loyihalash", desc: "UML tili diagrammalarni yaratish" },
    { img: course4, title: "Axborot tizimlarini loyihalash", desc: "UML tili diagrammalarni yaratish" },
    { img: course4, title: "Axborot tizimlarini loyihalash", desc: "UML tili diagrammalarni yaratish" },
    { img: course4, title: "Axborot tizimlarini loyihalash", desc: "UML tili diagrammalarni yaratish" },
    { img: course4, title: "Axborot tizimlarini loyihalash", desc: "UML tili diagrammalarni yaratish" },
    { img: course4, title: "Axborot tizimlarini loyihalash", desc: "UML tili diagrammalarni yaratish" },
    { img: course4, title: "Axborot tizimlarini loyihalash", desc: "UML tili diagrammalarni yaratish" },

  ];

  return (
    <Router>
      <div className={`container ${darkMode ? "dark" : ""}`}>
        <nav className="sidebar">
          <h2>UMFT Talim Platformasi</h2>
          <ul>
            <li><Link to="/">Bosh sahifa</Link></li>
            <li><Link to="/courses">Fanlarga oid darslar</Link></li>
            <li><Link to="/projects">Loyihalar</Link></li>
            <li><Link to="/resources">Vazifalar</Link></li>
          </ul>
        </nav>

        <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
          <div className="navbar-content">
            <button onClick={() => setDarkMode(!darkMode)} className="dark-mode-btn">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <FaUser className="profile-icon" />
          </div>
        </header>

        <div className="content">
          <div className="course-container">
            {courses.map((course, index) => (
              <div className="course-card" key={index}>
                <img src={course.img} alt={course.title} />
                <h4>{course.title}</h4>
                <p>{course.desc}</p>
                <button>Darsni ko'rish</button>
              </div>
            ))}
          </div>

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