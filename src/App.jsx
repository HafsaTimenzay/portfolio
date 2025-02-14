import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import ProfileCard from './profile_card/index.jsx'
import MainPage from './main_page/index.jsx'

const App = () => {
  const canvasRef = useRef(null);
  const [darkMode, setDarkMode] = useState(true); // Light/Dark mode state

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    const stars = [];
    const numStars = 250;

    const initStars = () => {
      stars.length = 0;
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2,
          speed: Math.random() * 0.5 + 0.1,
          color: Math.random() > 0.5 ? "#7059e2" : "#aa70e0", // Two star colors
        });
      }
    };
    initStars();

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color; // Use the star's color
        ctx.fill();
        ctx.closePath();

        // Move stars
        star.x += star.speed;

        // Reset star position when out of bounds
        if (star.x > canvas.width) {
          star.x = 0;
        }
      }
      requestAnimationFrame(drawStars);
    };
    drawStars();

    window.addEventListener("resize", () => {
      resizeCanvas();
      initStars();
    });
  }, []);

  return (
    <div className="wrapper" style={{ background: darkMode ? "black" : "white" }}>
      
      <canvas ref={canvasRef} className="canvas" />

      {/* Content on top of the background */}
      <div className="content">
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
        </button>
        <ProfileCard />
        <MainPage />
      </div>
      
    </div>
  );
};

export default App;
