"use client";
import { Button } from "@mui/material";
import css from "./Budget.module.scss";
import { CirclePlus } from "lucide-react";
import { useState } from "react";
import CreateBudget from "../CreateBudget/CreateBudget";

const Budget = () => {
  const [budgetModal, setBudgetModal] = useState(false);

  return (
    <div className={css.budget}>
      {budgetModal ? <CreateBudget /> : ""}
      <Button onClick={() => setBudgetModal(true)} className={css.budget__add} variant="text">
        <CirclePlus />
        Create new budget
      </Button>
    </div>
  );
};

export default Budget;
