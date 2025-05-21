import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HighlightsSection from './components/HighlightsSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <HighlightsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;