import { FormControlLabel, Radio } from "@mui/material";

interface SurveyRadioProps {
  value: string;
}

const SurveyRadio = ({ value }: SurveyRadioProps) => {
  return (
    <FormControlLabel
      style={{
        padding: "7px",
        marginRight: "0",
        color: "black",
      }}
      labelPlacement="bottom"
      value={value}
      control={<Radio color="default" size="small" />}
      label={value}
    />
  );
};

export default SurveyRadio;
