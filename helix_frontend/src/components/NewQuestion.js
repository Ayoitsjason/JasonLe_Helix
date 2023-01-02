import React, { useState } from "react";
import { Formik } from "formik";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import FilterIcon from "@mui/icons-material/Filter";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import IconButton from "@mui/material/IconButton";
import { createQuestion } from "../api/QuestionDataService";
import { timeoutBooleanFunction } from "../utils/helper";

const NewQuestion = (props) => {
  const { setQuestionPopup, setIsLoading } = props;
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitFailed, setSubmitFailed] = useState(false);

  const onClickQuit = () => {
    setQuestionPopup(false);
  };

  const onClickSubmit = (values, { setSubmitting, resetForm }) => {
    resetForm({});
    setSubmitting(false);
    setIsLoading(true);
    const res = createQuestion(values);
    res.then((data) => {
      setIsLoading(false);
      if (data.success) {
        timeoutBooleanFunction(setSubmitSuccess, true, false, 1500);
      } else {
        timeoutBooleanFunction(setSubmitFailed, true, false, 1500);
      }
    });
  };

  return (
    <div className="popup-form text-left">
      {submitSuccess && (
        <p className="alert text-tertiary success">Post Success</p>
      )}
      {submitFailed && (
        <p className="alert text-tertiary danger">Post Failed</p>
      )}
      <div className="header-container__row">
        <header className="header-medium mb-1">New Question</header>
        <HighlightOffIcon
          className="blue-secondary pointer"
          onClick={onClickQuit}
          fontSize="medium"
        />
      </div>
      <Formik
        initialValues={{ title: "", text: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = (
              <p className="alert text-tertiary warning">Title Required</p>
            );
          } else if (!values.text) {
            errors.text = (
              <p className="alert text-tertiary warning">Question Required</p>
            );
          } else if (values.title.length > 100) {
            errors.title = (
              <p className="alert text-tertiary warning">Max Characters: 50</p>
            );
          } else if (values.text.length > 1000) {
            errors.text = (
              <p className="alert text-tertiary warning">
                Max Characters: 1000
              </p>
            );
          }
          return errors;
        }}
        onSubmit={onClickSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className="form-container" onSubmit={handleSubmit}>
            {errors.title && touched.title && errors.title}
            <input
              className="text-main"
              type="title"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              placeholder="Enter the question title"
            />
            {errors.text && touched.text && errors.text}
            <TextField
              className="custom__text-field text-tertiary"
              type="text"
              name="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.text}
              id="outlined-multiline-static"
              multiline
              rows={6}
              placeholder="Write your question here"
            />
            <div className="btn-group__secondary-container">
              <div className="btn-group">
                <Tooltip title="Text Field">
                  <IconButton>
                    <TextFieldsIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Upload Image">
                  <IconButton>
                    <FilterIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </div>
              <div className="btn-group">
                <button
                  className="btn btn-animate btn-secondary bold"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Post
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default NewQuestion;
