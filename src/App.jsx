import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './homepage/Navbar';
import Footer from './homepage/Footer';
import Sidebar from './homepage/Sidebar';
import DashboardPage from './homepage/DashboardPage';
import ItemDetailsPage from './homepage/ItemDetailsPage';
import AboutPage from './homepage/AboutPage';
import NotFoundPage from './homepage/NotFoundPage';

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <Sidebar />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/item/:id" element={<ItemDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
