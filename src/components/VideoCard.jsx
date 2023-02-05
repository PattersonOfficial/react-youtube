import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

// Importing dummy data for missing data from api
import {
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
} from '../utils/constants';

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card sx={{  width: { md: '320px', xs: '100%' }, boxShadow: 'none', borderRadius: 0, }}>
      <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet ? snippet?.thumbnails?.high?.url : demoThumbnailUrl}
          alt={snippet ? snippet?.title : demoVideoTitle}
          sx={{
            height: 180,
            width: 358,
          }}
        />
        <CardContent sx={{ background: '#1e1e1e', height: '80px' }}>
          <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
            <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
              {snippet
                ? snippet?.title.slice(0, 60)
                : demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `channel/${snippet?.channelId}`
                : demoChannelUrl
            }>
            <Typography variant='subtitle2' fontWeight='bold' color='gray'>
              {snippet?.channelTitle.slice(0, 60) ||
                demoChannelTitle.slice(0, 60)}
              <CheckCircle sx={{ color: 'gray', fontSize: 12.5, ml: '5px' }} />
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;
