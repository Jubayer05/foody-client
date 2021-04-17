import React from 'react';
import ChefComp from '../Chef/ChefComp';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Services from '../Service/Service';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

const Home = () => {
  return (
    <div>
      <Navbar itemColor="white" />
      <Header />
      <Services />
      <ShoppingCart />
      <ChefComp />
      <Footer />
    </div>
  );
};

export default Home;
