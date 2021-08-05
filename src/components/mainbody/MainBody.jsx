import {Grid, Container, makeStyles, Typography, Box} from '@material-ui/core';
import React, { useState } from 'react';
import data from './Data.json';
const useStyles = makeStyles ({
  container: {
    maxWidth: '1140px',
    textAlign: 'center',
    paddingLeft: '0',
    paddingRight: '0',
    padding: '103px 0 55px',
  },
  headingMain: {
    fontWeight: 600,
    fontSize: '36px',
    color: '#000',
  },
  sloganMain: {
    marginBottom: '3rem',
    width: '50%',
    fontSize: '16px',
    color: '#252525',
    marginLeft: 'auto',
    marginRight: 'auto',
    textTransform: 'capitalize',
  },
  image: {
    margin: 'auto',
    display: 'block',
    maxWidth: '350px',
    maxHeight: '100%',
    borderRadius: '10px',
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
});

// const itemData = [
//   {
//     img: 'https://www.radiustheme.com/demo/html/digeco/img/product/home1.jpg',
//     title: 'Technology Home',
//   },
//   {
//     img: 'https://www.radiustheme.com/demo/html/digeco/img/product/home2.jpg',
//     title: 'Technology Home',
//   },
//   {
//     img: 'https://www.radiustheme.com/demo/html/digeco/img/product/home3.jpg',
//     title: 'Technology Home',
//   },
//   {
//     img: 'https://www.radiustheme.com/demo/html/digeco/img/product/home4.jpg',
//     title: 'Technology Home',
//   },

//   {
//     img: 'https://www.radiustheme.com/demo/html/digeco/img/product/home5.jpg',
//     title: 'Technology Home',
//   },
//   {
//     img: 'https://www.radiustheme.com/demo/html/digeco/img/product/home6.jpg',
//     title: 'Technology Home',
//   },
//   {
//     img: 'https://www.radiustheme.com/demo/html/digeco/img/product/home7.jpg',
//     title: 'Technology Home',
//   },
//   {
//     img: 'https://www.radiustheme.com/demo/html/digeco/img/product/home8.jpg',
//     title: 'Technology Home',
//   },
//   {
//     img: 'https://www.radiustheme.com/demo/html/digeco/img/product/home9.jpg',
//     title: 'Technology Home',
//   },
//   {
//     img: 'https://www.radiustheme.com/demo/html/digeco/img/product/home10.jpg',
//     title: 'Technology Home',
//   },
//   {
//     img: 'https://www.radiustheme.com/demo/html/digeco/img/product/home11.jpg',
//     title: 'Technology Home',
//   },
//   {
//     img: 'https://www.radiustheme.com/demo/html/digeco/img/product/coming.jpg',
//     title: 'Technology Home',
//   },

// ];
const dataMain = data.itemData;

const MainBody = () => {
  const classes = useStyles ();
  const [data, setData] = useState(dataMain)
  return (
    <div>
      <Container className={classes.container} maxWidth="lg">
        <Box className={classes.sectionHeading}>
          <Typography variant="h4" className={classes.headingMain}>
            Explore Our Demos
          </Typography>
          <Typography variant="subtitle1" className={classes.sloganMain}>
            Explore Our 11 Home Pages Demos On Different Kind Of Topics. More Demos Are Coming Soon.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {data.map (item => (
            <Grid item xs={12} sm={6} md={4}>
              <Grid className={classes.imgFeature} key={item.id}>
                <img className={classes.image} src={item.img} alt="" />
              </Grid>
              <Typography className={classes.textTitle} variant="h6">
                <a className={classes.color} href="#">{item.title}</a>
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default MainBody;
