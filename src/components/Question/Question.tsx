import { FormControl, RadioGroup, Typography } from "@mui/material";
import SurveyRadio from "../SurverRadio/SurveyRadio";
import css from "./Question.module.scss";
import { Dispatch, SetStateAction } from "react";

interface QuestionProps {
  queTitle: string;
  queAnswers: string[];
  setSelectedOption: Dispatch<SetStateAction<boolean>>;
}

const Question = ({ queTitle, queAnswers, setSelectedOption }: QuestionProps) => {
  const radioSelectHandler = () => {
    setSelectedOption(true);
  };

  return (
    <section className={css.que}>
      <div className={css.que__holder}>
        <Typography color="white" style={{ fontSize: "28px", fontWeight: "700" }}>
          {queTitle || "Question does not exist"}
        </Typography>
        <FormControl className={css.que__options}>
          <RadioGroup onClick={radioSelectHandler} row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
            {queAnswers.length
              ? [...queAnswers].map((el) => {
                  return <SurveyRadio key={el} value={el} />;
                })
              : "Loading"}
          </RadioGroup>
        </FormControl>
      </div>
    </section>
  );
};

export default Question;
