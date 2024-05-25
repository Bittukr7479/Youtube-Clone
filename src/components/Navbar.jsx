import React from 'react'
import { Stack, Typography } from '@mui/material';
// import { YouTubeIcon } from '@mui/icons-material'
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <Stack direction="row" alignItems="center" p={2} sx={{ position: 'sticky', backgroundColor: 'black', top: 0, justifyContent: 'space-between', zIndex:'1' }} >
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <YouTubeIcon sx={{color: "red", height: '50px', width: '50px', marginLeft: "15px", left: "60px"}}/>
        <Typography variant='h5' sx={{color:'white', fontWeight:'700'}}>Youtube</Typography>
                {/* <img src={YouTubeIcon} alt="logo"  height={45}/> */}
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar