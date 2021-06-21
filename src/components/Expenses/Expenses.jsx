import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses({ expenses, deleteExpenseHandler }) {
  const [filterYear, setFilterYear] = useState("2021");
  const changeFilterYear = (newFilterYear) => {
    setFilterYear(newFilterYear);
  };
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <ExpensesFilter
        filterYear={filterYear}
        changeFilterYear={changeFilterYear}
      />
      <Card className="expenses">
        <ExpensesChart filteredExpenses={filteredExpenses} />
        <ExpensesList
          deleteExpenseHandler={deleteExpenseHandler}
          items={filteredExpenses}
        />
      </Card>
    </div>
  );
}

export default Expenses;
