import React from 'react';

const HeaderItem = ({ item }) => {
  return (
    <div style={{ backgroundImage: `url(${item.image})` }} className="header">
      <div className="overlay">
        <h1 className="header__heading">
          Enjoy Your Food <br /> at
          <span className="text-primary"> Foody</span>
        </h1>
      </div>
    </div>
  );
};

export default HeaderItem;
