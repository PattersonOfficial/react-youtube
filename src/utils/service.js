const axios = require('axios');

const base_url = 'https://youtube-v31.p.rapidapi.com';

const options = {
  method: 'GET',
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '31b5eca088msh6b6e2d8890033e5p18b7b0jsn48c57368f1bb',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${base_url}/${url}`, options);

  return data;
};
