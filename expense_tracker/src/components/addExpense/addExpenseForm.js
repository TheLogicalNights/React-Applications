import { useState } from "react";
import "./addExpenseForm.css";

const AddExpenseForm = (props) => {
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

  const submitHandler = (event) => {
    event.preventDefault();

    const data = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    props.onDataSave(data);
    setChangedTitle("");
    setChangedAmount("");
    setChangedDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangedHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
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
