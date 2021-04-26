import axios from 'axios';

const url = 'http://localhost:5000';

export const fetchFoodItems = () => axios.get(`${url}/foodItems`);
export const postFoodItem = (newFoodItem) =>
  axios.post(`${url}/foodItems`, newFoodItem);

export const fetchOrder = () => axios.get(`${url}/order`);
export const orderFood = (newOrder) => axios.post(`${url}/order`, newOrder);

export const getAllUser = () => axios.get(`${url}/user/getAllUser`);
export const signup = (formData) => axios.post(`${url}/user/signup`, formData);
export const signin = (formData) => axios.post(`${url}/user/signin`, formData);

export const findAdmin = (email) => axios.post(`${url}/admin/findAdmin`, email);
export const addAdmin = (adminInfo) =>
  axios.post(`${url}/admin/addAdmin`, adminInfo);
