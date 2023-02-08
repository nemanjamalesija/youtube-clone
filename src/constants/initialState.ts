import { appStateType } from './types';

export const initialState: appStateType = {
  searchTerm: '',
  searchTermDummy: '',
  activeCategory: 'Home',
  videos: [
    {
      id: { kind: '', videoId: '' },
      kind: '',
      snippet: {
        channelId: '',
        channelTitle: '',
        description: '',
        liveBrodcastContent: '',
        publishTime: '',
        publishedAt: '',
        thumbnails: {
          default: { url: '', width: 0, height: 0 },
          high: { url: '', width: 0, height: 0 },
          medium: { url: '', width: 0, height: 0 },
        },
        title: '',
      },
    },
  ],
};
