import { useState } from "react";
import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

const productData = [
  {
    title: "Samsung",
    price: 120,
    date: "01.25.23",
    id: "1",
  },
];

function App() {
  const [newProduct, setNewProduct] = useState(productData);

  function addExpenseHandler(data) {
    setNewProduct([...newProduct, data]);
  }

  function deleteExpense(id) {
    const newData = newProduct.filter((el) => el.id !== id);
    setNewProduct(newData);
  }

  return (
    <div className="App">
      <NewExpense addExpenseHandler={addExpenseHandler} />
      <Expenses
        data={newProduct}
        setNewProduct={setNewProduct}
        onDelete={deleteExpense}
      />
    </div>
  );
}

export default App;
