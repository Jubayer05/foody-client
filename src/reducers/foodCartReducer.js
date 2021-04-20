export default (foodCart = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...foodCart, action.payload];
    case 'REMOVE_FROM_CART':
      return foodCart;
    case 'INC_QUANTITY':
      return foodCart.map((food) =>
        food._id === action.payload._id ? action.payload : food
      );
    case 'DEC_QUANTITY':
      return foodCart.map((food) =>
        food._id === action.payload._id ? action.payload : food
      );

    case 'DELETE_ITEM':
      return foodCart.filter((food) => food._id !== action.payload._id);

    default:
      return foodCart;
  }
};

// var foundIndex = items.findIndex((x) => x.id == item.id);
// items[foundIndex] = item;
// languages.splice(1, 1, 'Python');
