import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import SideBar from './minor-components/SideBar';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/service';

const Feed = () => {
  const date = new Date().getFullYear();

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]); 

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data?.items);
    });
  }, [selectedCategory]);

  return (
    // Main Feed Container
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      {/* Sidebar Container */}
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}>
        {/* SideBar Component */}
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Copyright Component */}
        <Typography
          className='copyright'
          variant='body2'
          sx={{ mt: 1.5, color: '#fff' }}>
          Copyright ©{date} Asher Technologies
        </Typography>
      </Box>

      {/* Main Feed Container */}
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        {/* Content Heading Component */}
        <Typography
          variant='h4'
          fontWeight='bold'
          mb={2}
          sx={{ color: 'white'}}>
          {selectedCategory} <span style={{ color: '#FC1503' }}> Videos</span>
        </Typography>

        {/* Videos Component */}
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
