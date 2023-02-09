import { useGlobalContext } from '../context';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = () => {
  const { videos } = useGlobalContext();

  return (
    <div className="fetched-videos-div">
      {videos.map((item, i) => {
        const { snippet } = item;

        if (item.id.kind === 'youtube#channel') {
          return <ChannelCard key={item.id.channelId} snippet={snippet} />;
        } else
          return (
            <VideoCard
              key={item.id.videoId}
              videoId={item.id.videoId}
              snippet={snippet}
            />
          );
      })}
    </div>
  );
};

export default Videos;
