import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './utilities.css';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link className="copyrightLink" color="inherit" to="/">
        Foody
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
};

export default Copyright;
