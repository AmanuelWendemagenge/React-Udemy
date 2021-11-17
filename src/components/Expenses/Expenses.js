import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpenseFilter";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedHandler) => {
    console.log(selectedHandler)
    setFilteredYear(selectedHandler);
  };
  const filteredExpenses=props.items.filter(expense=>(
    expense.date.getFullYear().toString()===filteredYear
  ))
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* {filteredExpenses.length===0?<>No expense Found</>:null} */}
        {filteredExpenses.length===0&&<>No Expense Found</>}
        {filteredExpenses.map((item) => {
          console.log(item.title)
          return (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })}
      </Card>
    </>
  );
}

export default Expenses;
