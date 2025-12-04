import React, { useState } from 'react';

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('starters');
  const [selectedImage, setSelectedImage] = useState(null);

  // Menu images mapping - using correct Vite public folder paths
  const menuImages = {
    starters: [
      { 
        src: '/starter1.jpeg', 
        alt: 'Starter Menu 1',
        title: 'Starters Collection 1'
      },
      { 
        src: '/starter2.jpeg', 
        alt: 'Starter Menu 2',
        title: 'Starters Collection 2'
      },
      { 
        src: '/starter3.jpeg', 
        alt: 'Starter Menu 3',
        title: 'Starters Collection 3'
      },
      { 
        src: '/Starters_and_Breads.jpeg', 
        alt: 'Starters & Breads Menu',
        title: 'Starters & Breads'
      }
    ],
    mainCourse: [
      { 
        src: '/Veg_NonVeg_Main_course.jpeg', 
        alt: 'Veg & Non-Veg Main Course',
        title: 'Main Course Dishes'
      },
      { 
        src: '/soups_menu.jpeg', 
        alt: 'Soups Menu',
        title: 'Soups & Beverages'
      }
    ],
    thalis: [
      { 
        src: '/Thalis_Menu.jpeg', 
        alt: 'Traditional Thalis',
        title: 'Traditional Thali Options'
      }
    ]
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const tabs = [
    { id: 'starters', name: 'Starters', icon: '🥗' },
    { id: 'mainCourse', name: 'Main Course', icon: '🍛' },
    { id: 'thalis', name: 'Thalis', icon: '🍽️' }
  ];

  return (
    <section id="menu" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Relish our delicious dishes prepared with authentic spices and traditional recipes
          </p>
        </div>

        {/* Menu Tabs */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'bg-warm-red text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-3 text-xl">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </div>

        {/* Menu Images Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {menuImages[activeTab].map((image, index) => (
            <div key={index} className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer" onClick={() => openModal(image)}>
              <div className="relative group h-80">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <i className="bi bi-zoom-in text-3xl"></i>
                    <p className="text-sm mt-2">Click to view full size</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Menu Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-warm-yellow to-warm-orange rounded-lg p-8 shadow-lg text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2 marathi-text">
                हॉटेल मामाच्या मळा
              </h3>
              <p className="text-white/90">
                Hotel Mamacha Mala
              </p>
            </div>
            
            <p className="text-white text-lg mb-6">
              "Authentic flavors that remind you of home"
            </p>
            
            <div className="flex items-center justify-center space-x-4 mb-6">
              <a 
                href="https://www.google.com/search?q=Hotel+Mamacha+Mala+Karad+reviews&tbm=lcl&sxsrf=ALeKk03w" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
              >
                <div className="flex text-yellow-300">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-white font-medium">4.4/5 Rating</span>
                <i className="bi bi-box-arrow-up-right text-white text-sm"></i>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+917378370034" 
                className="bg-white text-warm-red px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              >
                <i className="bi bi-telephone mr-2"></i>
                Call to Order
              </a>
              <a 
                href="https://wa.me/917378370034" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
              >
                <i className="bi bi-whatsapp mr-2"></i>
                WhatsApp Order
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4 text-lg">
            Can't find what you're looking for? We also take custom orders!
          </p>
          <p className="text-gray-500 text-sm">
            Visit us at Karad, Mundhe, Maharashtra • Open Daily 11:00 AM - 4:00 PM, 7:00 PM - 11:00 PM
          </p>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl z-10 bg-black bg-opacity-70 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 hover:bg-opacity-90"
            aria-label="Close"
          >
            <i className="bi bi-x-lg"></i>
          </button>
          
          <div className="relative max-w-4xl max-h-full">
            
            {/* Modal Image */}
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl max-h-screen">
              <div className="flex justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[90vh] object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MenuSection;