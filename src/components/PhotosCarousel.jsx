import React from 'react';

const PhotosCarousel = () => {
  const photos = [
    {
      id: 1,
      url: '/hotelphoto7.webp',
      alt: 'Hotel Mamacha Mala Photo 1'
    },
    {
      id: 2,
      url: '/hotelphoto1.jpeg',
      alt: 'Hotel Mamacha Mala Photo 1'
    },
    {
      id: 3,
      url: '/hotelphoto2.jpeg',
      alt: 'Hotel Mamacha Mala Photo 2'
    },
    {
      id: 4,
      url: '/hotelphoto3.jpeg',
      alt: 'Hotel Mamacha Mala Photo 3'
    },
    {
      id: 5,
      url: '/hotelphoto4.jpeg',
      alt: 'Hotel Mamacha Mala Photo 4'
    },
    {
      id: 6,
      url: '/hotelphoto5.webp',
      alt: 'Hotel Mamacha Mala Photo 5'
    }
  ];

  return (
    <section id="photos" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Restaurant
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a glimpse into our warm and inviting restaurant where traditional flavors meet modern comfort
          </p>
        </div>

        {/* Bootstrap Carousel */}
        <div id="restaurantCarousel" className="carousel slide" data-bs-ride="carousel">
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {photos.map((photo, index) => (
              <button
                key={photo.id}
                type="button"
                data-bs-target="#restaurantCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Carousel Inner */}
          <div className="carousel-inner rounded-lg shadow-lg overflow-hidden">
            {photos.map((photo, index) => (
              <div key={photo.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img
                  src={photo.url}
                  className="d-block w-100"
                  alt={photo.alt}
                  style={{ height: '600px', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#restaurantCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#restaurantCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Photo Grid for smaller screens alternative view */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:hidden">
          {photos.map((photo) => (
            <div key={photo.id} className="aspect-square overflow-hidden rounded-lg">
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotosCarousel;