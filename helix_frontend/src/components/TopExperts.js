import React from "react";
import Avatar from "../images/Avatar.JPG";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const TopExperts = () => {
  return (
    <div className="side-module">
      <h3 className="header-medium">Top Experts</h3>
      <ul className="module__contents">
        <li className="module__content">
          <img className="image-avatar" src={Avatar} alt="Penguin with hat" />
          <div className="module__content-text__outer">
            <p className="text-secondary blue-primary bold">
              Psuedo Near Expert
            </p>
            <div className="module__content-text">
              <p className="text-secondary light">47</p>
              <ThumbUpIcon className="icon" fontSize="small" />
              <p className="text-tertiary light">Collected</p>
            </div>
          </div>
        </li>
        <li className="module__content">
          <img className="image-avatar" src={Avatar} alt="Penguin with hat" />
          <div className="module__content-text__outer">
            <p className="text-secondary blue-primary bold">Near Expert</p>
            <div className="module__content-text">
              <p className="text-secondary light">47</p>
              <ThumbUpIcon className="icon" fontSize="small" />
              <p className="text-tertiary light">Collected</p>
            </div>
          </div>
        </li>
        <li className="module__content">
          <img className="image-avatar" src={Avatar} alt="Penguin with hat" />
          <div className="module__content-text__outer">
            <p className="text-secondary blue-primary bold">Bitcoin Maxi</p>
            <div className="module__content-text">
              <p className="text-secondary light">47</p>
              <ThumbUpIcon className="icon" fontSize="small" />
              <p className="text-tertiary light">Collected</p>
            </div>
          </div>
        </li>
        <li className="module__content">
          <img className="image-avatar" src={Avatar} alt="Penguin with hat" />
          <div className="module__content-text__outer">
            <p className="text-secondary blue-primary bold">Ethereum Maxi</p>
            <div className="module__content-text">
              <p className="text-secondary light">47</p>
              <ThumbUpIcon className="icon" fontSize="small" />
              <p className="text-tertiary light">Collected</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TopExperts;
