/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import './CustomerList.css';
import AppbarDrawer from '../utilities/AppbarDrawer';
import Copyright from '../utilities/Copyright';
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

export default function CustomerList() {
  const classes = useStyles();
  const adminData = JSON.parse(sessionStorage.getItem('admin'));

  const rows = useSelector((state) => state.allUserData) || [];

  return (
    <div className={classes.root}>
      {adminData?.email ? (
        <>
          <CssBaseline />
          <AppbarDrawer name="Customer List" />

          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <h1 className="paper__heading">Foody Customers List</h1>
                    <Table size="small" width="100">
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Email</TableCell>
                          <TableCell>Cell Phone</TableCell>
                          <TableCell align="right">Date</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow key={row.id}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>555-555-555-55</TableCell>
                            <TableCell align="right">{row.date}</TableCell>
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
        </>
      ) : (
        <NotAdmin />
      )}
    </div>
  );
}
