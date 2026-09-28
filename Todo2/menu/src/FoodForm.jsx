import { useState } from "react";

const FoodForm = ({ addItem }) => {
  const [inputs, setInputs] = useState({
    name: "",
    price: "",
    isBestSeller: "true",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = {
      name: inputs.name,
      price: Number(inputs.price),
      isBestSeller: inputs.isBestSeller === "true",
    };

    addItem(newFood);

    setInputs({
      name: "",
      price: "",
      isBestSeller: "true",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={inputs.name}
        onChange={handleChange}
        placeholder="Food name"
      />

      <input
        type="number"
        name="price"
        value={inputs.price}
        onChange={handleChange}
        placeholder="Price"
      />

      <select
        name="isBestSeller"
        value={inputs.isBestSeller}
        onChange={handleChange}
      >
        <option value="true">BestSeller</option>
        <option value="false">Normal</option>
      </select>

      <button type="submit">Add menu</button>
    </form>
  );
};

export default FoodForm;