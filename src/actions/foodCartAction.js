/* eslint-disable no-console */
export const addFoodToCart = (food) => async (dispatch) => {
  try {
    const data = await food;
    dispatch({ type: 'ADD_TO_CART', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const incQuantity = (food) => async (dispatch) => {
  try {
    const data = await { ...food, quantity: food.quantity + 1 };
    dispatch({ type: 'INC_QUANTITY', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const decQuantity = (food) => async (dispatch) => {
  try {
    const data = await { ...food, quantity: food.quantity - 1 };
    dispatch({ type: 'INC_QUANTITY', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteItem = (food) => async (dispatch) => {
  try {
    const data = await food;
    dispatch({ type: 'DELETE_ITEM', payload: data });
  } catch (error) {
    console.log(error);
  }
};
