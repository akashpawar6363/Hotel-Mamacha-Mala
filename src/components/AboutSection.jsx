import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Hotel Mamacha Mala is a family-friendly restaurant that has been serving authentic 
                Maharashtrian and Indian dishes for over a decade. Our name reflects the warmth of 
                a mother's love ("Mama" means maternal uncle in Marathi, symbolizing family care), 
                and we bring that same care to every dish we prepare.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Located in the heart of the city, we pride ourselves on using traditional recipes 
                passed down through generations, combined with the freshest local ingredients. 
                Our skilled chefs prepare each meal with passion, ensuring that every bite transports 
                you to the authentic flavors of Maharashtra.
              </p>
              
              <p className="text-gray-700 mb-8 leading-relaxed">
                Whether you're craving a hearty thali, spicy Kolhapuri curry, or comforting dal-rice, 
                our diverse menu caters to all tastes while maintaining the authentic essence of 
                traditional Indian cuisine. Come, experience the warmth of our hospitality and the 
                richness of our flavors.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-warm-red rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Authentic Recipes</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-warm-red rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Fresh Ingredients</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-warm-red rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Family Atmosphere</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-warm-red rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Affordable Prices</span>
              </div>
            </div>

            {/* Instagram Section */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <i className="bi bi-instagram text-pink-600 mr-3 text-2xl"></i>
                Follow Us on Instagram
              </h3>
              
              <p className="text-gray-600 mb-4">
                Stay updated with our latest dishes, special offers, and behind-the-scenes moments. 
                Join our food community and share your dining experiences with us!
              </p>
              
              <a 
                href="https://instagram.com/hotel_mamacha_mala_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
              >
                <i className="bi bi-instagram mr-2"></i>
                @hotel_mamacha_mala_
              </a>
            </div>
          </div>

          {/* Instagram Feed Preview */}
          <div className="lg:sticky lg:top-24">
            <a 
              href="https://instagram.com/hotel_mamacha_mala_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block transform transition-transform duration-200 hover:scale-105 cursor-pointer"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4">
                  <h3 className="text-white font-semibold flex items-center">
                    <i className="bi bi-instagram mr-2 text-xl"></i>
                    Instagram Feed Preview
                  </h3>
                </div>
                
                {/* Instagram Image */}
                <div className="p-6">
                  <img 
                    src="/instagram.png" 
                    alt="Follow us on Instagram - Click to visit our Instagram page" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

// Load Instagram embed script
if (typeof window !== 'undefined' && !window.instgrm) {
  const script = document.createElement('script');
  script.async = true;
  script.src = '//platform.instagram.com/en_US/embeds.js';
  document.head.appendChild(script);
}