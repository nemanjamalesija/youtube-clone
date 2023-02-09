import { useQuery } from '@tanstack/react-query';
import fetchChanelVideos from '../../helpers/fetchChanelVideos';
import VideoCard from '../VideoCard';

type videosChannelType = {
  channelId: string;
};

const VideosChannel = ({ channelId }: videosChannelType) => {
  const { data, isLoading } = useQuery(
    ['channel', channelId],
    fetchChanelVideos
  );

  if (isLoading === true) return <h1>Loading...</h1>;

  console.log(data);

  return (
    <div className="channel-videos-container">
      {data?.map((item, i) => {
        const { snippet } = item;
        const {
          id: { videoId },
        } = item;
        return <VideoCard key={i} videoId={videoId} snippet={snippet} />;
      })}
    </div>
  );
};

export default VideosChannel;
