import React, { useContext, useState, useEffect } from 'react';
import { initialState } from './constants/initialState';
import fetchVideos from './helpers/fetchVideos';
import './index.css';

//////////////context

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
