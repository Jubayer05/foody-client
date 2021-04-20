/* eslint-disable no-console */
import * as api from '../api';

export const getAllFoodItems = () => async (dispatch) => {
  try {
    const { data } = await api.fetchFoodItems();
    dispatch({ type: 'FETCH_ALL_FOOD', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const postFoodItems = (newFoodItem) => async (dispatch) => {
  try {
    const { data } = await api.postFoodItem(newFoodItem);
    dispatch({ type: 'CREATE_FOOD_ITEM', payload: data });
  } catch (error) {
    console.log(error);
  }
};
