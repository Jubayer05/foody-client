import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { useSelector } from 'react-redux';
import Orders from './Orders';
import AppbarDrawer from '../utilities/AppbarDrawer';
import Summary from './Summary';
import Customers from './Customers';
import NotAdmin from '../NotAdmin/NotAdmin';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

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

export default function Dashboard() {
  const adminData = JSON.parse(sessionStorage.getItem('admin'));

  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      {adminData?.email ? (
        <>
          <CssBaseline />
          <AppbarDrawer name="Dashboard" />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8} lg={9}>
                  <Paper className={fixedHeightPaper}>
                    <Customers />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                  <Paper className={fixedHeightPaper}>
                    <Summary />
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <Orders />
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
