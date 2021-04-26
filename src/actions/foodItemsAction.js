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

export const getAllOrder = () => async (dispatch) => {
  try {
    const { data } = await api.fetchOrder();
    dispatch({ type: 'FETCH_ORDER', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getAllUser = () => async (dispatch) => {
  try {
    const { data } = await api.getAllUser();

    dispatch({ type: 'GET_USER', payload: data });
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
