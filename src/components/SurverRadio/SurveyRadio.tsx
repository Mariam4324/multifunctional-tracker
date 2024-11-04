import { FormControlLabel, Radio } from "@mui/material";

const SurveyRadio = ({ value }) => {
  return <FormControlLabel value={value} control={<Radio />} label={value} />;
};

export default SurveyRadio;
