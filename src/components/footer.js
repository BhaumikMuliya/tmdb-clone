import { Box, Grid, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import './footer.css';
import big_tmdb_logo from '../images/big_tmdb_logo.svg';
import { footerNavigationList } from '../constants/linkLists';

function Footer() {
  return (
    <footer>
      <div className='blue_background'>
        <Box className='wrap_footer'>
          <Grid container justifyContent='space-between'>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
              <img src={big_tmdb_logo} alt='Footer' className='footer_logo' />
              <Typography variant='subtitle2' textTransform='uppercase' color='#01B4E4' className='white_background'>Join the community</Typography>
            </Grid>
            <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
              <Grid container>
                {footerNavigationList && footerNavigationList.map((item, index) => (
                  <Grid key={index} item xl={3} lg={3} md={3} sm={3} xs={3}>
                    <Typography variant='subtitle1' textTransform='uppercase' fontWeight='bold' color='white'>{item.category}</Typography>
                    <Stack>
                      {item.list.map((innerItem, keyIndex) => (
                        <Link key={keyIndex} to={innerItem.link}>
                          <Typography variant='subtitle2' color='white'>{innerItem.text}</Typography>
                        </Link>
                      ))}
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
    </footer>
  );
}

export default Footer;