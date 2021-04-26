import { Container, Paper } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import React from 'react';
import './NotAdmin.css';

const NotAdmin = () => {
  return (
    <Container className="notAdmin__container">
      <Paper className="notAdmin__paper">
        <div>
          <h2>You are not allowed to access the admin Page</h2>
          <Alert severity="info">
            <AlertTitle>
              If you want to check the admin functionality just login with the
              following email and password
            </AlertTitle>
            <p>
              email: <strong>admin@admin.io</strong>
            </p>
            <p>
              password: <strong>admin01</strong>
            </p>
          </Alert>
        </div>
      </Paper>
    </Container>
  );
};

export default NotAdmin;
