import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/New Expense/NewExpense";
function App() {
  const initialExpenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2019, 5, 12),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2020, 6, 1),
    },
    { id: "e3", title: "New TV", amount: 794.67, date: new Date(2021, 5, 1) },
    {
      id: "e4",
      title: "New Desk(Wooden)",
      amount: 450.67,
      date: new Date(2021, 1, 1),
    },
  ];

  const [expenses, setExpenses] = useState(initialExpenses);
  const deleteItemHandler = (itemId) => {
    setExpenses((prevState) => {
      const expensesUpdated = prevState.filter((item) => item.id !== itemId);
      return expensesUpdated;
    });
  };
  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} deleteExpenseHandler={deleteItemHandler} />
    </div>
  );
}

export default App;
