import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './component/footer/Footer';
import HeroContainer from './component/hero-container/HeroContainer';
import Navbar from './component/navbar/Navbar';
import HeroSectionLayout from './component/herosectionlayout/HeroSectionLayout';
import HowItWorks from './component/how-it-works/HowItWorks'; 
import OurDestination from './component/our-destination/OurDestination'; 

function App() {

  return (
    <Router>
      <div className="w-full container-fluid min-h-screen flex flex-col text-neutral-200 font-normal">
        
        <Navbar />

        {/* Main contents */}
        <div className="flex-grow">
          <HeroContainer />
          <HeroSectionLayout/>
          <HowItWorks />
          <OurDestination />
        </div>

      
        <Footer />
      </div>
    </Router>
  );
}

export default App;
