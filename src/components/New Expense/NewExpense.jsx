import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense({ onAddExpense }) {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };
  const handleShowForm = (e) => {
    e.preventDefault();
    setShowForm(true);
  };
  const hideForm = (e) => {
    setShowForm(false);
  };
  const content = showForm ? (
    <ExpenseForm
      hideForm={hideForm}
      onSaveExpenseData={saveExpenseDataHandler}
    />
  ) : (
    <div>
      <button onClick={handleShowForm}>Add an Expense</button>
    </div>
  );
  return <div className="new-expense">{content}</div>;
}

export default NewExpense;
