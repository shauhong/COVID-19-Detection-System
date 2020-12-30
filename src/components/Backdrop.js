import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: 10000,
    color: '#fff',
  },
}));

const CustomizedBackdrop = () => {
  const classes = useStyles();
  const open = useSelector(state=>state.backdrop);

  return (
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
  );
}

export default CustomizedBackdrop;
