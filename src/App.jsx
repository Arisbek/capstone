// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import PromoBanner from './components/PromoBanner';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';
import OrderPage from './components/OrderPage';
import ReservePage from './components/ReservePage';
import './App.css';

const App = () => {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'order':
        return <OrderPage />;
      case 'reserve':
        return <ReservePage />;
      default:
        return (
          <div>
            <PromoBanner />
            <InfoSection />
          </div>
        );
    }
  };

  return (
    <div>
      <Header setPage={setPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;