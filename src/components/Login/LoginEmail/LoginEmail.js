/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Checkbox, FormControlLabel, Paper } from '@material-ui/core';
import './LoginEmail.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff4081',
    },
    secondary: {
      main: '#424242',
    },
  },
});

const LoginEmail = () => {
  const [loginAccount, setLoginAccount] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <Paper className="loginEmail">
        <h4>{loginAccount ? 'Create a new account' : 'Login Your Account'}</h4>
        <form>
          {loginAccount && (
            <>
              <TextField
                className="login__input"
                name="firstName"
                label="First Name"
                color="secondary"
                InputLabelProps={{ style: { color: '#000' } }}
              />

              <TextField
                className="login__input"
                name="lastName"
                label="Last Name"
                color="secondary"
                InputLabelProps={{ style: { color: '#000' } }}
              />
            </>
          )}

          <TextField
            className="login__input"
            name="email"
            label="Username or Email"
            color="secondary"
            InputLabelProps={{ style: { color: '#000' } }}
          />

          <TextField
            className="login__input"
            name="password"
            label="Password"
            color="secondary"
            InputLabelProps={{ style: { color: '#000' } }}
          />

          {loginAccount && (
            <TextField
              className="login__input"
              name="confirmPassword"
              label="Confirm Password"
              color="secondary"
              InputLabelProps={{ style: { color: '#000' } }}
            />
          )}

          {!loginAccount && (
            <p className="forgottenPass">
              <FormControlLabel
                className="mt-2"
                control={<Checkbox name="checkedB" color="primary" />}
                label="Remember Me"
              />
              <span className="login__link">Forgotten Password</span>
            </p>
          )}

          <Button
            onClick={() => {}}
            id="createUser"
            fullWidth
            className="login__btn"
            variant="contained"
            color="primary"
          >
            {loginAccount ? 'Create an account' : 'Login'}
          </Button>

          <p className="login__text">
            {loginAccount
              ? 'Already have an account?'
              : "Don't have an account?"}
            &nbsp;
            <span
              className="login__link"
              onClick={() => {
                setLoginAccount(!loginAccount);
              }}
            >
              {loginAccount ? 'Create an account' : 'Login'}
            </span>
          </p>
        </form>
      </Paper>
    </ThemeProvider>
  );
};

export default LoginEmail;
