import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Hotel Information */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center space-x-4">
              {/* Logo */}
              <div className="w-24 h-24 flex items-center justify-center flex-shrink-0">
                <img 
                  src="/mamacha_mala_logo.png" 
                  alt="Hotel Mamacha Mala Logo" 
                  className="w-full h-full object-contain rounded-full"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full bg-warm-red rounded-full text-white font-bold items-center justify-center">
                  MM
                </div>
              </div>
              
              {/* Brand Text */}
              <div>
                <h3 className="text-2xl font-bold text-white marathi-text mb-2">
                  हॉटेल मामाच्या मळा
                </h3>
                <p className="text-gray-300 text-sm">Hotel Mamacha Mala</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experience authentic Maharashtrian and Indian cuisine in a warm, 
              family-friendly atmosphere. We serve traditional recipes passed down 
              through generations, prepared with love and the finest ingredients.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {/* Replace these URLs with your actual social media links */}
              <a 
                href="https://instagram.com/hotel_mamacha_mala_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <i className="bi bi-instagram text-xl"></i>
              </a>
              
              <a 
                href="https://wa.me/917378370034" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors duration-200"
                aria-label="Contact us on WhatsApp"
              >
                <i className="bi bi-whatsapp text-xl"></i>
              </a>
            </div>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-warm-yellow">
              Contact Details
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <i className="bi bi-geo-alt-fill text-warm-red mt-1 flex-shrink-0"></i>
                <div className="text-gray-300 text-sm">
                  <p>Karad, Mundhe</p>
                  <p>Maharashtra 415124</p>
                  <p>India</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <i className="bi bi-telephone-fill text-warm-red flex-shrink-0"></i>
                <div className="text-gray-300 text-sm space-y-1">
                  <div>
                    <a href="tel:+917378370034" className="hover:text-white transition-colors">
                      +91 73783 70034
                    </a>
                  </div>
                  <div>
                    <a href="tel:+919764797077" className="hover:text-white transition-colors">
                      +91 97647 97077
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <i className="bi bi-envelope-fill text-warm-red flex-shrink-0"></i>
                <div className="text-gray-300 text-sm">
                  {/* Replace with your actual email */}
                  <a href="mailto:info@mamachamala.com" className="hover:text-white transition-colors">
                    info@mamachamala.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links & Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-warm-yellow">
              Quick Info
            </h4>
            
            <div className="space-y-4">
              {/* Opening Hours */}
              <div>
                <h5 className="text-white font-medium mb-2 flex items-center">
                  <i className="bi bi-clock-fill text-warm-red mr-2"></i>
                  Opening Hours
                </h5>
                <div className="text-gray-300 text-sm space-y-1">
                  <p>Monday - Sunday</p>
                  <p className="font-medium">11:00 AM - 4:00 PM</p>
                  <p className="font-medium">7:00 PM - 11:00 PM</p>
                </div>
              </div>
              
              {/* Quick Navigation */}
              <div>
                <h5 className="text-white font-medium mb-2">Quick Links</h5>
                <div className="space-y-2 text-sm">
                  <button 
                    onClick={() => scrollToSection('menu')}
                    className="block text-gray-300 hover:text-warm-yellow transition-colors"
                  >
                    Menu
                  </button>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="block text-gray-300 hover:text-warm-yellow transition-colors"
                  >
                    About Us
                  </button>
                  <button 
                    onClick={() => scrollToSection('location')}
                    className="block text-gray-300 hover:text-warm-yellow transition-colors"
                  >
                    Location
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Instagram Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-warm-yellow flex items-center justify-center">
              <i className="bi bi-instagram mr-2 text-xl"></i>
              Follow Us on Instagram
            </h4>
            
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Stay updated with our latest dishes, special offers, and daily specials. 
              Share your dining experience with us using #MamachaMala
            </p>
            
            {/* Replace this URL with your actual Instagram page */}
            <a 
              href="https://instagram.com/hotel_mamacha_mala_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              <i className="bi bi-instagram mr-2"></i>
              @hotel_mamacha_mala_
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-2 md:mb-0">
              <p>&copy; {currentYear} Hotel Mamacha Mala. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <span>Made with</span>
              <i className="bi bi-heart-fill text-red-500 animate-pulse"></i>
              <span>for food lovers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;