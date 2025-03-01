import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Projects from "./pages/Projects";
import Resources from "./pages/Resources";
import "./App.css";
import { FaMoon, FaSun, FaUser, FaSignOutAlt, FaCog } from "react-icons/fa";
import rasm1 from './assets/rasm1.png'
import rasm2 from './assets/VR2.jpg'

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

            {/* User Account */}
            <div
              className="user-account"
              onMouseEnter={() => setShowAccountMenu(true)}
              onMouseLeave={() => setShowAccountMenu(false)}
            >
              <FaUser className="profile-icon" />
              {showAccountMenu && (
                <div className="account-menu">
                  <Link to="/settings"><FaCog /> Settings</Link>
                  <Link to="/logout"><FaSignOutAlt /> Log Out</Link>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="content">
          <div className="course-container">
            {[
              { img: rasm2, title: "Kompuyter modelashtirish va simullatsiyasi", desc: "3D modellarni obyektlarga bogʻlash" },
              { img: rasm1, title: "Axborot tizimlarini loyihalash", desc: "UML tili diagrammalarni yaratish" },
              { img: rasm1, title: "Kompyuter kriminalistikasi", desc: "Parollar bilan ishlash" },
              { img: rasm1, title: "Sun'iy intellekt va neyron tarmoqlari", desc: "Sun'iy intellekt ga kirish" },
              { img: rasm1, title: "Ma'lumotlarning intellektual tahlili", desc: "Ma'lumotlar turlari" },
              { img: rasm1, title: "Kompuyter modelashtirish va simullatsiyasi", desc: "3D modellarni obyektlarga bogʻlash" },
              { img: rasm2, title: "Kompuyter modelashtirish va simullatsiyasi", desc: "3D modellarni obyektlarga bogʻlash" },
              { img: rasm1, title: "Axborot tizimlarini loyihalash", desc: "UML tili diagrammalarni yaratish" },
              { img: rasm1, title: "Kompyuter kriminalistikasi", desc: "Parollar bilan ishlash" },
              { img: rasm1, title: "Sun'iy intellekt va neyron tarmoqlari", desc: "Sun'iy intellekt ga kirish" },
              { img: rasm1, title: "Ma'lumotlarning intellektual tahlili", desc: "Ma'lumotlar turlari" },
              { img: rasm2, title: "Kompuyter modelashtirish va simullatsiyasi", desc: "3D modellarni obyektlarga bogʻlash" },
           
        
            ].map((course, index) => (
              <div key={index} className="course-card">
                <img src={course.img} alt={course.title} />
                <div className="course-card-title">
                
                <h4>{course.title}</h4>
                <p>{course.desc}</p>
                <button>Darsni ko'rish</button>
                </div>
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
