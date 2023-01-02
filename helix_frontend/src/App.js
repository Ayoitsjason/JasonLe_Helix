import React, { useState } from "react";
import "./App.css";
import "./css/custom.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Splash from "./components/Splash";

function App() {
  const [questionPopup, setQuestionPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [backendReqError, setBackendReqError] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar
            questionPopup={questionPopup}
            setQuestionPopup={setQuestionPopup}
          />
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <Splash
                setQuestionPopup={setQuestionPopup}
                questionPopup={questionPopup}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                backendReqError={backendReqError}
                setBackendReqError={setBackendReqError}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
