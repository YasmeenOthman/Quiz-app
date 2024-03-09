import React, { useState } from "react";
import "./home.css";
import Cards from "../card/Cards";
import Navbar from "../Nav/Navbar";
function Home() {
  return (
    <div className="home-content">
      <Navbar />
      <div className="hero-section">
        <div className="hero-content">
          <h1>Test</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste in,
            impedit aspernatur aperiam tempore odio ducimus? Quasi non voluptate
            facilis blanditiis deleniti quibusdam, error laudantium doloribus
            explicabo modi. Incidunt, ipsam!
          </p>
        </div>

        <div className="hero-image">
          <img
            src="https://www.codingal.com/resources/wp-content/uploads/2021/04/diy-coding.png"
            alt=""
          />
        </div>
      </div>

      <Cards />
    </div>
  );
}

export default Home;
