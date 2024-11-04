"use client";
import Question from "@/components/Question/Question";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import css from "./survey.module.scss";

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
  const [pageNumber, setPageNumber] = useState(1);

  // useEffect(() => {}, [])

  const currentQuestion = questions.filter((el) => el.id == pageNumber);

  const scrollPageHandler = () => {
    if (pageNumber < 1 || pageNumber > 3) {
      return setPageNumber(1), console.log(pageNumber, currentQuestion);
    } else {
      return setPageNumber((prevPageNumber) => prevPageNumber + 1), console.log(pageNumber, currentQuestion);
    }
  };

  const scrollPageBackHandler = () => {
    if (pageNumber < 1 || pageNumber > 3) {
      return setPageNumber(1), console.log(pageNumber, currentQuestion);
    } else {
      return setPageNumber((prevPageNumber) => prevPageNumber - 1), console.log(pageNumber, currentQuestion);
    }
  };

  return (
    <div className={css.survey}>
      <div>{<Question queTitle={currentQuestion[0].question} queAnswers={currentQuestion[0].options} />}</div>
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
