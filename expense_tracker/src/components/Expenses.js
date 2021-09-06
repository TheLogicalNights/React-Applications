import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItems
        title={props.expense[0].title}
        amount={props.expense[0].amount}
        date={props.expense[0].date}
      />
      <ExpenseItems
        title={props.expense[1].title}
        amount={props.expense[1].amount}
        date={props.expense[1].date}
      />
      <ExpenseItems
        title={props.expense[2].title}
        amount={props.expense[2].amount}
        date={props.expense[2].date}
      />
      <ExpenseItems
        title={props.expense[3].title}
        amount={props.expense[3].amount}
        date={props.expense[3].date}
      />
    </div>
  );
}

export default Expenses;
