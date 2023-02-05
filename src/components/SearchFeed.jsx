import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/service';
import { useParams } from 'react-router-dom';

const Feed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data?.items);
    });
  }, [searchTerm]);

  return (
    // Main Search  Container
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      {/* Content Heading Component */}
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
        Search Results: <span style={{ color: '#FC1503' }}>{searchTerm}</span>{' '}
        Videos
      </Typography>

      {/* Videos Component */}
      <Videos videos={videos} />
    </Box>
  );
};

export default Feed;
