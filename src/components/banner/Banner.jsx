import {Box, Container, makeStyles, Typography} from '@material-ui/core';
import React, {useState} from 'react';

const useStyles = makeStyles ({
  container: {
    maxWidth: '100%',
    paddingLeft: '0',
    paddingRight: '0',
  },
  banner: {
    backgroundImage: 'url("https://www.radiustheme.com/demo/html/digeco/img/banner/banner1.jpg")',
    overflow: 'hidden',
    padding: '75px 0',
    position: 'relative',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  boxHeader: {
    position: 'relative',
    top: 0,
    left: '5%',
    maxWidth: '1140px',
  },
  logoHeader: {
    marginBottom: '110px',
  },
  intro: {
    textAlign: 'left',
  },
  textColors: {
    color: '#FFFFFF',
  },
  fixedText: {
    fontSize: '40px',
    fontWeight: 700,
    lineHeight: '60px',
    marginRight: '20px'
  },
  fixedText2: {
    fontSize: '38px',
    fontWeight: 700,
    lineHeight: '60px',
    marginBottom: '30px',
  },
  title: {
    width: '35%',
    marginBottom: '50px',
  },
  inline: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: 0,
    padding: 0,
  },
  ghostBtn: {
    '&:hover': {
      color: '#000',
      boxShadow: 'none',
      backgroundColor: ' #fff',
    },
    marginRight: '20px',
    padding: '10px 40px',
    textTransform: 'capitalize',
    fontSize: '18px',
    fontWeight: 500,
    display: 'inline-block',
    borderRadius: '5px',
    color: '#fffefe',
    border: '1px solid #fff',
    backgroundColor: 'transparent',
  },
  buyBtn: {
    '&:hover': {
      color: '#fffefe',
      boxShadow: 'none',
      backgroundColor: 'transparent',
    },
    padding: '10px 40px',
    textTransform: 'capitalize',
    fontSize: '18px',
    fontWeight: 500,
    display: 'inline-block',
    borderRadius: '5px',
    color: '#000000',
    border: '1px solid #fff',
    backgroundColor: '#fff',
  },
  img: {
    position: 'absolute',
    right: '-390px',
    top: '0',
  },
  boxIntro:{
    display: 'flex',
  }
});
const animation = [
  {id: 0, value: 'Technology'},
  {id: 1, value: 'Digital Agency'},
  {id: 2, value: 'Startup Agency'},
  {id: 3, value: 'App Landing'},
  {id: 4, value: 'Digital Marketing'},
];

const Banner = () => {
  const classes = useStyles ();
  const [headerAnimation, setHeaderAnimation] = useState (0);
  return (
    <div>
      <Container id="wapper" className={classes.container}>

        <Box className={classes.banner}>
          <Box className={classes.img}>
            <img
              src="https://www.radiustheme.com/demo/html/digeco/img/banner/banner2.png"
              alt=""
            />
          </Box>
          <Container className={classes.boxHeader}>
            <Box>
              <img
                className={classes.logoHeader}
                src="https://www.radiustheme.com/demo/html/digeco/img/logo.png"
                alt="logo"
              />
            </Box>
            <Box className={classes.intro}>
            <Box className ={classes.boxIntro}>
              <Typography
                className={`${classes.textColors} ${classes.fixedText}`}
                variant="h4"
              >
                Best{' '}
              </Typography>
              <Typography className={classes.textColors}>
                {animation.map (item => (
                  <Typography key={item.id} variant="h5">
                    {item.value}
                  </Typography>
                ))}

              </Typography>
            </Box>
              <Typography
                variant="h5"
                className={`${classes.textColors} ${classes.fixedText2}`}
              >
                HTML Template
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="subtitle1"
                className={`${classes.textColors} ${classes.title}`}
              >
                11 Home Pages With Eye Catching Inner Pages. Over 100+ interface block
              </Typography>
            </Box>
            <ul className={classes.inline}>
              <li><a className={classes.ghostBtn} href="#">Buy Now</a></li>
              <li><a className={classes.buyBtn} href="#">See Demo</a></li>
            </ul>
          </Container>
        </Box>
      </Container>
    </div>
  );
};

export default Banner;
