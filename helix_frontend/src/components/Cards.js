import React, { useState, useEffect } from "react";
import Card from "./Card";
import { getAllQuestions } from "../api/QuestionDataService";
import { timeoutBooleanFunction } from "../utils/helper";

const Cards = (props) => {
  const [questions, setQuestions] = useState("");
  const { setBackendReqError, setIsLoading } = props;

  const generateCards = (id, title, text) => {
    return <Card key={id} title={title} text={text} />;
  };

  useEffect(() => {
    const res = getAllQuestions();
    setIsLoading(true);
    res.then((data) => {
      setIsLoading(false);
      if (data.success) {
        setQuestions(data.questions);
      } else {
        timeoutBooleanFunction(setBackendReqError, true, false, 1500);
      }
    });
  }, [setBackendReqError, setIsLoading]);

  return (
    <div className="card-lists">
      {questions.length > 0 &&
        questions.map((question) =>
          generateCards(question.question_id, question.title, question.text)
        )}
    </div>
  );
};

export default Cards;
