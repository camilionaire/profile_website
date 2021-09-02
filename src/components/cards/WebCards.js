import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function WebCards() {
  return (
    <div className="cards">
      <h1>Check out some of my projects!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/forester.jpg"
              text="Full Stack Web Dev Group Project. Web app using React, Google Api's and MongoDB. Locate and mark fruits, veggies, and fungi."
              label="Web Dev"
              path="https://foragecompass.herokuapp.com"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WebCards;
