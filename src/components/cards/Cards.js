import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out thest EPIC Destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/~camilo3/webdev"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Explore the mysterious island where eight people have died"
              label="Mystery"
              path="/~camilo3/programming"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/~camilo3/webdev"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Explore the mysterious island where eight people have died"
              label="Mystery"
              path="/~camilo3/programming"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Explore the mysterious island where eight people have died"
              label="Mystery"
              path="/~camilo3/programming"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
