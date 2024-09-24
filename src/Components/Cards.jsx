import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
/* The following line can be included in a src/App.scss */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Components/Cards.css";

function Cards({ card }) {
  return (
    <div className="container">
      {card.map((item, id) => (
        <div className="cards">
          <img src={item.image} alt={item.title}></img>
          <div class="text-content" key={id}>
            <h1>{item.title}</h1>
            <h3>{item.subtitle}</h3>
            <div class="btns">
              <button>Download</button>
              <button>Share</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
