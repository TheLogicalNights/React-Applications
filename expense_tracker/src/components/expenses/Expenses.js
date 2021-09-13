import Card from "../ui/Card";
import "./Expenses.css";
import ExpenseFilter from "../expenseFilter/ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";

function Expenses(props) {
  const [changedYear, setChangedYear] = useState("2021");

  const yearChangeHandler = (year) => {
    setChangedYear(year);
  };

  const filteredArray = props.expense.filter((expense) => {
    return expense.date.getFullYear().toString() === changedYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selected={changedYear} onYearChange={yearChangeHandler} />
      <ExpenseList array={filteredArray} />
    </Card>
  );
}

export default Expenses;
