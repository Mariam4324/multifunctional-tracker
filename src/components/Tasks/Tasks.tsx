"use client";
import { Button } from "@mui/material";
import css from "./Tasks.module.scss";
import { FilePlus2 } from "lucide-react";
import { useState } from "react";

const Tasks = () => {
  const [modal, setModal] = useState(false);

  const modalHandler = () => setModal(true);



  return (
    <div className={css.tasks}>
      <div className={css.tasks__vertical}>
        <div className={css.tasks__label}>
          <span className={css.tasks__calc}>to do(4)</span>
          <Button onClick={modalHandler} className={css.tasks__add} startIcon={<FilePlus2 size={16} strokeWidth={2} />}>
            Add new task
          </Button>
        </div>

        <div className={css.tasks__cards}></div>
      </div>
      {/* 2 */}
      <div className={css.tasks__vertical}>
        <div className={css.tasks__label}>
          <span className={css.tasks__calc}>to do(4)</span>
          <Button className={css.tasks__add} startIcon={<FilePlus2 size={16} strokeWidth={2} />}>
            Add new task
          </Button>
        </div>
        <div className={css.tasks__cards}></div>
        {/* 3 */}
      </div>
      <div className={css.tasks__vertical}>
        <div className={css.tasks__label}>
          <span className={css.tasks__calc}>to do(4)</span>
          <Button className={css.tasks__add} startIcon={<FilePlus2 size={16} strokeWidth={2} />}>
            Add new task
          </Button>
        </div>
        <div className={css.tasks__cards}></div>
      </div>
    </div>
  );
};

export default Tasks;
