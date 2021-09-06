import "./App.css";
import Expenses from "./components/Expenses";

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
      <Expenses expense={expense} />
    </div>
  );
}

export default App;
