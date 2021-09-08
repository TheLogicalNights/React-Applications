import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/addExpense/newExpense";

function App() {
  const expense = [
    { title: "Car insurance", amount: 1500, date: new Date() },
    { title: "Books", amount: 1000, date: new Date() },
    { title: "Bike Servicing", amount: 900, date: new Date() },
    { title: "New Keyboard", amount: 1100, date: new Date() },
  ];

  const NewExpenseHandler = (expense) => {
    console.log("in App.js");
    console.log(expense);
  };

  return (
    <div className="App-header">
      <NewExpense addNewExpense={NewExpenseHandler} />
      <Expenses expense={expense} />
    </div>
  );
}

export default App;
