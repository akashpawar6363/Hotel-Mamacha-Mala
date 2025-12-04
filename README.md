# Hotel Mamacha Mala - Restaurant Website

A fully responsive, modern restaurant website built with React + Vite and Tailwind CSS.

## 🏨 About

**हॉटेल मामाच्या मळा (Hotel Mamacha Mala)** is a family-friendly restaurant serving authentic Maharashtrian and Indian cuisine. This website showcases our menu, location, and provides an easy way for customers to connect with us.

## ✨ Features

- **Fully Responsive Design** - Works perfectly on all devices
- **Modern UI/UX** - Clean, warm design with Indian restaurant aesthetics
- **Smooth Navigation** - Fixed navbar with smooth scrolling to sections
- **Interactive Menu** - Tabbed menu with categories (Starters, Main Course, Thalis)
- **Photo Gallery** - Bootstrap carousel showcasing restaurant photos
- **Google Maps Integration** - Easy location finding with embedded map
- **Social Media Integration** - Instagram links and feed preview
- **Mobile-First Approach** - Optimized for mobile devices

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + Bootstrap 5.3
- **Icons:** Bootstrap Icons
- **Fonts:** Noto Sans Devanagari (for Marathi text)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download** this project to your local machine
2. **Navigate to the project directory**
   ```bash
   cd "Hotel Mamacha Mala"
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser** and visit `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 🎨 Customization Guide

### 1. Restaurant Information
Update the following files with your actual restaurant details:

**Hotel Name & Branding:**
- Already set to "हॉटेल मामाच्या मळा" (Hotel Mamacha Mala)
- To change: Update all instances in components

**Contact Information:**
- **Phone:** Update `+91 98765 43210` in `Footer.jsx` and `LocationMap.jsx`
- **Email:** Update `info@mamachamala.com` in `Footer.jsx`
- **Address:** Update address in `Footer.jsx` and `LocationMap.jsx`

### 2. Images
Replace placeholder images with your actual photos:

**Hero Section (`Hero.jsx`):**
```javascript
backgroundImage: `url('YOUR_HERO_IMAGE_URL')`
```

**Photo Carousel (`PhotosCarousel.jsx`):**
```javascript
const photos = [
  {
    url: 'YOUR_RESTAURANT_PHOTO_1',
    alt: 'Your description',
    caption: 'Your caption'
  },
  // Add more photos...
];
```

**Menu Card Image (`MenuSection.jsx`):**
```javascript
<img src="YOUR_MENU_CARD_IMAGE_URL" alt="Menu Card" />
```

### 3. Menu Items
Update the menu in `MenuSection.jsx`:

```javascript
const menuData = {
  starters: [
    { name: 'Your Dish Name', description: 'Description', price: '₹XXX' },
    // Add your items...
  ],
  mainCourse: [
    // Your main course items...
  ],
  thalis: [
    // Your thali options...
  ]
};
```

### 4. Social Media Links
Update social media URLs in `Footer.jsx` and `AboutSection.jsx`:

```javascript
// Instagram
href="https://instagram.com/YOUR_ACTUAL_HANDLE"

// Facebook
href="https://facebook.com/YOUR_PAGE"

// WhatsApp
href="https://wa.me/YOUR_PHONE_NUMBER"
```

### 5. Google Maps
Update the map embed in `LocationMap.jsx`:

1. Go to [Google Maps](https://maps.google.com)
2. Search for your restaurant location
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL
5. Replace the placeholder URL in `LocationMap.jsx`

### 6. Instagram Feed
To add actual Instagram posts in `AboutSection.jsx`:

1. Get Instagram embed code from Instagram
2. Replace the placeholder div with actual Instagram iframe
3. Update Instagram handle and links

### 7. Operating Hours
Update opening hours in `LocationMap.jsx` and `Footer.jsx`:

```javascript
// Update with your actual hours
<span>11:00 AM - 10:00 PM</span>
```

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px  
- **Desktop:** > 1024px

## 🎯 SEO & Performance

- Semantic HTML structure
- Optimized images (use WebP format when possible)
- Fast loading with Vite
- Mobile-first responsive design
- Proper alt tags for images

## 📂 Project Structure

```
Hotel Mamacha Mala/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── Hero.jsx            # Hero section
│   │   ├── PhotosCarousel.jsx  # Image carousel
│   │   ├── MenuSection.jsx     # Menu with tabs
│   │   ├── AboutSection.jsx    # About + Instagram
│   │   ├── LocationMap.jsx     # Location + Map
│   │   └── Footer.jsx          # Footer with contact
│   ├── App.jsx                 # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html                 # HTML template
├── package.json              # Dependencies
├── tailwind.config.js        # Tailwind configuration
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## 🎨 Color Scheme

The website uses a warm, Indian restaurant-inspired color palette:

- **Primary Red:** `#DC2626` (warm-red)
- **Golden Yellow:** `#F59E0B` (warm-yellow)  
- **Brown:** `#A16207` (warm-brown)
- **Orange:** `#EA580C` (warm-orange)
- **Cream:** `#FEF7ED` (cream backgrounds)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📞 Support

If you need help customizing this website, please refer to the comments in the code files. Each section that needs customization is clearly marked with comments like:

```javascript
// Replace with your actual [information]
```

## 📄 License

This project is created for Hotel Mamacha Mala. Feel free to modify and use as needed.

---

**Made with ❤️ for authentic Maharashtrian cuisine lovers**