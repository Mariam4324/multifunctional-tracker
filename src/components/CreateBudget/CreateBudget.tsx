// import EmojiPicker from "emoji-picker-react";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import css from "./CreateBudget.module.scss";

const CreateBudget = () => {
  return (
    <div className={css.budget__overlay}>
      <div className={css.budget__card}>
        <div className={css.budget__holder}>
          <FormControl variant="outlined">
            <InputLabel id="custom-select-label">Choose a category</InputLabel>
            <Select labelId="custom-select-label" id="custom-select" label="Выберите опцию">
              <MenuItem value={10}>Опция 1</MenuItem>
              <MenuItem value={20}>Опция 2</MenuItem>
              <MenuItem value={30}>Опция 3</MenuItem>
              <MenuItem value={40}>Опция 4</MenuItem>
            </Select>
          </FormControl>

          <TextField
            style={{
              width: "100%",
              maxWidth: "200px",
              maxHeight: "49px",
            }}
            placeholder="Enter name"
            multiline
          />
          <TextField
            style={{
              width: "100%",
              maxWidth: "200px",
              maxHeight: "49px",
            }}
            type="number"
            variant="outlined"
            label="number"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateBudget;
