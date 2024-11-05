import { FormControl, RadioGroup, Typography } from "@mui/material";
import SurveyRadio from "../SurverRadio/SurveyRadio";
import css from "./Question.module.scss";

interface QuestionProps {
  queTitle: string;
  queAnswers: string[];
}

const Question = ({ queTitle, queAnswers }: QuestionProps) => {
  return (
    <section className={css.que}>
      <div className="container">
        <div className={css.que__holder}>
          <Typography color="black" variant="h4">
            {queTitle}
          </Typography>
          <FormControl className={css.que__options}>
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
              {[...queAnswers].map((el) => {
                return <SurveyRadio key={el} value={el} />;
              })}
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </section>
  );
};

export default Question;
