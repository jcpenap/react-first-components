import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toiled Paper",
      amount: 94.12,
      date: new Date(2020, 7, 12),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 294.67,
      date: new Date(2020, 3, 16),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 458.12,
      date: new Date(2021, 10, 14),
    },
    {
      id: "e4",
      title: "Toiled Paper",
      amount: 94.12,
      date: new Date(2020, 2, 5),
    },
  ];

  return (
    <div>
      <NewExpense/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
