import React, { useContext, useState, useEffect } from 'react';
import './index.css';

//////////////context

type appState = {
  searchTerm: string;
  searchTermDummy: string;
  activeCategory: string;
  videos: Object;
};

const initialState = {
  searchTerm: '',
  searchTermDummy: '',
  activeCategory: 'Home',
  videos: [],
};

const AppContext = React.createContext(initialState);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [appState, setAppState] = useState(initialState);

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
