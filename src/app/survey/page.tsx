"use client";
import Question from "@/components/Question/Question";
import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import css from "./survey.module.scss";
import StartRoundedIcon from "@mui/icons-material/StartRounded";

const questions = [
  {
    id: 1,
    question: "What will you use this app for?",
    options: ["work", "studies", "business", "creation", "everything"],
  },
  {
    id: 2,
    question: "How often will you use this app?",
    options: ["daily", "sometimes", "rerely"],
  },
  {
    id: 3,
    question: "Are you ready to help me improve?",
    options: ["Yes", "No"],
  },
];

const page = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [selectedOption, setSelectedOption] = useState<boolean>(false);
  let currentQue = questions.find((que) => que.id === currentQuestionId);

  useEffect(() => {
    const updatedQue = questions.find((que) => que.id === currentQuestionId);

    if (updatedQue) {
      currentQue = updatedQue;
    } else {
      currentQue = { id: 0, question: "error", options: ["please, try later"] };
    }
  }, [currentQuestionId]);

  const scrollPageHandler = () => {
    if (currentQuestionId <= questions.length) {
      return setCurrentQuestionId((prev) => prev + 1);
      setSelectedOption(false)
    }
  };

  const scrollPageBackHandler = () => {
    if (currentQuestionId > 1) {
      return setCurrentQuestionId((prev) => prev - 1);
    } else {
      setCurrentQuestionId(1);
    }
  };

  return (
    <div className={css.survey}>
      {currentQuestionId > questions.length ? (
        <>
          <div className={css["survey-finish"]}>
            <Typography className={css["survey-finish__title"]} color="white">
              Thanks!
            </Typography>
            <Button className={css["survey-finish__btn"]} href="/dashboard" endIcon={<StartRoundedIcon />}>
              Finish
            </Button>
          </div>

          <div className={css.survey__btns}>
            <Button className={css["survey-btn"]} onClick={scrollPageBackHandler} variant="outlined" disabled={currentQuestionId === 1}>
              Back
            </Button>
          </div>
        </>
      ) : (
        <>
          <Question setSelectedOption={setSelectedOption} queTitle={currentQue.question} queAnswers={currentQue.options} />
          <div className={css.survey__btns}>
            <Button className={css["survey-btn"]} onClick={scrollPageBackHandler} variant="outlined" disabled={currentQuestionId === 1}>
              Back
            </Button>
            <Button className={css["survey-btn"]} onClick={scrollPageHandler} variant="outlined" disabled={currentQuestionId > questions.length || selectedOption === false}>
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default page;
