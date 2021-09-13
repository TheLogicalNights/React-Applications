import Card from "../ui/Card";
import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import ExpenseFilter from "../expenseFilter/ExpenseFilter";
import { useState } from "react";

function Expenses(props) {
  const [changedYear, setChangedYear] = useState("2021");

  const yearChangeHandler = (year) => {
    setChangedYear(year);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter selected={changedYear} onYearChange={yearChangeHandler} />

      {props.expense.map((expense) => (
        <ExpenseItems
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
