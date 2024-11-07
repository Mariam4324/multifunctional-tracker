import { FormControl, RadioGroup, Typography } from "@mui/material";
import SurveyRadio from "../SurveyOptions/SurveyOptions";
import css from "./Question.module.scss";
import { Dispatch, SetStateAction } from "react";

interface QuestionProps {
  queTitle: string;
  queAnswers: string[];
  setSelectedOption: Dispatch<SetStateAction<boolean>>;
}

const Question = ({ queTitle, queAnswers, setSelectedOption }: QuestionProps) => {
  function optionsHandler(ev) {
    if (ev) {
      setSelectedOption(true);
    }
  }

  return (
    <section className={css.que}>
      <div className={css.que__holder}>
        <Typography color="white" style={{ fontSize: "28px", fontWeight: "700" }}>
          {queTitle || "Question does not exist"}
        </Typography>
        <FormControl className={css.que__options}>
          <RadioGroup onChange={optionsHandler} row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
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
