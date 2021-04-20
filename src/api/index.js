import axios from 'axios';

const url = 'http://localhost:5000/foodItems';

export const fetchFoodItems = () => axios.get(url);
export const postFoodItem = (newFoodItem) => axios.post(url, newFoodItem);
