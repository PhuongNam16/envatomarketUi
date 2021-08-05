import {Box, makeStyles, Typography} from '@material-ui/core';
import React from 'react';
import {FaAngleDoubleUp} from 'react-icons/all';
const useStyles = makeStyles ({
  footer: {
    backgroundImage: 'url("https://www.radiustheme.com/demo/html/digeco/img/footer.jpg")',
    padding: '90px 0 65px',
    textAlign: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  container: {
    paddingLeft: '0px',
    paddingRight: '0px',
    maxWidth: '1140px',
    margin: '0 auto',
  },
  textFooter: {
    color: '#FFFFFF',
    margin: '0 0 20px 0',
  },
  imgfooter: {
    margin: '0 auto 20px',
  },
  scrollUp: {
    '&:hover': {
      color: '#FFFFFF',
    },
    '&:focus': {
      color: '#FFFFFF',
    },
    overflow: 'hidden',
    position: 'fixed',
    height: '40px',
    width: '40px',
    lineHeight: '40px',
    bottom: '-50px',
    right: '20px',
    textAlign: 'center',
    zIndex: '9999',
    backgroundColor: '#6451f6',
    display: 'block',
    fontSize: '16px',
    transition: 'all 0.5s cubic-bezier(0, 0, 0.15, 1.88)',
  },
  backTop: {
    bottom: '20px',
  },
});
const Footer = () => {
  const classes = useStyles ();
  return (
    <div className={classes.footer}>
      <Box className={classes.container}>
        <Box>
          <a href="">
            <img
              className={classes.imgfooter}
              src="https://www.radiustheme.com/demo/html/digeco/img/logo.png"
              alt="logo"
            />
          </a>
        </Box>
        <Typography className={classes.textFooter}>
          © 2020 Digeco All Rights Reserved. Designed by Radiustheme
        </Typography>
      </Box>
      <a
        href="#wapper"
        data-type="section-switch"
        className={`${classes.scrollUp} ${classes.backTop}`}
      >
        <FaAngleDoubleUp />
      </a>
    </div>
  );
};

export default Footer;
