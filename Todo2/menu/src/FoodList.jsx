import FoodItem from "./FoodItem";

const FoodList = ({ food, deleteItem, mode }) => {
  return (
    <ul>
      {food.map((item, index) => (
        <FoodItem
          key={index}
          item={item}
          index={index}
          deleteItem={deleteItem}
          mode={mode}
        />
      ))}
    </ul>
  );
};

export default FoodList;