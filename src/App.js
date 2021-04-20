import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';
import AllItem from './components/Food/AllItem/AllItem';
import Cart from './components/Food/Cart/Cart';
import FoodDetail from './components/Food/FoodDetail/FoodDetail';
import Home from './components/Home/Home/Home';
import Shipment from './components/Food/Shipment/Shipment';
import Login from './components/Login/Login/Login';
import Admin from './components/Admin/Admin/Admin';
import AddAdmin from './components/Admin/AddAdmin/AddAdmin';
import OrderList from './components/Admin/OrderList/OrderList';
import AddFoodItem from './components/Admin/AddFoodItem/AddFoodItem';
import CustomerList from './components/Admin/CustomerList/CustomerList';
import { getAllFoodItems } from './actions/foodItemsAction';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllFoodItems());
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route path="/seeAllItem" component={AllItem} />
        <Route path="/foodDetail/:id" component={FoodDetail} />
        <Route path="/cart" component={Cart} />
        <Route path="/shipment" component={Shipment} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/adminPage/dashboard" component={Admin} />
        <Route path="/adminPage/orderList" component={OrderList} />
        <Route path="/adminPage/addAdmin" component={AddAdmin} />
        <Route path="/adminPage/addFoodItem" component={AddFoodItem} />
        <Route path="/adminPage/customerList" component={CustomerList} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
