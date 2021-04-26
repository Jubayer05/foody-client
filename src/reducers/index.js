import { combineReducers } from 'redux';
import foodItems from './foodItemsReducer';
import foodCart from './foodCartReducer';
import allOrder from './orderReducer';
import authData from './authReducer';
import allUserData from './userReducer';
import admin from './adminReducer';

export default combineReducers({
  foodItems,
  foodCart,
  allOrder,
  authData,
  allUserData,
  admin,
});
