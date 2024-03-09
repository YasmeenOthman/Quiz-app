import React from "react";

import { FaUsers } from "react-icons/fa6";
import "./card.css";
function Card() {
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h4>Quiz name</h4>
        </div>
        <div class="flip-card-back">
          <h1>Quiz name</h1>
          <div className="participants">
            <FaUsers />
            <span> : 10</span>
          </div>
          <button>Start </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
