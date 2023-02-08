import axios from 'axios';
import { queryKey } from '../constants/types';

const fetchClickedVideo = async ({ queryKey }: queryKey): Promise<any> => {
  const idVideo = queryKey[1];

  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/videos',
    params: { part: 'contentDetails,snippet,statistics', id: idVideo },
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

export default fetchClickedVideo;
