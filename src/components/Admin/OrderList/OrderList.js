/* eslint-disable prefer-spread */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Container,
  Grid,
  CssBaseline,
  Box,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import './OrderList.css';
import AppbarDrawer from '../utilities/AppbarDrawer';
import Copyright from '../utilities/Copyright';

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
    overflow: 'hidden',
    flexDirection: 'column',
  },
}));

export default function OrderList() {
  const classes = useStyles();
  const data = useSelector((state) => state.allOrder);
  const [orderData, setOrderData] = useState([]);

  const order = data.map((el) =>
    el.foodOrdered.map((item) => [
      {
        ...item,
        name: el.name,
        address: el.roadNo,
        contacts: el.contacts,
      },
    ])
  );
  const order2 = [].concat.apply([], order);

  useEffect(() => {
    setOrderData([].concat.apply([], order2));
  }, [data]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppbarDrawer name="Order" />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <h1 className="paper__heading">Foody Total Order</h1>
                <Table size="small" width="100">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Address</TableCell>
                      <TableCell>Cell Phone</TableCell>
                      <TableCell>Ordered</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell align="right">Quantity</TableCell>
                      <TableCell align="right">Total</TableCell>
                      <TableCell align="right">Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orderData.map((row) => (
                      // eslint-disable-next-line react/jsx-key
                      <TableRow>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.address}</TableCell>
                        <TableCell>{row.contacts}</TableCell>
                        <TableCell>{row.title}</TableCell>
                        <TableCell>{row.price}</TableCell>
                        <TableCell align="center">{row.quantity}</TableCell>
                        <TableCell align="center">
                          {row.quantity * row.price}
                        </TableCell>
                        <TableCell align="right">{row.createdAt}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
