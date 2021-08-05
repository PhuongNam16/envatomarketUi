import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import logo from '../../logo.svg';
import './Header.css';
import {Button, makeStyles} from '@material-ui/core';

const useStyles = makeStyles ({
  button: {
    '&hover': {
      backgroundColor: 'white',
    },
    backgroundColor: '#82b440',
    color: '#fff',
    fontSize: '14px',
    boxShadow: '0 2px 0 #6f9a37',
    fontSize: '14px',
    padding: '7px 20px',
    lineHeight: 1.5,
    borderRadius: '4px',
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    textAlign: 'center',
    cursor: 'pointer',
  },
  appBar: {
    background: '#262626',
  },
  toolBar: {
    justifyContent: 'space-between',
  },
  logo: {
    width: '152px',
    height: ' 28px',
  },
});
function ElevationScroll (props) {
  const {children, window} = props;
  const trigger = useScrollTrigger ({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window () : undefined,
  });

  return React.cloneElement (children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function ElevateAppBar (props) {
  const classes = useStyles ();
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            {<img src={logo} className={classes.logo} />}
            <Button className={classes.button}>Buy Now</Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />

    </React.Fragment>
  );
}
