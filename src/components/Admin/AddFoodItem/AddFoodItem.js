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
import uploadLogo from '../../../image/logos/upload.png';
import './AddFoodItem.css';
import Copyright from '../utilities/Copyright';
import AppbarDrawer from '../utilities/AppbarDrawer';
import { postFoodItems } from '../../../actions/foodItemsAction';
import NotAdmin from '../NotAdmin/NotAdmin';

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

const initialState = {
  title: '',
  description: '',
  price: '',
};

export default function AddFoodItem() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const adminData = JSON.parse(sessionStorage.getItem('admin'));
  const [foodData, setFoodData] = useState(initialState);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', foodData.title);
    formData.append('description', foodData.description);
    formData.append('price', foodData.price);
    formData.append('foodImage', selectedFile, selectedFile.name);
    dispatch(postFoodItems(formData));
    alert('Food Items Created Successfully😄');
    history.push('/');
  };

  return (
    <div className={classes.root}>
      {adminData?.email ? (
        <>
          <CssBaseline />
          <AppbarDrawer name="Add Food Item" />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
              <Grid container spacing={3}>
                <Grid item xs={8}>
                  <Paper className={classes.paper}>
                    <form onSubmit={handleSubmit}>
                      <h1 className="addFoodItem__heading">Add a New Food</h1>
                      <TextField
                        className="addFoodItem"
                        id="outlined-basic"
                        label="Food Title"
                        variant="outlined"
                        onChange={(e) =>
                          setFoodData({ ...foodData, title: e.target.value })
                        }
                      />
                      <TextField
                        className="addFoodItem"
                        id="outlined-basic"
                        label="Food Details"
                        variant="outlined"
                        onChange={(e) =>
                          setFoodData({
                            ...foodData,
                            description: e.target.value,
                          })
                        }
                      />
                      <TextField
                        className="addFoodItem"
                        id="outlined-basic"
                        label="Food Prize"
                        variant="outlined"
                        onChange={(e) =>
                          setFoodData({ ...foodData, price: e.target.value })
                        }
                      />
                      <label className="upload__btn">
                        <input
                          type="file"
                          className="upload__input"
                          onChange={(e) => setSelectedFile(e.target.files[0])}
                        />
                        <img className="upload__img" src={uploadLogo} alt="" />
                        <span className="upload__text">Enter food image</span>
                      </label>
                      <div className="btn__right">
                        <Button type="submit" className="submit__btn">
                          Submit
                        </Button>
                      </div>
                    </form>
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
