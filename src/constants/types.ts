export type snippetType = {
  channelId: string;
  channelTitle: string;
  description: string;
  publishTime: string;
  publishedAt: string;
  thumbnails: {
    default: { url: string; width: number; height: number };
    high: { url: string; width: number; height: number };
    medium: { url: string; width: number; height: number };
  };
  title: string;
};

export type videosType = {
  id: { kind: string; videoId: string; channelId?: string };
  kind: string;
  snippet: snippetType;
};

export type appStateType = {
  searchTerm: string;
  searchTermDummy: string;
  activeCategory: string;
  videos: videosType[];
  setAppState: (value: React.SetStateAction<appStateType>) => void;
};

export type queryKeysType = { queryKey: [string, string] };

export type channelVideoType = {
  id: { videoId: string };
  snippet: snippetType;
};

export type clickedVideoType = {
  snippet: {
    title: string;
    channelId: string;
  };

  statistics: {
    viewCount: string;
    likeCount: string;
  };
};

export type videoComments = {
  snippet: {
    topLevelComment: {
      snippet: {
        authorDisplayName: string;
        authorProfileImageUrl: string;
        likeCount: number;
        publishedAt: string;
        textDisplay: string;
      };
    };
  };
};

export type channelDetailsType = {
  brandingSettings: {
    channel: { title: string; description: string };
    image: { bannerExternalUrl: string };
  };
};
