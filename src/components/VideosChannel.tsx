import { useQuery } from '@tanstack/react-query';
import fetchChanelVideos from '../helpers/fetchChanelVideos';
import VideoCard from './VideoCard';
import Loading from './Loading';

type videosChannelProps = {
  channelId: string;
  grid?: boolean;
};

const VideosChannel = ({ channelId, grid }: videosChannelProps) => {
  const { data, isLoading } = useQuery(
    ['channel', channelId],
    fetchChanelVideos
  );

  if (isLoading === true) return <Loading />;

  return (
    <div
      className={
        grid ? 'channel-videos-container grid' : 'channel-videos-container'
      }
    >
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
