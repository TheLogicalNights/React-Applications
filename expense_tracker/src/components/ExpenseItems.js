import "./ExpenseItem.css";

function ExpenseItems() {
  const expenseDate = new Date();
  const expenseTitle = "Car Insurance";
  const expenseAmount = 15000;

  return (
    <div className="expense-item">
      <div>{expenseDate.toString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">Rs.{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
