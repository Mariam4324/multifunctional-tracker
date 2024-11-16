"use client";
import css from "./CurrentDate.module.scss";

const CurrentDate = () => {
  const currentDate = new Date();

  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const formattedDate = (date) => date.toLocaleDateString("en-GB", options);

  const [weekday, day, month, year] = formattedDate(currentDate).split(" ");

  return (
    <div className={css.date}>
      <span className={css.date__weekday}>{`${weekday},`}</span>
      <span className={css.date__info}>{`${day} ${month} ${year}`}</span>
    </div>
  );
};

export default CurrentDate;
