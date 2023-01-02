import React from "react";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import TokenOutlinedIcon from "@mui/icons-material/TokenOutlined";

const About = () => {
  return (
    <div className="side-module">
      <h3 className="header-medium">About</h3>
      <ul className="module__contents">
        <li className="module__content">
          <GroupsOutlinedIcon className="icon" />
          <div className="module__content-text">
            <p className="text-secondary">246</p>
            <p className="text-secondary">Experts</p>
          </div>
        </li>
        <li className="module__content">
          <ChatBubbleOutlineOutlinedIcon className="icon" />
          <div className="module__content-text">
            <p className="text-secondary">100k</p>
            <p className="text-secondary">Questions and Answers</p>
          </div>
        </li>
        <li className="module__content">
          <ThumbUpOutlinedIcon className="icon" />
          <div className="module__content-text">
            <p className="text-secondary">50k</p>
            <p className="text-secondary">Upvotes</p>
          </div>
        </li>
        <li className="module__content">
          <TokenOutlinedIcon className="icon" />
          <div className="module__content-text">
            <p className="text-secondary">145</p>
            <p className="text-secondary">Tokens Awarded</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default About;
