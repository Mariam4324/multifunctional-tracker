"use client";
import Question from "@/components/Question/Question";
import { Button } from "@mui/material";
import { useState } from "react";
import css from "./survey.module.scss";
import { useRouter } from "next/router";

const questions = [
  {
    id: 1,
    question: "For what purpose do you want to use the application?",
    options: ["Work", "Studies", "Creation"],
  },
  {
    id: 2,
    question: "How often do you plan to use the application?",
    options: ["Daily", "Once a week", "Once a month"],
  },
  {
    id: 3,
    question: "Are you ready to tell your friends about us if you like the app?",
    options: ["Yes", "No"],
  },
];

const page = () => {
  const router = useRouter();
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  let currentQuestion = questions.filter((el) => el.id === currentQuestionId);
  console.log(currentQuestionId, currentQuestion);

  const scrollPageHandler = () => {
    if (currentQuestionId < questions.length) {
      setCurrentQuestionId((prev) => prev + 1);
      return (currentQuestion = questions.filter((el) => el.id === currentQuestionId)), console.log(currentQuestionId, currentQuestion);
    } else {
      return router.push("/dashboard");
    }
  };

  const scrollPageBackHandler = () => {
    if (currentQuestionId === 1) {
      setCurrentQuestionId(1);
      return (currentQuestion = questions.filter((el) => el.id === currentQuestionId)), console.log(currentQuestionId, currentQuestion);
    } else {
      setCurrentQuestionId((prev) => prev - 1);
      return (currentQuestion = questions.filter((el) => el.id === currentQuestionId)), console.log(currentQuestionId, currentQuestion);
    }
  };

  return (
    <div className={css.survey}>
      <div>{currentQuestionId > 3 ? <button>закончить</button> : <Question queTitle={currentQuestion[0].question} queAnswers={currentQuestion[0].options} />}</div>
      {/* <div>{<Question currentQuestionId={currentQuestionId} />}</div> */}
      <div className={css.survey__btns}>
        <Button
          onClick={() => scrollPageBackHandler()}
          style={{
            borderColor: "black",
            color: "black",
            textTransform: "none",
            maxWidth: "300px",
          }}
          variant="outlined"
        >
          Back
        </Button>
        <Button
          onClick={() => scrollPageHandler()}
          style={{
            borderColor: "black",
            color: "black",
            textTransform: "none",
            maxWidth: "300px",
          }}
          variant="outlined"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default page;
