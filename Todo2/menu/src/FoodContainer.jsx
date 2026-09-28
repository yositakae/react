import { useState } from "react";
import FoodList from "./FoodList";
import FoodForm from "./FoodForm";

const FoodContainer = () => {
  const [food, setFood] = useState([
    { name: "cake", price: 35, isBestSeller: true },
    { name: "bread", price: 25, isBestSeller: false },
    { name: "milk", price: 15, isBestSeller: true },
    { name: "donut", price: 45, isBestSeller: false },
    { name: "cookie", price: 55, isBestSeller: true },
  ]);

  const [mode, setMode] = useState(
    localStorage.getItem("mode") || "USER"
  );

  const changeMode = () => {
    const newMode = mode === "USER" ? "ADMIN" : "USER";

    setMode(newMode);
    localStorage.setItem("mode", newMode);
  };

  const deleteItem = (index) => {
    setFood(food.filter((_, i) => i !== index));
  };

  const addItem = (item) => {
    setFood([...food, item]);
  };

  return (
    <div>
      <h1>Our Menu</h1>

      <button onClick={changeMode}>
        {mode === "USER" ? "ADMIN MODE" : "USER MODE"}
      </button>

      <p>Current Mode: {mode}</p>

      <FoodList
        food={food}
        deleteItem={deleteItem}
        mode={mode}
      />

      {mode === "ADMIN" && (
        <FoodForm addItem={addItem} />
      )}
    </div>
  );
};

export default FoodContainer;