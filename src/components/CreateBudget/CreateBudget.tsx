import EmojiPicker from "emoji-picker-react";
import css from "./CreateBudget.module.scss";

const CreateBudget = () => {
  return (
    <div className={css.budget__overlay}>
      
      <div className={css.budget__card}></div>
    </div>
  );
};

export default CreateBudget;
