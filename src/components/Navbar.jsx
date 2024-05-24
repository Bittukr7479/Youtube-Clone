import React from 'react'
import { Stack } from '@mui/material';
// import { YouTubeIcon } from '@mui/icons-material'
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <Stack direction="row" alignItems="center" p={2} sx={{ position: 'stick', background: '#000', top: 0, justifyContent: 'space-between' }} >
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <YouTubeIcon sx={{color: "red", height: '60px', width: '60px', marginLeft: "15px", left: "60px"}}/>
        <h1 style={{color: 'white', margin: "unset"}}>Yutube</h1>
        {/* <img src={YouTubeIcon} alt="logo"  height={45}/> */}
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar