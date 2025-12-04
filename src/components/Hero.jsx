import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/main_image.webp')`
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 marathi-text">
          हॉटेल मामाचा मळा
        </h1>
        
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-warm-yellow">
          चुलीवरची मटण भाकरी
        </h2>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-warm-yellow">
          Authentic Maharashtrian & Indian Cuisine
        </h2>
        
        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience the rich flavors of traditional Maharashtrian dishes prepared with love and authentic spices. 
          A perfect place for family dining with warm hospitality and delicious food that will remind you of home.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('menu')}
            className="btn-warm text-lg px-8 py-4 transform hover:scale-105 transition-transform duration-200"
          >
            View Our Menu
          </button>
          
          <button
            onClick={() => scrollToSection('location')}
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-medium transition-colors duration-300"
          >
            Find Us
          </button>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;