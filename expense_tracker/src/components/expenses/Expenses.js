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

  const filteredArray = props.expense.filter((expense) => {
    return expense.date.getFullYear().toString() === changedYear;
  });

  let expenseContent = <p>No Expenses Found</p>;

  if (filteredArray.length > 0) {
    expenseContent = filteredArray.map((expense) => (
      <ExpenseItems
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpenseFilter selected={changedYear} onYearChange={yearChangeHandler} />

      {
        /* {filteredArray.length === 0 ? (
        <p>No Expenses Found</p>
      ) : (
        filteredArray.map((expense) => (
          <ExpenseItems
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */
        ////////////////////////// Second Approch ///////////////////////////////////////
        //   filteredArray.length === 0 && <p>No Expenses Found</p>
        // }
        // {filteredArray.length > 0 &&
        //   filteredArray.map((expense) => (
        //     <ExpenseItems
        //       key={expense.id}
        //       title={expense.title}
        //       amount={expense.amount}
        //       date={expense.date}
        //     />
        //   ))}
        ///////////////////////////// Third approch ////////////////////////////////////////
        expenseContent
      }
    </Card>
  );
}

export default Expenses;
