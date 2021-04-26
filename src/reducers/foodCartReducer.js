export default (foodCart = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...foodCart, action.payload];

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

    case 'PLACE_ORDER':
      return [];

    default:
      return foodCart;
  }
};
