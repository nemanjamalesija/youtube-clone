import React from 'react';
import { Link } from 'react-router-dom';
import { snippetType } from '../constants/types';
import formatDate from '../helpers/formatDates';

import './videoCard.css';

type videoCardProps = {
  videoId: string;
  snippet: snippetType;
};

const VideoCard = (props: videoCardProps) => {
  const { snippet, videoId } = props;

  const { thumbnails, title, channelTitle, publishTime } = snippet;

  return (
    <Link
      to={videoId ? `/video/${videoId}` : `/video/dQw4w9WgXcQ`}
      className="link-video-card"
    >
      <div className="video-card ">
        <header className="video-card-header">
          <img className="video-img" alt={title} src={thumbnails?.high?.url} />
        </header>

        <div className="video-description">
          <h5 className="heading-fifth">{title.slice(0, 60)}</h5>
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
