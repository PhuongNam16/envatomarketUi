import {Grid, Container, makeStyles, Typography, Box} from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles ({
  container: {
    maxWidth: '100%',
    textAlign: 'center',
    paddingLeft: '0',
    paddingRight: '0',
    padding: '104px 0 61px',
    backgroundColor: '#f7fbfd',
  },
  headingMain: {
    fontWeight: 600,
    fontSize: '36px',
    color: '#000',
  },
  sectionHeading: {
    marginBottom: '3rem',
  },
  bodyContainer: {
    maxWidth: '1140px',
    textAlign: 'center',
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
});
const itemData = [
  {
    img: 'https://www.radiustheme.com/demo/html/digeco/img/feature/1.png',
    title: 'Responsive Design',
    body1: 'This template is fully responsive and mobile friendly design.',
  },
  {
    img: 'https://www.radiustheme.com/demo/html/digeco/img/feature/2.png',
    title: 'Clean Markup',
    body1: 'Every code is super organized, readable, and well commented.',
  },
  {
    img: 'https://www.radiustheme.com/demo/html/digeco/img/feature/3.png',
    title: 'Well Documented',
    body1: 'Our product is well documented for better understand about easy code customize.',
  },
  {
    img: 'https://www.radiustheme.com/demo/html/digeco/img/feature/4.png',
    title: 'W3C Validate',
    body1: '100% validate with W3C. So no Error are casued by backward browser compatibility.',
  },
  {
    img: 'https://www.radiustheme.com/demo/html/digeco/img/feature/5.png',
    title: 'Customizable',
    body1: 'Every code is super organized, readable, and well commented.',
  },
  {
    img: 'https://www.radiustheme.com/demo/html/digeco/img/feature/6.png',
    title: 'Animate css',
    body1: 'We add animate css in our template. You can easily animate any element as you want.',
  },
  {
    img: 'https://www.radiustheme.com/demo/html/digeco/img/feature/7.png',
    title: 'Mega Menu',
    body1: 'We have Awesome Mega Menu in this template.',
  },
  {
    img: 'https://www.radiustheme.com/demo/html/digeco/img/feature/8.png',
    title: 'Google Font',
    body1: 'Free Google Fonts are Used by us in this template.',
  },
  {
    img: 'https://www.radiustheme.com/demo/html/digeco/img/feature/9.png',
    title: 'Customer Support',
    body1: '15 Hours Real Time Support. We provide quality work and best support.',
  },
];
const TemplateFeature1 = () => {
  const classes = useStyles ();
  return (
    <div className={classes.container}>
      <Container className={classes.bodyContainer}>
        <Box className={classes.sectionHeading}>
          <Typography variant="h4" className={classes.headingMain}>
            Our Awesome Features
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {itemData.map (item => (
            <Grid item xs={12} sm={6} md={4}>
              <Grid className={classes.imgFeature} key={item.img}>
                <img src={item.img} alt="" />
              </Grid>
              <Typography className={classes.title} variant="h5">
                {item.title}
              </Typography>
              <Typography className={classes.bodyText} variant="body1">
                {item.body1}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default TemplateFeature1;
