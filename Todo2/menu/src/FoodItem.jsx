const FoodItem = ({ item, index, deleteItem, mode }) => {
  return (
    <li>
      {item.name} - {item.price} บาท

      {item.isBestSeller ? (
        <span> ⭐</span>
      ) : (
        <span> </span>
      )}

      {mode === "ADMIN" && (
        <button onClick={() => deleteItem(index)}>
          Del
        </button>
      )}
    </li>
  );
};

export default FoodItem;