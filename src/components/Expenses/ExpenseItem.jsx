import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem({ title, amount, date, id, deleteExpenseHandler }) {
  const deleteExpense = () => {
    deleteExpenseHandler(id);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${amount}</div>
      <button
        className="expense-item__delete"
        type="button"
        onClick={deleteExpense}
      >
        {" "}
        Remove{" "}
      </button>
    </Card>
  );
}

export default ExpenseItem;
