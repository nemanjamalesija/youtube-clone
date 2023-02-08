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
      'X-RapidAPI-Key': 'ca15920c56mshf9c581b5644b811p131238jsnb4402ca00e5c',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
  };

  return await axios
    .request(options)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export default fetchVideos;
