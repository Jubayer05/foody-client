import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import './LoginEmail.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Checkbox, FormControlLabel } from '@material-ui/core';
import { FoodyContext } from '../../../App';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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
  const { FoodyUser } = useContext(FoodyContext);
  const [userInfo, setUserInfo] = FoodyUser;
  const { register, handleSubmit, watch, errors } = useForm();

  const [loginShow, setLoginShow] = useState(false);
  const handleDisplayItem = () => {
    setLoginShow(!loginShow);
  };

  const handleInputData = (e) => {
    const data = e.target.value;
    if (e.target.name === 'firstName') {
      setUserInfo({ ...userInfo, firstName: data });
    }
    if (e.target.name === 'lastName') {
      setUserInfo({ ...userInfo, lastName: data });
    }
    if (e.target.name === 'email') {
      setUserInfo({ ...userInfo, email: data });
    }
    if (e.target.name === 'password') {
      setUserInfo({ ...userInfo, password: data });
    }
    if (e.target.name === 'confirmPassword') {
      setUserInfo({ ...userInfo, confirmPassword: data });
    }
  };
  console.log(userInfo);

  const handleCreateUser = () => {
    console.log(userInfo);
    firebase
      .auth()
      .createUserWithEmailAndPassword(userInfo.email, userInfo.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleLoginUser = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(userInfo.email, userInfo.password)
      .then((userCredential) => {
        var user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      {loginShow ? (
        <div className="loginEmail">
          <h4 className="">Create a new account</h4>
          <form>
            <TextField
              onBlur={handleInputData}
              className="login-input"
              name="firstName"
              label="First Name"
              color="secondary"
            />

            <TextField
              onBlur={handleInputData}
              className="login-input"
              name="lastName"
              label="Last Name"
              color="secondary"
            />

            <TextField
              onBlur={handleInputData}
              className="login-input"
              name="email"
              label="Username or Email"
              color="secondary"
            />

            <TextField
              onBlur={handleInputData}
              className="login-input"
              name="password"
              label="Password"
              color="secondary"
            />

            <TextField
              onBlur={handleInputData}
              className="login-input"
              name="confirmPassword"
              label="Confirm Password"
              color="secondary"
            />

            <Button
              onClick={handleCreateUser}
              id="createUser"
              className="login-input create-btn"
              variant="contained"
              color="primary"
            >
              Create an account
            </Button>
            <p className="text-center mt-2">
              Already have an account? &nbsp;
              <span className="login-link" onClick={handleDisplayItem}>
                Login
              </span>
            </p>
          </form>
        </div>
      ) : (
        <div className="loginEmail">
          <h4 className="">Login</h4>
          <form>
            <TextField
              onBlur={handleInputData}
              className="login-input"
              name="email"
              label="Username or Email"
              color="secondary"
            />

            <TextField
              onBlur={handleInputData}
              className="login-input"
              name="password"
              label="Password"
              color="secondary"
            />

            <p className="d-flex justify-content-around align-items-center">
              <FormControlLabel
                className="mt-2"
                control={<Checkbox name="checkedB" color="primary" />}
                label="Remember Me"
              />
              <span className="login-link">Forgotten Password</span>
            </p>

            <Button
              onClick={handleLoginUser}
              className="login-input login-btn"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
            <p className="text-center mt-2">
              Don't have an account? &nbsp;
              <span className="login-link" onClick={handleDisplayItem}>
                Create an account
              </span>
            </p>
          </form>
        </div>
      )}
    </ThemeProvider>
  );
};

export default LoginEmail;
