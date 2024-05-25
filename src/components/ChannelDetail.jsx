import React, { useEffect, useState } from 'react'
import { Videos, ChannelCard } from './'
import { fetchFromAPI } from "../utils/FetchFromAPI";
import { useParams } from 'react-router-dom';
import {zIndex, height} from '@mui/material/styles';
// import { height } from '@fortawesome/free-solid-svg-icons/fa0';
import { Box} from '@mui/material'
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channela?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id])
  return (
    <Box minHeight="90vh">
      <Box>
      <div style={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)', zIndex: 10, height: '300px' }} />
        <ChannelCard channelDetail={channelDetail} margineTop="-110px"/>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr: {sm: '100px'}}}>
          <Videos videos={ videos}/>
        </Box>
      </Box>
    </Box>
    
  )
}

export default ChannelDetail