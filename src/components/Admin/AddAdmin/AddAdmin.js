/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Button, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './AddAdmin.css';
import Copyright from '../utilities/Copyright';
import AppbarDrawer from '../utilities/AppbarDrawer';
import NotAdmin from '../NotAdmin/NotAdmin';
import { addAdmin } from '../../../actions/adminAction';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  title: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
  },
  paper: {
    marginTop: '50px',
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

export default function AddAdmin() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const adminData = JSON.parse(sessionStorage.getItem('admin'));
  const [adminInfo, setAdminInfo] = useState({
    name: '',
    email: '',
    contactNum: '',
  });

  const handleClick = () => {
    dispatch(addAdmin(adminInfo));
    alert('New Admin Added Successfully');
    history.push('/admin/dashboard');
  };

  return (
    <div className={classes.root}>
      {adminData?.email ? (
        <>
          <CssBaseline />
          <AppbarDrawer name="Add Admin" />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
              <Grid container spacing={3}>
                <Grid item xs={8}>
                  <Paper className={classes.paper}>
                    <h1 className="paper__heading">Make a New Admin</h1>
                    <TextField
                      onChange={(e) =>
                        setAdminInfo({ ...adminInfo, name: e.target.value })
                      }
                      className="addAdmin__input"
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                    />
                    <TextField
                      onChange={(e) =>
                        setAdminInfo({ ...adminInfo, email: e.target.value })
                      }
                      className="addAdmin__input"
                      id="outlined-basic"
                      label="Email address"
                      variant="outlined"
                      type="email"
                    />
                    <TextField
                      onChange={(e) =>
                        setAdminInfo({
                          ...adminInfo,
                          contactNum: e.target.value,
                        })
                      }
                      className="addAdmin__input"
                      id="outlined-basic"
                      label="Contact Number"
                      variant="outlined"
                    />
                    <div className="btn__right">
                      <Button
                        onClick={handleClick}
                        type="button"
                        className="submit__btn"
                      >
                        Submit
                      </Button>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
              <Box pt={4}>
                <Copyright />
              </Box>
            </Container>
          </main>
        </>
      ) : (
        <NotAdmin />
      )}
    </div>
  );
}
