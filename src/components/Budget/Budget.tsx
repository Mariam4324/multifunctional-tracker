import Card from "../Card/Card";
import css from "./Budget.module.scss";

const Budget = () => {
  return (
    <div className={css.budget}>
      <Card backgroundColor="primary">add budget</Card>
    </div>
  );
};

export default Budget;
