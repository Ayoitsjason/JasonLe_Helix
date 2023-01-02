import React from "react";
import Avatar from "../images/Avatar.JPG";

const Card = (props) => {
  const { title, text } = props;
  return (
    <div className="card">
      <div className="card-main text-left">
        <header className="header-small">{title}</header>
        <p className="text-main">{text}</p>
        {/* <header className="header-small">
          MongoDb how to search by using regrex but avoiding case sensitive?
        </header>
        <p className="text-main">
          It allows users anywhere in the world to trade crypto without an
          intermediary. UNI, the governance token that allows users to vote on
          key protocol changes, is on of the largest cryptocurrencies by market
          cap..
        </p> */}
      </div>
      <div className="card-secondary text-left">
        <header className="header-tiny">Asked by:</header>
        <div className="module__content">
          <img className="image-avatar" src={Avatar} alt="Penguin with hat" />
          <div className="module__content-text__outer">
            <p className="text-secondary blue-primary bold">
              Psuedo Near Expert
            </p>
            <div className="module__content-text">
              <p className="text-secondary light">47</p>
              <p className="text-secondary light">Answers</p>
              <p className="text-secondary light">.</p>
              <p className="text-secondary light">1</p>
              <p className="text-secondary light">Question</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
