import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Feed = () => {

  const date = new Date().getFullYear();
  return (
    // Main Feed Container
    <Stack sx={{ flexDirection: { sm: 'column', md: 'row' } }}>
      
      {/* Main Feed Content */}
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}>

          {/* SideBar Component */}
          SideBar


          {/* Copyright Component */}
          <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
            Copyright ©{date} Asher Technologies
          </Typography>

        </Box>

    </Stack>
  );
};

export default Feed;
