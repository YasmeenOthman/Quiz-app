import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
function Navbar() {
  return (
    <nav className="nav-container">
      <div className="logo">
        <img src="./logo2.png" alt="" />
      </div>
      <div className="links">
        <Link to="#">Quizzes</Link>
        <Link to="#">Quizzes</Link>
        <Link to="#">Quizzes</Link>
        <Link to="#">Quizzes</Link>
      </div>
    </nav>
  );
}

export default Navbar;
