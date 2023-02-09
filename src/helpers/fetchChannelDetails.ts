import axios from 'axios';
import { channelDetailsType, queryKeysType } from '../constants/types';

const fetchChannelDetails = async ({
  queryKey,
}: queryKeysType): Promise<channelDetailsType> => {
  const id = queryKey[1];

  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/channels',
    params: { part: 'snippet,statistics', id: id },
    headers: {
      'X-RapidAPI-Key': 'ca15920c56mshf9c581b5644b811p131238jsnb4402ca00e5c',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
  };

  return await axios
    .request(options)
    .then((response) => response?.data?.items[0])
    .catch((error) => console.log(error));
};

export default fetchChannelDetails;
