import React from "react";
import useTheme from "./useTheme"; // Import du hook
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Navbar Links */}
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a className="nav-link active home-btn" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Resume</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>

        {/* Dark Mode Toggle */}
        <button className="dark-mode-btn" onClick={toggleTheme}>
          <i className={`bi ${theme === "light" ? "bi-moon" : "bi-sun"} fs-4`}></i>
        </button>

        {/* "Let's Talk" Button */}
        <a href="#" className="btn talk-btn">Let’s Talk <i className="bi bi-chat-dots"></i></a>
      </div>
    </nav>
  );
};

export default Navbar;
