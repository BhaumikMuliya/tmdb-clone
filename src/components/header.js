import { AppBar, Toolbar, Typography, IconButton, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

import './header.css';
import tmdb_logo from '../images/tmdb_logo.svg';
import { headerNavigationList } from '../constants/linkLists';

function Header() {
  return (
    <header>
      <AppBar position="static">
        <Toolbar className='wrap_header'>
          <Stack direction='row' spacing={2} alignItems='center'>
            <Link to="/">
              <img src={tmdb_logo} alt='Logo' className='logo' />
            </Link>
            {headerNavigationList && headerNavigationList.map((item, index) => (
              <Link key={index} to={item?.link}>
                <Typography variant="subtitle1" color='white'>{item?.text}</Typography>
              </Link>
            ))}
          </Stack>
          <IconButton color='light'>
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;