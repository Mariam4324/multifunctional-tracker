"use client";
import { Button } from "@mui/material";
import css from "./Budget.module.scss";
import { CirclePlus } from "lucide-react";
import { useState } from "react";
import CreateBudget from "../CreateBudget/CreateBudget";

const Budget = () => {
  const [budgetModal, setBudgetModal] = useState(false);
  return (
    <div onClick={() => setBudgetModal(true)} className={css.budget}>
      <Button  className={css.budget__add} variant="text">
        <CirclePlus />
        Create new budget
      </Button>

      {budgetModal ? <CreateBudget /> : ""}
    </div>
          
  );
};

export default Budget;
