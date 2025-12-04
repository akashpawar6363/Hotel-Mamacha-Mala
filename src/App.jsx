import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PhotosCarousel from './components/PhotosCarousel';
import MenuSection from './components/MenuSection';
import AboutSection from './components/AboutSection';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Fixed Navigation */}
      <Navbar />
      
      {/* Main Content Sections */}
      <main>
        <Hero />
        <PhotosCarousel />
        <MenuSection />
        <AboutSection />
        <LocationMap />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;