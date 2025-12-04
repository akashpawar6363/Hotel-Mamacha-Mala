import React from 'react';

const LocationMap = () => {
  return (
    <section id="location" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Visit Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find us easily and come experience the authentic flavors of Maharashtra
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Location Details */}
          <div className="space-y-8">
            {/* Address Card */}
            <div className="bg-cream rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <i className="bi bi-geo-alt-fill text-warm-red mr-3 text-xl"></i>
                Our Address
              </h3>
              <div className="text-gray-700 space-y-2">
                <p className="font-medium">Hotel Mamacha Mala</p>
                <p>Karad, Mundhe</p>
                <p>Maharashtra 415124</p>
                <p>India</p>
              </div>
            </div>

            {/* Contact Hours */}
            <div className="bg-cream rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <i className="bi bi-clock-fill text-warm-red mr-3 text-xl"></i>
                Opening Hours
              </h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Sunday</span>
                  <span className="font-medium">Open Daily</span>
                </div>
                <div className="flex justify-between">
                  <span>Lunch Hours</span>
                  <span className="font-medium">11:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Dinner Hours</span>
                  <span className="font-medium">7:00 PM - 11:00 PM</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-warm-yellow/20 rounded-lg">
                <p className="text-sm text-warm-brown">
                  <i className="bi bi-info-circle mr-2"></i>
                  We're open all days of the week including holidays!
                </p>
              </div>
            </div>



            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+917378370034" 
                className="btn-warm flex-1 flex items-center justify-center"
              >
                <i className="bi bi-telephone mr-2"></i>
                Call for Directions
              </a>
              <a 
                href="https://wa.me/917378370034" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex-1 flex items-center justify-center"
              >
                <i className="bi bi-whatsapp mr-2"></i>
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-warm-red text-white p-4">
                <h3 className="font-semibold flex items-center">
                  <i className="bi bi-map mr-2"></i>
                  Find Us on Map
                </h3>
              </div>
              
              {/* Replace this src with your actual Google Maps embed URL */}
              {/* To get the embed URL: Go to Google Maps > Search your location > Click Share > Embed a map > Copy HTML */}
              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.245655620113!2d74.1611125746252!3d17.30369260521187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1830069d12141%3A0xcfc82fe1b075c05!2sHotel%20Mamacha%20Mala!5e0!3m2!1sen!2sin!4v1764854568221!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hotel Mamacha Mala Location"
                ></iframe>
              </div>
              
              <div className="p-4 bg-white">
                <p className="text-sm text-gray-600 mb-3">
                  Click on the map to get directions from your current location
                </p>
                <a 
                  href="https://maps.google.com/?q=Hotel+Mamacha+Mala+Karad+Mundhe+Maharashtra" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-warm-red hover:text-warm-brown font-medium text-sm"
                >
                  Open in Google Maps
                  <i className="bi bi-arrow-up-right-square ml-2"></i>
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 bg-gradient-to-r from-warm-yellow to-warm-orange rounded-lg p-6 text-white">
              <h4 className="font-semibold mb-2">Need Help Finding Us?</h4>
              <p className="text-sm mb-4">
                Call us and our team will guide you to our location. We're always happy to help!
              </p>
              <div className="flex items-center space-y-1 flex-col">
                <div className="flex items-center">
                  <i className="bi bi-telephone-fill mr-2"></i>
                  <span className="font-medium">+91 73783 70034</span>
                </div>
                <div className="flex items-center">
                  <i className="bi bi-telephone-fill mr-2"></i>
                  <span className="font-medium">+91 97647 97077</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;