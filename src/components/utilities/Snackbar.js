import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFoodToCart } from '../../actions/foodCartAction';

const useStyles = makeStyles((theme) => ({
  close: {
    padding: theme.spacing(0.5),
    paddingLeft: theme.spacing(5),
  },
}));

export default function ConsecutiveSnackbars({ item }) {
  const dispatch = useDispatch();
  const [snackPack, setSnackPack] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState(undefined);

  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const handleClick = (message) => () => {
    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  const handleFoodData = (message) => {
    dispatch(addFoodToCart(item));
    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
  };
  const classes = useStyles();
  return (
    <div>
      <button
        type="button"
        className="primary-btn shoppingCartItem__btn"
        onClick={handleFoodData}
      >
        add to cart
      </button>{' '}
      <Snackbar
        key={messageInfo ? 'messageInfo.key' : undefined}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        onExited={handleExited}
        message={messageInfo ? 'Food Added' : undefined}
        action={
          <>
            <Link to="/cart">
              <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={handleClose}
              >
                Cart
              </Button>
            </Link>
            <IconButton
              aria-label="close"
              color="inherit"
              className={classes.close}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </>
        }
      />
    </div>
  );
}
