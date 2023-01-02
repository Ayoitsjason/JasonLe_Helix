import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Header from "./Header";
import About from "./About";
import TopExperts from "./TopExperts";
import Cards from "./Cards";
import NewQuestion from "./NewQuestion";

const Splash = (props) => {
  const { questionPopup, setQuestionPopup } = props;
  const { isLoading, setIsLoading } = props;
  const { backendReqError, setBackendReqError } = props;
  return (
    <div className="main-container">
      <Header />
      <div className="main-content">
        {isLoading && <LinearProgress />}
        {backendReqError && (
          <p className="alert text-tertiary danger">HTTP Error 500</p>
        )}
        {questionPopup ? (
          <NewQuestion
            setQuestionPopup={setQuestionPopup}
            setIsLoading={setIsLoading}
          />
        ) : (
          <Cards
            setBackendReqError={setBackendReqError}
            setIsLoading={setIsLoading}
          />
        )}
      </div>
      <div className="side-modules">
        <About />
        <TopExperts />
      </div>
    </div>
  );
};

export default Splash;
