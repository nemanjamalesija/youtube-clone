import axios from 'axios';

const fetchVideos = async (searchValue: string) => {
  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      q: searchValue,
      part: 'snippet,id',
      maxResults: '24',
      regionCode: 'US',
    },
    headers: {
      'X-RapidAPI-Key': '66a34855d0msh8fbad31230099d6p189650jsn9c0a63e7f75f',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
  };

  return await axios
    .request(options)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export default fetchVideos;
