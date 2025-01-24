import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import FeaturedProjects from './components/FeaturedProjects';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import CgiAi from './components/CgiAi';
import Photography from './components/Photography';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F3F4F6]">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Benefits />
              <FeaturedProjects />
              <Stats />
            </>
          } />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/cgi-ai" element={<CgiAi />} />
          <Route path="/photography" element={<Photography />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;