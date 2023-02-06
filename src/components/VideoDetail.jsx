import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Videos } from './';
import { fetchFromAPI } from '../utils/service';
import { Stack, Box, Typography } from '@mui/material';
import { CheckCircle, ThumbUp, Visibility } from '@mui/icons-material';
import ReactPlayer from 'react-player';

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetail(data?.items[0]);
    });

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, [id]);

  if (!videoDetail) return 'Loading...';

  const {
    snippet: { title, description, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        {/* Video Player Container */}
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            {/* Player Component */}
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              className='react-player'
            />

            <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
              {title}
            </Typography>

            <Stack
              direction='row'
              justifyContent='space-between'
              sx={{ color: '#fff' }}
              py={1}
              px={2}>
              {/* left section */}
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: 'subtitle1', md: 'h6' }}
                  color='#fff'
                  fontWeight='bold'>
                  {channelTitle}

                  <CheckCircle
                    sx={{ color: 'gray', fontSize: '12px', ml: '5px' }}
                  />
                </Typography>
              </Link>

              {/* right section */}
              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  <Visibility sx={{ fontSize: '12px', mr: '5px' }} />
                  {parseInt(viewCount).toLocaleString()}
                </Typography>

                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  <ThumbUp sx={{ fontSize: '12px', mr: '5px' }} />
                  {parseInt(likeCount).toLocaleString()}
                </Typography>
              </Stack>
            </Stack>

            {/* <Typography color='#fff' variant='subtitle2' p={2}>
              { description }
            </Typography> */}
          </Box>
        </Box>

        {/* More Related Content Container */}
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent='center'
          alignItems='center'>
          <Videos videos={videos} direction='column' />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
