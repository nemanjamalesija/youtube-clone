import React, { useContext, useState, useEffect } from 'react';
import fetchVideos from './helpers/fetchVideos';
import './index.css';

//////////////context

export type appStateType = {
  searchTerm: string;
  searchTermDummy: string;
  activeCategory: string;
  videos: {
    id: { kind: string; videoId: string; channelId?: string };
    kind: string;
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
  }[];
};

const initialState: appStateType = {
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

const AppContext = React.createContext(initialState);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [appState, setAppState] = useState(initialState);

  useEffect(() => {
    fetchVideos(
      `${appState.searchTerm ? appState.searchTerm : 'mr beast'}`
    ).then((res) =>
      setAppState((prev) => {
        return { ...prev, videos: res.items };
      })
    );
  }, [appState.searchTerm]);

  console.log(appState.videos);

  return (
    <AppContext.Provider
      value={{
        ...appState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
