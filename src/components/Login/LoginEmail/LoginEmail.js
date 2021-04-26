/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import firebase from 'firebase';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  makeStyles,
  Paper,
} from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { Alert } from '@material-ui/lab';
import './LoginEmail.css';
import { signin, signup } from '../../../actions/auth';
import { findAdmin } from '../../../actions/adminAction';

const materialTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff4081',
    },
    secondary: {
      main: '#424242',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: theme.spacing(1),
  },
}));

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const LoginEmail = () => {
  const classes = useStyles();
  const [userData, setUserData] = useState(initialState);
  const [message, setMessage] = useState(null);
  const [haveAccount, setHaveAccount] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const auth = sessionStorage.getItem('profile');

  const { from } = location.state || { from: { pathname: '/' } };

  useEffect(() => {
    setTimeout(() => {
      setMessage(null);
    }, 3500);
  }, [message]);

  // NOTE: PASSWORD
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // NOTE: CREATE USER FIREBASE
  const handleCreateUser = () => {
    if (userData.password === userData.confirmPassword) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(userData.email, userData.password)
        .then((userCredential) => {
          const { user } = userCredential;
          setMessage({
            message: 'Account created successfully',
            type: 'success',
          });
          dispatch(signup(userData));
          history.replace(from);
        })
        .catch((error) => {
          const errorMessage = error.message;
          setMessage({ message: errorMessage, type: 'error' });
        });
    } else {
      alert("Password Doesn't match");
    }
  };

  // NOTE: LOGIN USER FIREBASE
  const handleLoginAccount = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(userData.email, userData.password)
      .then((userCredential) => {
        const { user } = userCredential;
        setMessage({
          message: 'User logged in successfully',
          type: 'success',
        });
        dispatch(signin(userData));
        dispatch(findAdmin({ email: userData.email }));
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setMessage({ message: errorMessage, type: 'error' });
      });
  };

  return (
    <ThemeProvider theme={materialTheme}>
      <Paper className="loginEmail">
        <h4 className="login__heading">
          {!haveAccount ? 'Create a new account' : 'Login Your Account'}
        </h4>
        {message && message.type === 'error' ? (
          <Alert severity="error">{message.message}</Alert>
        ) : message && message.type === 'success' ? (
          <Alert severity="success">{message.message}</Alert>
        ) : (
          ''
        )}
        <form>
          {!haveAccount && (
            <>
              <TextField
                onChange={(e) =>
                  setUserData({ ...userData, firstName: e.target.value })
                }
                className="login__input"
                name="firstName"
                label="First Name"
                color="secondary"
                style={{ color: '#000' }}
              />

              <TextField
                onChange={(e) =>
                  setUserData({ ...userData, lastName: e.target.value })
                }
                className="login__input"
                name="lastName"
                label="Last Name"
                color="secondary"
                style={{ color: '#000' }}
              />
            </>
          )}

          <TextField
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            className="login__input"
            name="email"
            label="Username or Email"
            color="secondary"
            style={{ color: '#000' }}
          />

          <FormControl fullWidth className={clsx(classes.margin)}>
            <InputLabel
              style={{ color: '#000' }}
              htmlFor="standard-adornment-password"
            >
              Password
            </InputLabel>
            <Input
              color="secondary"
              style={{ color: '#000' }}
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              onBlur={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          {!haveAccount && (
            <TextField
              onChange={(e) =>
                setUserData({ ...userData, confirmPassword: e.target.value })
              }
              type="password"
              className="login__input"
              name="confirmPassword"
              label="Confirm Password"
              color="secondary"
              style={{ color: '#000' }}
            />
          )}

          {haveAccount && (
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
            onClick={haveAccount ? handleLoginAccount : handleCreateUser}
            id="createUser"
            fullWidth
            className="login__btn"
            variant="contained"
            color="primary"
          >
            {!haveAccount ? 'Create an account' : 'Login'}
          </Button>

          <p className="login__text">
            {haveAccount
              ? 'Already have an account?'
              : "Don't have an account?"}
            &nbsp;
            <span
              className="login__link"
              onClick={() => {
                setHaveAccount(!haveAccount);
              }}
              onKeyDown={() => {}}
            >
              {haveAccount ? 'Create an account' : 'Login'}
            </span>
          </p>
        </form>
      </Paper>
    </ThemeProvider>
  );
};

export default LoginEmail;
