import React from 'react';
import { Link } from 'react-router-dom';
import { snippetType } from '../constants/types';
import './channelCard.css';

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
            src={thumbnails?.high?.url}
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
