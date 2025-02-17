import React from "react";
import useTheme from "./useTheme"; // Import du hook
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './app.css'

const Navbar = () => {
  
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar navbar-expand custom-navbar pe-4">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Navbar Links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link px-4 py-3 active" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-4 py-3" href="#">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-4 py-3" href="#">About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-4 py-3" href="#">Resume</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-4 py-3" href="#">Contact</a>
          </li>
        </ul>

        {/* Dark Mode Toggle */}
        <button className="dark-mode-btn " onClick={toggleTheme}>
          <i className={`bi ${theme === "light" ? "bi-moon" : "bi-sun"} fs-4`}></i>
        </button>

        {/* "Let's Talk" Button */}
        <button className="btn btn-primary">        
          <a href="#" className="link">Let’s Talk <i className="bi bi-chat-dots"></i></a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
