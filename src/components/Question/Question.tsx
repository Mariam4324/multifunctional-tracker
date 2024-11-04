import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import SurveyRadio from "../SurverRadio/SurveyRadio";

const Question = ({ queTitle, queAnswers }) => {
  return (
    <div>
      <Typography variant="h4">{queTitle}</Typography>
      <FormControl>
        <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group" name="controlled-radio-buttons-group">
          {[...queAnswers].map((el) => {
            return <SurveyRadio key={el} value={el} />;
          })}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Question;
