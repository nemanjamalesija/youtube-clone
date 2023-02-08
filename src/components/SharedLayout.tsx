import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';

const SharedLayout = () => {
  return (
    <div className="container">
      <Nav />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
