import React from 'react';

type channelCard = {
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBrodcastContent: string;
    publishTime: string;
    publishedAt: string;
    thumbnails: {
      default: { url: string; width: number; height: number };
      high: { url: string; width: number; height: number };
      medium: { url: string; width: number; height: number };
    };
    title: string;
  };
};

const ChannelCard = (props: channelCard) => {
  return <div>ChannelCard</div>;
};

export default ChannelCard;
