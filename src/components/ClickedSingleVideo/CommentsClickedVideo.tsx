import { useQuery } from '@tanstack/react-query';
import fetchVideoComents from '../../helpers/fetchVideoComments';
import { IonIcon } from '@ionic/react';
import { thumbsUpOutline } from 'ionicons/icons';
import formatDate from '../../helpers/formatDates';
import './videoComments.css';

type videoCommentsProps = { videoId: string };

const CommentsClickedVideo = ({ videoId }: videoCommentsProps) => {
  const { data, isLoading } = useQuery(['coments', videoId], fetchVideoComents);

  if (isLoading) return <h1>Loading...</h1>;

  if (!data)
    return (
      <h1 className="main-heading">Comments are disabled for this video.</h1>
    );

  return (
    <div>
      {data.map((item, i) => {
        const {
          snippet: {
            topLevelComment: {
              snippet: {
                authorDisplayName,
                authorProfileImageUrl,
                likeCount,
                publishedAt,
                textDisplay,
              },
            },
          },
        } = item;

        return (
          <article key={i} className="comment-container">
            <div className="comment-img-div">
              <img
                src={authorProfileImageUrl}
                alt={authorDisplayName}
                className="comment-image"
              />
            </div>
            <div className="comment-textual-div">
              <header className="comment-author-info">
                <h5 className="comment-author">@{authorDisplayName}</h5>
                <span className="formated-date-comment">{formatDate(publishedAt)}</span>
              </header>
              <p
                className="comment-author-comment"
                dangerouslySetInnerHTML={{ __html: textDisplay }}
              ></p>

              {likeCount > 0 && (
                <div className="comment-likes-info">
                  <IonIcon icon={thumbsUpOutline} className="comment-icon" />
                  <p className="like-count">
                    {likeCount.toLocaleString('en-US')}
                  </p>
                </div>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default CommentsClickedVideo;
