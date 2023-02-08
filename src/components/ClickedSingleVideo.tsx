import React from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import fetchClickedVideo from '../helpers/fetchClickedVideo';
import { useQuery } from '@tanstack/react-query';
import { IonIcon } from '@ionic/react';
import {
  thumbsUpOutline,
  thumbsDownOutline,
  arrowRedoOutline,
  downloadOutline,
} from 'ionicons/icons';
import { clickedVideoType } from '../constants/types';

const ClickedSingleVideo = () => {
  const id = useParams();
  const { videoId } = id;

  const { data, isLoading } = useQuery(
    ['clickedVideo', videoId as string],
    fetchClickedVideo
  );

  if (isLoading) return <h1>Loading...</h1>;

  const {
    snippet: { title, channelId },
    statistics: { viewCount, likeCount },
  } = data as clickedVideoType;

  return (
    <div className="clicked-video-container">
      <div className="clicked-video-main">
        <div className="clicked-video-player-comments">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            className="react-player"
            controls
          />
        </div>

        <div className="video-stats">
          <h3 className="stats-heading">{title}</h3>
          <div className="stat-info">
            <p className="views-video">
              {parseInt(viewCount).toLocaleString('en-US')} views
            </p>
            <div className="right-side-video">
              <div className="info-block-video">
                <button className="btn btn-block-info-video">
                  <IonIcon icon={thumbsUpOutline} className="icon-stats" />
                  <p className="paragraph-stats">
                    {parseInt(likeCount).toLocaleString('en-US')}
                  </p>
                </button>
                <button className="btn btn-block-info-video">
                  <IonIcon icon={thumbsDownOutline} className="icon-stats" />
                </button>
              </div>
              <div className="info-block-video info-margin-left">
                <button className="btn btn-block-info-video icon-share">
                  <IonIcon icon={arrowRedoOutline} className="icon-stats" />
                  <p className="paragraph-stats">SHARE</p>
                </button>
              </div>
              <div className="info-block-video info-margin-left">
                <button className="btn btn-block-info-video icon-share">
                  <IonIcon icon={downloadOutline} className="icon-stats" />
                  <p className="paragraph-stats">Download</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>Add video coments</div>
      </div>
      <div>Add channel videos</div>
    </div>
  );
};

export default ClickedSingleVideo;
