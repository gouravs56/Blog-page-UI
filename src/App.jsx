import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import NewsFeed from './components/NewsFeed';
import Updates from './components/Updates';
import Jobs from './components/Jobs';
import Footer from './components/Footer';
import Banner from './components/Banner';
import './index.css';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Header />
      <main className="container mx-auto px-4">
        <NewsFeed />
        <Updates />
        <Jobs />
      </main>
      <Banner/>
      <Footer />
    </div>
  );
};

export default App;
