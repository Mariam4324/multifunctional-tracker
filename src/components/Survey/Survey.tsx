"use client";
import SurveyOptions from "../SurveyOptions/SurveyOptions";
import { Button, Typography, FormControl, RadioGroup } from "@mui/material";
import { useEffect, useState } from "react";
import css from "./Survey.module.scss";
import { LogIn } from "lucide-react";
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
  let currentQue = questions.find((que) => que.id === quePage);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(surveySchema),
    defaultValues: {
      survey: "",
    },
  });

  useEffect(() => {
    const updatedQue = questions.find((que) => que.id === quePage);

    if (updatedQue) {
      currentQue = updatedQue;
    } else {
      currentQue = { id: 0, question: "error", options: ["please, try later"] };
    }
  }, [quePage]);

  const scrollPageHandler = () => {
    if (quePage <= questions.length) {
      return setQuePage((prev) => prev + 1);
    }
  };

  const scrollPageBackHandler = () => {
    if (quePage > 1) {
      setQuePage((prev) => prev - 1);
    } else {
      setQuePage(1);
    }
  };

  const formHandler = async (data: surveyTypes) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      reset();
      return (window.location.href = "/survey");
    } catch (error) {
      setError("root", { message: "account already exists" });
      console.log(error);
    }
  };

  return (
    <div className={css.survey}>
      {quePage > questions.length ? (
        <div>
          <h5 className={css.survey__title}>Thank you</h5>
          <div className={css.survey__btns}>
            <Button className={css.survey__btn} onClick={scrollPageBackHandler} variant="outlined" disabled={quePage === 1}>
              Back
            </Button>
            <Button className={css.survey__btn} href="/dashboard/home" variant="outlined" endIcon={<LogIn size={16} />}>
              Let's go
            </Button>
          </div>
        </div>
      ) : (
        <>
          <h5 className={css.survey__title}>Answer a couple of questions, please</h5>
          <form action="/" onSubmit={handleSubmit(formHandler)} className={css.survey__form}>
            <div>
              <Typography className={css.survey__question}>{currentQue?.question || "Question does not exist"}</Typography>
              <FormControl className={css.survey__formControl}>
                <RadioGroup {...register("survey")} row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                  {currentQue?.options.length
                    ? currentQue?.options.map((option) => {
                        return <SurveyOptions key={option} value={option} />;
                      })
                    : "Loading..."}
                </RadioGroup>
              </FormControl>
            </div>
            <div className={css.survey__btns}>
              <Button className={css.survey__btn} onClick={scrollPageBackHandler} variant="outlined" disabled={quePage === 1}>
                Back
              </Button>
              <Button onClick={scrollPageHandler} type="submit" disabled={isSubmitting} className={css.survey__btn} variant="outlined">
                {isSubmitting ? "Loading..." : "Next"}
              </Button>
            </div>
            {errors.survey && <p className="error-text">{errors.survey.message}</p>}
          </form>
        </>
      )}
    </div>
  );
};

export default Survey;
