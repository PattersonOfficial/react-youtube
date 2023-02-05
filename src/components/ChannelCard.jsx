import { CheckCircle } from '@mui/icons-material';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => (
  <Box
    sx={{
      borderRadius: '20px',
      boxShadow: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '320px' },
      height: '326px',
      margin: 'auto',
      marginTop,
    }}>
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          flexDirection: 'column',
          color: '#fff',
        }}>
        <CardMedia
          image={
            channelDetail?.snippet?.thumbnails?.high.url || demoProfilePicture
          }
          alt={channelDetail?.snippet?.title}
          sx={{
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            mb: 2,
            border: '1px solid #e3e3e3',
          }}
        />
        <Typography variant='h6'>
          {channelDetail?.snippet?.title}
          <CheckCircle sx={{ color: 'gray', fontSize: 14, ml: '5px' }} />
        </Typography>

        {channelDetail?.statistics?.subscriberCount && (
          <Typography variant='subtitle1' sx={{ color: 'gray' }}>
            {parseInt(
              channelDetail.statistics.subscriberCount,
              10
            ).toLocaleString()}{' '}
            Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
