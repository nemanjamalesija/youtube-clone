import axios from 'axios';
import { queryKeysType } from '../constants/types';
import { channelVideoType } from '../constants/types';

const fetchChanelVideos = async ({
  queryKey,
}: queryKeysType): Promise<channelVideoType[]> => {
  const id = queryKey[1];

  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      channelId: id,
      part: 'snippet,id',
      order: 'date',
      maxResults: '34',
    },
    headers: {
      'X-RapidAPI-Key': 'ca15920c56mshf9c581b5644b811p131238jsnb4402ca00e5c',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
  };

  return await axios
    .request(options)
    .then((response) => response?.data?.items)
    .catch((error) => console.log(error));
};

export default fetchChanelVideos;
