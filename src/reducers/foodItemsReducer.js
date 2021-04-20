export default (foodItems = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL_FOOD':
      return action.payload;

    case 'CREATE_FOOD_ITEM':
      return [...foodItems, action.payload];

    default:
      return foodItems;
  }
};
