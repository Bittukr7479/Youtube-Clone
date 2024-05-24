import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { Videos } from './';
import { fetchFromAPI } from '../utils/FetchFromAPI'
import { useParams } from 'react-router-dom';

const Feed = () => {
  const { searchTerm} = useParams([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data)=> setVideos(data.items))
  }, [searchTerm]);

  return (
    

    <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2 }}>
    <Typography variant='h4' fontWeight="bold" mb={2} sx={{ color: 'white' }}>
      {searchTerm} <span style={{ color: '#F31503' }}>
        videos
      </span>
    </Typography>
    <Videos videos={videos} />
  </Box>

  )
}

export default Feed