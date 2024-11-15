import { FormControlLabel, Radio } from "@mui/material";
interface SurveyRadioProps {
  value: string;
}

const SurveyOptions = ({ value }: SurveyRadioProps) => {
  return (
    <FormControlLabel
      style={{
        padding: "7px",
        margin: 0,
        fontWeight: "700",
      }}
      labelPlacement="bottom"
      value={value}
      control={
        <Radio
          style={{
            color: "white",
          }}
          size="small"
        />
      }
      label={value}
    />
  );
};

export default SurveyOptions;
