import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import { Navbar, ChannelDetail, VideoDetail, Feed, SearchFeed } from './components'

const App = () => {
    return (
        // <div>App</div>

        <BrowserRouter>
            <Box sx={{ backgroundColor: '#000'}} >
                <Navbar/>
                <Routes >
                    <Route exact path='/' element={<Feed />} />
                    <Route path='/video/:id' element={<VideoDetail />} />
                    <Route path='/channel/:id' element={<ChannelDetail />} />
                    <Route path='/search/:searchTerm' element={<SearchFeed />} />
                </Routes>
            </Box >
        </BrowserRouter >
    )
}

export default App