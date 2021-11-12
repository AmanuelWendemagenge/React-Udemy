import React from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";
function NewExpense(props) {
  const saveExpenseDataHandler = (enterdExpenseData) => {
    const expenseData = {
      ...enterdExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData)
  };

  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
