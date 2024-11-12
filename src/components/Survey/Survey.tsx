"use client";
import SurveyRadio from "../SurveyOptions/SurveyOptions";
import { Button, Typography, FormControl, RadioGroup } from "@mui/material";
import { useState } from "react";
import css from "./Survey.module.scss";
import StartRoundedIcon from "@mui/icons-material/StartRounded";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { surveySchema, surveyTypes } from "../../../lib/types";

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
  const currentQue = questions.find((que) => que.id === quePage);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<surveyTypes>({
    resolver: zodResolver(surveySchema),
    defaultValues: {
      radio: "",
    },
  });

  const scrollPageHandler = () => {
    if (quePage <= questions.length) {
      return setQuePage((prev) => prev + 1);
    }
  };

  const scrollPageBackHandler: () => void = () => {
    if (quePage > 1) {
      return setQuePage((prev) => prev - 1);
    } else {
      return setQuePage(1);
    }
  };

  const onSubmit = (data: surveyTypes) => {
    console.log(data);
    console.log("onSubmit");
    return scrollPageHandler();
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
        <form onSubmit={handleSubmit(onSubmit)} className={css.survey__form}>
          <div>
            <Typography color="white" style={{ fontSize: "28px", fontWeight: "700" }}>
              {currentQue?.question || "Question does not exist"}
            </Typography>
            <FormControl style={{ marginTop: "5px" }}>
              <RadioGroup {...register("radio")} row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                {currentQue?.options.length
                  ? currentQue?.options.map((el) => {
                      return <SurveyRadio key={el} value={el} />;
                    })
                  : "Loading..."}
              </RadioGroup>
            </FormControl>
            {errors.radio && <p className={css.survey__error}>{errors.radio.message}</p>}
          </div>

          <div className={css.survey__btns}>
            <Button className={css["survey-btn"]} onClick={scrollPageBackHandler} variant="outlined" disabled={quePage === 1}>
              Prev
            </Button>

            <Button type="submit" className={css["survey-btn"]} disabled={isSubmitting} variant="outlined">
              {isSubmitting ? "Loading..." : "Next"}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Survey;
