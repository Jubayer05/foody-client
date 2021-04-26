/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
  const auth = JSON.parse(sessionStorage.getItem('profile'));
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth?.result.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
