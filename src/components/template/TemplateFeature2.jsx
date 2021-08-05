import {Grid, Container, makeStyles, Typography, Box} from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles ({
  container: {
    maxWidth: '100%',
    paddingLeft: '0',
    paddingRight: '0',
    padding: '110px 0',
  },
  headingMain: {
    fontWeight: 600,
    fontSize: '36px',
    color: '#000',
  },
  sectionHeading: {
    marginBottom: '3rem',
    textAlign: 'center',
  },
  bodyContainer: {
    maxWidth: '1140px',
    paddingLeft: '0',
    paddingRight: '0',
  },
  imgFeature: {
    marginBottom: '28px',
  },
  title: {
    marginBottom: '10px',
    fontWeight: '600',
  },
  bodyText: {
    lineHeight: '30px',
    margin: '0 0  20px 0',
    color: '#65707f',
    fontSize: '16px',
  },
  content: {
    alignItems: 'center',
    //   maxWidth: '100%',
  },
  imgFeature2: {
    maxWidth: '540px',
  },
  boxImg: {
    paddingLeft: '15px',
    paddingRight: '15px',
  },
  titleTextLeft: {
    fontSize: '36px',
    fontWeight: '600',
    lineHeight: '45px',
    marginBottom: '25px',
  },
  bodyText: {
    lineHeight: '30px',
    width: '70%',
    marginBottom: '0',
    margin: '0 0 20px 0',
  },
});
const TemplateFeature2 = () => {
  const classes = useStyles ();
  return (
    <div className={classes.container}>
      <Container className={classes.bodyContainer}>
        <Grid container className={classes.content} spacing={2}>
          <Grid className={classes.boxImg} item xs>
            <img
              className={classes.imgFeature2}
              src="https://www.radiustheme.com/demo/html/digeco/img/banner/banner1.png"
              alt=""
            />
          </Grid>
          <Grid item xs>
            <Grid item xs>
              <Typography className={classes.titleTextLeft} variant="h5">
                Built Websites Perfect <br />
                For Any Business!
              </Typography>
              <Typography className={classes.bodyText} variant="body1">
                We have provided a lot of build in components to make the developer's life easier. We will push update regularly.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TemplateFeature2;
