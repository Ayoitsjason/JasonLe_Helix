import React from "react";
import { toggleBool } from "../utils/helper.js";

const Navbar = (props) => {
  const { questionPopup, setQuestionPopup } = props;
  const onClick = () => {
    setQuestionPopup(toggleBool(questionPopup));
  };

  return (
    <div className="links">
      <button className="btn btn-main" onClick={onClick}>
        Ask a question
      </button>
    </div>
  );
};

export default Navbar;
