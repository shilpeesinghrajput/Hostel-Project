// AppLayout.js
import React from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom';

const AppLayout = ({ children }) => {
  return (
    <div className="app-layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;