import React from "react";
import ExpensesCard from "../Card/ExpensesCard";

const ExpenseItem = ({ el }) => {
  return (
    <div>
      <ExpensesCard date={el.date} />
      <div>
        <h2>{el.title}</h2>
        <div>${el.price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
