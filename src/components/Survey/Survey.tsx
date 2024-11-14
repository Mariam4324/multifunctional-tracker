"use client";
import SurveyOptions from "../SurveyOptions/SurveyOptions";
import { Button, Typography, FormControl, RadioGroup } from "@mui/material";
import { useEffect, useState } from "react";
import css from "./Survey.module.scss";
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
    options: ["often", "sometimes", "rarely"],
  },
  {
    id: 3,
    question: "Are you ready to help me improve?",
    options: ["Yes", "No"],
  },
];

const Survey = () => {
  const [quePage, setQuePage] = useState(1);
  let currentQue = questions.find((que) => que.id === quePage);

  useEffect(() => {
    currentQue = questions.find((que) => que.id === quePage);
  }, [quePage]);

  const scrollPageHandler: () => void = () => {
    if (quePage < questions.length) {
      setQuePage((prev) => prev + 1);
    }
  };

  const scrollPageBackHandler: () => void = () => {
    if (quePage > 1) {
      setQuePage((prev) => prev - 1);
    } else {
      setQuePage(1);
    }
  };

  return (
    <div className={css.survey}>
      {quePage > questions.length ? (
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
            <Button className={css["survey-btn"]} onClick={scrollPageBackHandler} variant="outlined" disabled={quePage === 1}>
              Prev
            </Button>
          </div>
        </>
      ) : (
        <div className={css.survey__form}>
          <div>
            <Typography color="white" style={{ fontSize: "28px", fontWeight: "700" }}>
              {currentQue?.question || "Question does not exist"}
            </Typography>
            <FormControl style={{ marginTop: "5px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                {currentQue?.options.length
                  ? currentQue?.options.map((option) => {
                      return <SurveyOptions key={option} value={option} />;
                    })
                  : "Loading..."}
              </RadioGroup>
            </FormControl>
          </div>

          <div className={css.survey__btns}>
            <Button className={css["survey-btn"]} onClick={scrollPageBackHandler} variant="outlined" disabled={quePage === 1}>
              Prev
            </Button>

            <Button onClick={scrollPageHandler} type="submit" className={css["survey-btn"]} variant="outlined">
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Survey;
