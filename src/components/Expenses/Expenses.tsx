import { Typography } from "@mui/material";
import css from "./Expenses.module.scss";
import Date from "../CurrentDate/CurrentDate";
import { CirclePlus } from "lucide-react";

const Expenses = () => {
  return (
    <div className={css.expenses}>
      <div className={css.expenses__card}>
        <div className={css.expenses__info}>
          <Typography className={css.expenses__title} variant="h3">
            Expenses
          </Typography>
          <Date />
        </div>

        <CirclePlus className={css.expenses__plus} />
      </div>

      <ul className={css.expenses__list}></ul>
    </div>
  );
};

export default Expenses;
