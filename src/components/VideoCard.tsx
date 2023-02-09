import { Link } from 'react-router-dom';
import { snippetType } from '../constants/types';
import formatDate from '../helpers/formatDates';
import './css/videoCard.css';

type videoCardProps = {
  videoId: string;
  snippet: snippetType;
};

const VideoCard = ({ videoId, snippet }: videoCardProps) => {
  const { thumbnails, title, channelTitle, publishTime } = snippet;

  return (
    <Link
      to={videoId ? `/video/${videoId}` : `/video/dQw4w9WgXcQ`}
      className="link-video-card"
    >
      <div className="video-card ">
        <header className="video-card-header">
          <img
            className="video-img"
            alt={title}
            src={
              thumbnails?.high?.url
                ? thumbnails.high.url
                : 'https://as2.ftcdn.net/v2/jpg/02/15/84/43/1000_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg'
            }
          />
        </header>

        <div className="video-description">
          <h5 className="heading-fifth">{title.slice(0, 60)}...</h5>
          <p
            className="video-chanel-name"
            dangerouslySetInnerHTML={{ __html: channelTitle }}
          ></p>
          <span className="formated-date ">{formatDate(publishTime)}</span>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
