import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ items, deleteExpenseHandler }) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }
  return (
    <div>
      <ul className="expenses-list">
        {items.map((expense) => (
          <ExpenseItem
            deleteExpenseHandler={deleteExpenseHandler}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
            id={expense.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
