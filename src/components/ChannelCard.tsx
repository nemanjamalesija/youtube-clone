import { Link } from 'react-router-dom';
import { snippetType } from '../constants/types';
import './css/channelCard.css';

type channelCard = {
  snippet: snippetType;
};

const ChannelCard = (props: channelCard) => {
  const {
    snippet: { channelId, title, description, thumbnails },
  } = props;

  return (
    <Link
      to={channelId ? `/channel/${channelId}` : `/video/dQw4w9WgXcQ`}
      className="link-video-card"
    >
      <div className="video-card card-channel">
        <header>
          <img
            className="video-img channel-img"
            alt={title}
            src={
              thumbnails?.high?.url
                ? thumbnails.high.url
                : 'https://as2.ftcdn.net/v2/jpg/02/15/84/43/1000_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg'
            }
          />
        </header>
        <div className="video-description">
          <h5 className="channel-title">{title}</h5>
          <p className="channel-description">{description.slice(0, 85)}...</p>
        </div>
      </div>
    </Link>
  );
};

export default ChannelCard;
