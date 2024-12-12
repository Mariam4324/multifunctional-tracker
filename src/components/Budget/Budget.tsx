"use client";
import { Button } from "@mui/material";
// import css from "./Budget.module.scss";
// import { CirclePlus } from "lucide-react";
// import { useState } from "react";
// import CreateBudget from "../CreateBudget/CreateBudget";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";



const Budget = () => {
  return (
    // <div className={css.budget}>
    //   {budgetModal ? <CreateBudget /> : ""}
    //   <Button onClick={() => setBudgetModal(true)} className={css.budget__add} variant="text">
    //     <CirclePlus />
    //     Create new budget
    //   </Button>
    // </div>

    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Name
            </label>
            <input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="username" className="text-right">
              Username
            </label>
            <input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <button type="submit">Save changes</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Budget;
