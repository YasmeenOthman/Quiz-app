import React from "react";
import Card from "./Card";
import "./cards.css";
function Cards() {
  return (
    <div className="cards-section">
      <h2>Our latest Quizzes</h2>
      <div className="cards-container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Cards;
