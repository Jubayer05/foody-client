import { combineReducers } from 'redux';
import foodItems from './foodItemsReducer';
import foodCart from './foodCartReducer';

export default combineReducers({
  foodItems,
  foodCart,
});
