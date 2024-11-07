"use client";
import Question from "@/components/Question/Question";
import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import css from "./survey.module.scss";

const questions = [
  {
    id: 1,
    question: "For what purpose do you want to use this application?",
    options: ["Work", "Studies", "Creation", "Daily basis"],
  },
  {
    id: 2,
    question: "How often do you plan to use this application?",
    options: ["Daily", "Once a week", "Once a month"],
  },
  {
    id: 3,
    question: "Are you ready to tell your friends about us if you like this app?",
    options: ["Yes", "No"],
  },
];

const page = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  let currentQue = questions.find((que) => que.id === currentQuestionId);

  useEffect(() => {
    const updatedQue = questions.find((que) => que.id === currentQuestionId);

    if (updatedQue) {
      currentQue = updatedQue;
    } else {
      currentQue = { id: 0, question: "error", options: ["please, try later"] };
    }

    console.log(currentQue);
  }, [currentQuestionId]);

  const scrollPageHandler = () => {
    if (currentQuestionId <= questions.length) {
      return setCurrentQuestionId((prev) => prev + 1);
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
      <div>
        {currentQuestionId > questions.length ? (
          <div className={css["survey-finish"]}>
            <Typography className={css["survey-finish__title"]} variant="h6" color="white">
              Thanks!
            </Typography>
            <Button className={css["survey-finish__btn"]} href="/dashboard">
              Finish
            </Button>
          </div>
        ) : (
          <Question queTitle={currentQue.question} queAnswers={currentQue.options} />
        )}
      </div>

      <div className={css.survey__btns}>
        <Button
          onClick={scrollPageBackHandler}
          style={{
            borderColor: "black",
            color: "black",
            textTransform: "none",
            maxWidth: "300px",
          }}
          variant="outlined"
          disabled={currentQuestionId === 1}
        >
          Back
        </Button>
        <Button
          onClick={scrollPageHandler}
          style={{
            borderColor: "black",
            color: "black",
            textTransform: "none",
            maxWidth: "300px",
          }}
          variant="outlined"
          disabled={currentQuestionId > questions.length}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default page;
