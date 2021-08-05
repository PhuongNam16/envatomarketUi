import {Grid, Container, makeStyles, Typography, Box} from '@material-ui/core';
import React, { useState } from 'react';
import data from '../mainbody/Data.json';
const useStyles = makeStyles ({
  container: {
    maxWidth: '1140px',
    textAlign: 'center',
    paddingLeft: '0',
    paddingRight: '0',
    padding: '0 150px 80px',
  },
  sectionHeading: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  headingMain: {
    fontWeight: 600,
    fontSize: '36px',
    color: '#000',
  },
  image: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: 'auto',
  },
  textTitle: {
    padding: '14px 0',
  },
  color: {
    '&:hover': {
      color: '#007bff',
    },
    color: '#000',
    fontSize: '20px',
    fontWeight: '500',
  },
  masonryItem: {
    paddingLeft: '20px',
    paddingRight: '20px',
  },
});

const dataInnerPages = data.innerPages;

const InnerPages = () => {
  const classes = useStyles ();
  const [pages, setPages] = useState(dataInnerPages)
  return (
    <div>
      <Container className={classes.container} maxWidth="lg">
        <Box className={classes.sectionHeading}>
          <Typography variant="h4" className={classes.headingMain}>
            Inside The Template
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {pages.map (item => (
            <Grid className={classes.masonryItem} item xs={3}>
              <Grid className={classes.imgFeature} key={item.id}>
                <img className={classes.image} src={item.img} alt="image" />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default InnerPages;
