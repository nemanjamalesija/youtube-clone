import axios from 'axios';
import { queryKeysType, videoComments } from '../constants/types';

const fetchVideoComents = async ({
  queryKey,
}: queryKeysType): Promise<videoComments[]> => {
  const idVideo = queryKey[1];

  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/commentThreads',
    params: { part: 'snippet', videoId: idVideo, maxResults: '100' },
    headers: {
      'X-RapidAPI-Key': 'ca15920c56mshf9c581b5644b811p131238jsnb4402ca00e5c',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
    origin: 'https://',
  };

  return await axios
    .request(options)
    .then((response) => response.data.items)
    .catch((error) => console.log(error));
};

export default fetchVideoComents;
