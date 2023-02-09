import { useParams } from 'react-router-dom';
import VideosChannel from './VideosChannel';
import { useQuery } from '@tanstack/react-query';
import fetchChannelDetails from '../helpers/fetchChannelDetails';
import FeaturedChannel from './FeaturedChannel';
import Loading from './Loading';
import { channelDetailsType } from '../constants/types';

const ClickedChannel = () => {
  const id = useParams();
  const { chanelId } = id;
  const { data, isLoading } = useQuery(
    ['channelDetails', chanelId as string],
    fetchChannelDetails
  );
  if (isLoading) return <Loading />;

  const {
    brandingSettings: {
      channel: { title, description },
      image: { bannerExternalUrl },
    },
  } = data as channelDetailsType;

  return (
    <div className="featured-channel-container">
      <FeaturedChannel
        title={title}
        description={description}
        image={bannerExternalUrl}
      />
      <h2 className="heading-secondary">
        <span>{title}' s</span> videos
      </h2>
      <VideosChannel channelId={chanelId as string} grid={true} />
    </div>
  );
};

export default ClickedChannel;
