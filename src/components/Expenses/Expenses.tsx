import { Typography } from "@mui/material";
import css from "./Expenses.module.scss";
import Date from "../CurrentDate/CurrentDate";
import { CirclePlus } from "lucide-react";

const Expenses = () => {
  return (
    <div className={css.expenses}>
      <div className={css.expenses__header}>
        <Typography className={css.expenses__title} variant="h3">
          Expenses
        </Typography>
        <Date />
      </div>
      <CirclePlus className={css.expenses__plus} />
    </div>
  );
};

export default Expenses;
