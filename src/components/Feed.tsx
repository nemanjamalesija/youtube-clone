import React from 'react';
import { useGlobalContext } from '../context';
import Sidebar from './Sidebar';
import Videos from './Videos';

const Feed = () => {
  const { searchTerm } = useGlobalContext();

  return (
    <main className="app-main">
      <h1 className="main-heading">
        {searchTerm ? searchTerm : 'New'} <span>videos</span>
      </h1>
      <Sidebar />
      <Videos />
    </main>
  );
};

export default Feed;
