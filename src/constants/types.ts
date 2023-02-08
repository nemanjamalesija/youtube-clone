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

export type queryKey = { queryKey: [string, string] };

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
