import { useState } from "react";
import "./addExpenseForm.css";

const AddExpenseForm = () => {
  const [title, setChangedTitle] = useState("");
  const [amount, setChangedAmount] = useState("");
  const [date, setChangedDate] = useState("");

  const titleChangedHandler = (event) => {
    setChangedTitle(event.target.value);
  };

  const amountChangedHandler = (event) => {
    setChangedAmount(event.target.value);
  };

  const dateChangedHandler = (event) => {
    setChangedDate(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangedHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangedHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default AddExpenseForm;
