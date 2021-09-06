import "./App.css";
import ExpenseItems from "./components/ExpenseItems";

function App() {
  const expense = [
    { title: "Car insurance", amount: 1500, date: new Date() },
    { title: "Books", amount: 1000, date: new Date() },
    { title: "Bike Servicing", amount: 900, date: new Date() },
    { title: "New Keyboard", amount: 1100, date: new Date() },
  ];
  return (
    <div className="App App-header">
      <h1>Lets get started !</h1>
      <ExpenseItems
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      ></ExpenseItems>
      <ExpenseItems
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      ></ExpenseItems>
      <ExpenseItems
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      ></ExpenseItems>
      <ExpenseItems
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      ></ExpenseItems>
    </div>
  );
}

export default App;
