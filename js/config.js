/**
 * =========================================================================
 * CONFIG.JS - WEBSITE REBRANDING CONFIGURATION & ENGINE
 * =========================================================================
 * 
 * INSTRUCTIONS:
 * 1. Modify Section 1 (Data Entry) to update branding, styles, images, and content.
 * 2. Include this script at the end of index.html after index.js:
 *    
 * =========================================================================
 */

/* =========================================================================
   SECTION 1: DATA ENTRY CONFIGURATION
   ========================================================================= */
const REBRAND_CONFIG = {
  // --- BRAND IDENTIFICATION & META DATA ---
  brand: {
    name: "PARALLEL CAFE",
    suffix: ".",
    tagline: "Cozy Cafe, Games & Good Vibes",
    description: "Parallel Cafe in Jayanagar, Bengaluru offering specialty coffee, delicious bakes, game rooms, private screening rooms, and Jain & Regular options.",
    keywords: "Parallel Cafe, Jayanagar cafe, Bengaluru cafes, specialty coffee, Korean bun, Tiramisu Affogato, Jain food, board games cafe",
    themeColor: "#0d0e12",
    domain: "https://www.swiggy.com/city/bangalore/parallel-cafe-jayanagar-rest1379143",
    ogImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk9F7x4tb-HUxjMRezOYRWOJb89dP7qJSJDktPsL2BGahZRoiCiDbz8Lf1s79h5WpVZHAMPXx013vlRG5hY9cgUC2VEmCeijrRA53KNa8M8Lxc2EUOeAZNx_xQO6ZOkkvQR5gslgbA4qk0=w141-h177-n-k-no-nu",
    faviconEmoji: "☕",
    whatsappNumber: "919000000000"
  },

  // --- GLOBAL STYLES & THEMING ---
  styles: {
    colors: {
      bg: "#0d0e12",
      bgCard: "#15181e",
      bgLight: "#1c2028",
      primary: "#d4a373",
      primaryHover: "#faedcd",
      text: "#e0e2ec",
      textMuted: "#9aa0b4",
      accent: "#2c313c"
    },
    fonts: {
      heading: "'Syne', sans-serif",
      body: "'Plus Jakarta Sans', sans-serif"
    }
  },

  // --- HERO SECTION ---
  hero: {
    subtitle: "Welcome to Parallel Cafe",
    title: "Chill, Play & Indulge in Great Food",
    description: "Your ultimate hangout spot in Jayanagar with cozy game rooms, private screening spaces, artisan coffee, and extensive Jain & Regular menu options.",
    bgImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk9F7x4tb-HUxjMRezOYRWOJb89dP7qJSJDktPsL2BGahZRoiCiDbz8Lf1s79h5WpVZHAMPXx013vlRG5hY9cgUC2VEmCeijrRA53KNa8M8Lxc2EUOeAZNx_xQO6ZOkkvQR5gslgbA4qk0=w141-h177-n-k-no-nu",
    stats: [
      { value: "100%", label: "Jain & Regular Options" },
      { value: "10 am-11:30 pm", label: "Open Daily" },
      { value: "5.0 ★", label: "Loved by Guests" }
    ]
  },

  // --- ABOUT US SECTION ---
  about: {
    subtitle: "About Us",
    title: "More Than Just a Cafe Experience",
    paragraphs: [
      "Parallel Cafe is designed as a vibrant, warm, and cozy sanctuary in Jayanagar, Bengaluru. We serve an array of freshly crafted coffees, mocktails, continental bites, and delicious desserts with strict attention to both Jain and Regular culinary preferences.",
      "Whether you're stopping by for our famous Korean Buns and Tiramisu Affogato, playing board games with friends, or booking our private screening room for celebrations, Parallel Cafe offers the perfect vibe every day."
    ],
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkAquZjqjeT5SuKBwarK3xjvT6fksxtBoQxEGqgvXVcy8k3Ljh64tdEKpQCNzAyQm_0VbKiWuB0UAsuHbuoj6r6jQRNjT9uWjOqoG1KulyQ6Zl-K0Xhb7Uo_VcbploN7fc-SrfDyEqYF24m=w141-h142-n-k-no-nu",
    imageAlt: "Ambiance and seating area inside Parallel Cafe",
    experienceValue: "100%",
    experienceLabel: "Good Vibes Guaranteed"
  },

  // --- SPECIALS / NEWLY ADDED FOOD ---
  specials: {
    subtitle: "Parallel Specials",
    title: "House Signature Creations",
    badge: "Must Try",
    description: "Handcrafted signatures designed to give you a unique flavor experience.",
    items: [
      {
        badge: "Chef's Special",
        img: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&q=80&w=600",
        alt: "Tiramisu Jumbo Affogato",
        diet: "veg",
        title: "Tiramisu Jumbo Affogato",
        price: "₹450",
        desc: "Rich espresso poured over creamy tiramisu ice cream for a heavenly coffee dessert experience."
      },
      {
        badge: "Bestseller",
        img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80&w=600",
        alt: "Chipotle Korean Bun",
        diet: "veg",
        title: "Chipotle Korean Bun",
        price: "₹130",
        desc: "Freshly baked Korean soft bun packed with rich cream cheese and chipotle seasoning."
      },
      {
        badge: "Customer Favorite",
        img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=600",
        alt: "The Sand Dune Cold Coffee",
        diet: "veg",
        title: "The Sand Dune",
        price: "₹320",
        desc: "Signature espresso topped with velvety vanilla caramel cold foam."
      }
    ]
  },

  // --- OFFERS SECTION ---
  offers: {
    subtitle: "Special Deals",
    title: "Cafe Offers & Perks",
    items: [
      {
        tag: "PARTY & EVENTS",
        title: "Private Screening Room",
        desc: "Book our cozy private screening and game room for birthdays & celebrations with customized decorations.",
        code: "PARALLELEVENT",
        highlight: true
      },
      {
        tag: "DELIVERY",
        title: "Order Online via Swiggy",
        desc: "Get your favorite Parallel Cafe bakes, coffees, and snacks delivered directly to your doorstep.",
        code: "SWIGGYPARALLEL",
        highlight: false
      },
      {
        tag: "JAIN SPECIALS",
        title: "100% Jain Friendly Options",
        desc: "Enjoy our full range of dishes prepared separately to cater to strict Jain dietary requirements.",
        code: "JAINCARE",
        highlight: false
      }
    ]
  },

  // --- FEATURED MENU SECTION ---
  menu: {
    subtitle: "Our Full Menu",
    title: "Delicious Bites & Brews",
    pdfUrl: "assets/parallel-cafe-menu.pdf",
    pdfFilename: "Parallel_Cafe_Menu.pdf",
    categories: [
      { id: "all", label: "All Items", active: true },
      { id: "mini_marvels", label: "Mini Marvels", active: false },
      { id: "hot_coffees", label: "Hot Coffees", active: false },
      { id: "cold_coffees", label: "Cold Coffees", active: false },
      { id: "starters", label: "Starters & Snacks", active: false },
      { id: "pasta_pizza", label: "Pasta & Pizza", active: false },
      { id: "sandwiches", label: "Sandwiches", active: false },
      { id: "specials", label: "Parallel Specials", active: false },
      { id: "bakery_desserts", label: "Bakery & Desserts", active: false }
    ],
    items: [
      // Mini Marvels
      {
        category: "mini_marvels",
        img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80&w=600",
        title: "Chipotle Korean Bun",
        price: "₹130",
        diet: "veg",
        desc: "Soft baked bun filled with rich cream cheese and flavored with savory chipotle spice.",
        swiggyUrl: "https://www.swiggy.com/city/bangalore/parallel-cafe-jayanagar-rest1379143",
        zomatoUrl: "https://www.zomato.com"
      },
      {
        category: "mini_marvels",
        img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=600",
        title: "Cheese Korean Bun",
        price: "₹99",
        diet: "veg",
        desc: "Classic buttery Korean garlic cheese bun overflowing with rich cream cheese.",
        swiggyUrl: "https://www.swiggy.com/city/bangalore/parallel-cafe-jayanagar-rest1379143",
        zomatoUrl: "https://www.zomato.com"
      },
      {
        category: "mini_marvels",
        img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=600",
        title: "Farm Fresh Sandwich",
        price: "₹99",
        diet: "veg",
        desc: "Fresh garden vegetables with light seasoning grilled to perfection.",
        swiggyUrl: "https://www.swiggy.com/city/bangalore/parallel-cafe-jayanagar-rest1379143",
        zomatoUrl: "https://www.zomato.com"
      },
      {
        category: "mini_marvels",
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=600",
        title: "Mini Garlic Pop Slider Burger",
        price: "₹99",
        diet: "veg",
        desc: "Mini slider burger packed with garlic pops and signature cafe sauces.",
        swiggyUrl: "https://www.swiggy.com/city/bangalore/parallel-cafe-jayanagar-rest1379143",
        zomatoUrl: "https://www.zomato.com"
      },

      // Hot Coffees
      {
        category: "hot_coffees",
        img: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=600",
        title: "Flat White",
        price: "₹210",
        diet: "veg",
        desc: "Smooth double shot of espresso blended with microfoam steam milk.",
        swiggyUrl: "https://www.swiggy.com/city/bangalore/parallel-cafe-jayanagar-rest1379143",
        zomatoUrl: "https://www.zomato.com"
      },
      {
        category: "hot_coffees",
        img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=600",
        title: "Cappuccino",
        price: "₹210",
        diet: "veg",
        desc: "Rich espresso topped with a thick layer of frothed hot milk foam.",
        swiggyUrl: "https://www.swiggy.com/city/bangalore/parallel-cafe-jayanagar-rest1379143",
        zomatoUrl: "https://www.zomato.com"
      },
      {
        category: "hot_coffees",
        img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600",
        title: "Cortado",
        price: "₹180",
        diet: "veg",
        desc: "Balanced mix of espresso cut with an equal amount of warm milk.",
        swiggyUrl: "https://www.swiggy.com/city/bangalore/parallel-cafe-jayanagar-rest1379143",
        zomatoUrl: "https://www.zomato.com"
      },
      {
        category: "hot_coffees",
        img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600",
        title: "Hazelnut Hot Coffee",
        price: "₹250",
        diet: "veg",
        desc: "Aromatic brewed espresso infused with smooth roasted hazelnut flavor.",
        swiggyUrl: "https://www.swiggy.com/city/bangalore/parallel-cafe-jayanagar-rest1379143",
        zomatoUrl: "https://www.zomato.com"
      },

      // Cold Coffees
      {
        category: "cold_coffees",
        img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600",
        title: "Vietnamese Cold Coffee",
        price: "₹280",
        diet: "veg",
        desc: "Traditional slow-drip coffee sweetened with condensed milk over ice.",
        swiggyUrl: "https://www.swiggy.com/city/bangalore/parallel-cafe-jayanagar-rest1379143",
        zomatoUrl: "https://www.zomato.com"
      },
      {
        category: "cold_coffees",
        img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=600",
        title: "Cold Brew",
        price: "₹250",
        diet: "veg",
        desc: "Steeped for 18 hours for a ultra-smooth, low-acid coffee taste.",
        swiggyUrl: "https://www.swiggy.com/city/bangalore/parallel-cafe-jayanagar-rest1379143",
        zomatoUrl: "https://www.zomato.com"
      },
      {
        category: "cold_coffees",
        img: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&q=80&w=600",
        title: "Iced Peach Americano",
        price: "₹250",
        diet: "veg",
        desc: "Refreshing shot of espresso layered over chilled peach juice and ice.",
        swiggyUrl: "https://www.swiggy.com/city/bangalore/parallel-cafe-jayanagar-rest1379143",
        zomatoUrl: "https://www.zomato.com"
      },

      // Starters & Snacks
      {
        category: "starters",
        img: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&q=80&w=600",
        title: "Cheesy Chaos Nachos",
        price: "₹280",
        diet: "veg",
        desc: "Crispy tortilla chips smothered in melted cheese sauce and jalapenos.",
        swiggyUrl: "https://www.swiggy.com/city/bangalore/parallel-cafe-jayanagar-rest1379143",
        zomatoUrl: "https://www.zomato.com"
      },
      {
        category: "starters",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSmhISwI8oS65YDBNP21R0WEaZgv83xX9T9hTWRjGvg&s=10",
        title: "Peri Peri French Fries",
        price: "₹199",
        diet: "veg",
        desc: "Golden crispy fries tossed in fiery peri peri spice mix.",
        swiggyUrl: "https://www.swiggy.com/city/bangalore/parallel-cafe-jayanagar-rest1379143",
        zomatoUrl: "https://www.zomato.com"
      },
      {
        category: "starters",
        img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=600",
        title: "Paneer Chili",
        price: "₹250",
        diet: "veg",
        desc: "Paneer cubes tossed with soy sauce, bell peppers, green chilies, and onions.",
        swiggyUrl: "https://www.swiggy.com/city/bangalore/parallel-cafe-jayanagar-rest1379143",
        zomatoUrl: "https://www.zomato.com"
      },

      // Pasta & Pizza
      {
        category: "pasta_pizza",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlubuY2XiaWGm6jgRiXDyWlFBhO55oLXrKd1Q2BuXCFQ&s=10",
        title: "Pesto Pasta",
        price: "₹320",
        diet: "veg",
        desc: "Pasta tossed in fresh homemade basil pesto, olive oil, and parmesan.",
        swiggyUrl: "https://www.swiggy.com/city/bangalore/parallel-cafe-jayanagar-rest1379143",
        zomatoUrl: "https://www.zomato.com"
      },
      {
        category: "pasta_pizza",
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600",
        title: "Focaccia Paneer Trick Pizza",
        price: "₹500",
        diet: "veg",
        desc: "Artisanal focaccia base loaded with spiced paneer, veggies, and mozzarella.",
        swiggyUrl: "https://www.swiggy.com/city/bangalore/parallel-cafe-jayanagar-rest1379143",
        zomatoUrl: "https://www.zomato.com"
      },

      // Sandwiches
      {
        category: "sandwiches",
        img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=600",
        title: "Focaccia Paneer Blast",
        price: "₹350",
        diet: "veg",
        desc: "Thick slice focaccia bread stuffed with marinated paneer and house sauce.",
        swiggyUrl: "https://www.swiggy.com/city/bangalore/parallel-cafe-jayanagar-rest1379143",
        zomatoUrl: "https://www.zomato.com"
      },
      {
        category: "sandwiches",
        img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80&w=600",
        title: "Panini Grill Paneer",
        price: "₹280",
        diet: "veg",
        desc: "Pressed Italian panini pressed filled with cottage cheese, herbs, and spices.",
        swiggyUrl: "https://www.swiggy.com/city/bangalore/parallel-cafe-jayanagar-rest1379143",
        zomatoUrl: "https://www.zomato.com"
      },

      // Parallel Specials
      {
        category: "specials",
        img: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&q=80&w=600",
        title: "Tiramisu Jumbo Affogato",
        price: "₹450",
        diet: "veg",
        desc: "Decadent dessert-coffee hybrid with rich espresso poured over tiramisu gelato.",
        swiggyUrl: "https://www.swiggy.com/city/bangalore/parallel-cafe-jayanagar-rest1379143",
        zomatoUrl: "https://www.zomato.com"
      },
      {
        category: "specials",
        img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=600",
        title: "Chocolate Therapy",
        price: "₹280",
        diet: "veg",
        desc: "Luxurious blend of melted chocolate and creamy goodness.",
        swiggyUrl: "https://www.swiggy.com/city/bangalore/parallel-cafe-jayanagar-rest1379143",
        zomatoUrl: "https://www.zomato.com"
      },

      // Bakery & Desserts
      {
        category: "bakery_desserts",
        img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=600",
        title: "Creamy Tiramisu Cake",
        price: "₹199",
        diet: "veg",
        desc: "Creamy mascarpone tiramisu cake layered with coffee-soaked sponge.",
        swiggyUrl: "https://www.swiggy.com/city/bangalore/parallel-cafe-jayanagar-rest1379143",
        zomatoUrl: "https://www.zomato.com"
      },
      {
        category: "bakery_desserts",
        img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=600",
        title: "Biscoff Cheesecake",
        price: "₹350",
        diet: "veg",
        desc: "Rich cheesecake infused with Lotus Biscoff spread and cookie crust.",
        swiggyUrl: "https://www.swiggy.com/city/bangalore/parallel-cafe-jayanagar-rest1379143",
        zomatoUrl: "https://www.zomato.com"
      }
    ]
  },

  // --- REVIEWS & TESTIMONIALS ---
  reviews: {
    subtitle: "Testimonials",
    title: "What Our Guests Say",
    items: [
      {
        stars: 5,
        text: "\"Loved the experience at this cafe! The food was delicious, and I especially appreciated the wide variety of pure Jain options. The ambience is warm, cosy, and perfect for spending quality time with friends and family. What made the experience even more fun was the interesting collection of board games—we had a great time playing and enjoying ourselves. Definitely a lovely place for good food, great vibes, and lots of fun!\"",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
        name: "Hitanshi Jain",
        role: "Local Guide"
      },
      {
        stars: 5,
        text: "\"This cafe is such a vibe. Loved it. 😍 Food is great. I have tried Korean bun, surely will explore more the next time. It also has a cozy game room and a private screening room. I came to know that we can book these rooms for celebrations like birthday, etc. They can also arrange decoration.\"",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100",
        name: "ram rams",
        role: "Local Guide"
      },
      {
        stars: 5,
        text: "\"Really loved the food and overall experience at Parallel Café. Great place to chill with friends, and the Tiramisu Affogato was definitely my favourite\"",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
        name: "Ruthu Bhardwaj",
        role: "Local Guide"
      }
    ],
    googleCta: {
      title: "Loved your time at Parallel Cafe?",
      desc: "Share your experience with us on Google Maps!",
      url: "https://maps.google.com/?q=Parallel+Cafe+Jayanagar+Bengaluru"
    }
  },

  // --- GALLERY SECTION ---
  gallery: {
    subtitle: "Visual Experience",
    title: "Life Inside Parallel Cafe",
    images: [
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmfs00r4mCYdRiwT7B-mXZNbepJGK--pMY1is9iYB0VQU77C6Pd1pNwzXvScWXcoc0z3mQ17LnHKpjw0sBt6i-Ty2X1EszzUQAYZNchxpAZ5uDZX-7V6sMcVNBhYA124RRX92f9_HuOTKGG=w141-h177-n-k-no-nu", alt: "Parallel Cafe Cozy Seating & Decor" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm2FlgoZRK__PT9njnRLPYKsIIGqBjnGYOAHEiotJoyHPhubvWVax318SqlMlCHM1m2qJvGtaiEb3oaDOCDkqc5BeAAU48kS34M0cmkfKxLuT3PmF0MDcDdBRDxe_kmeyWanoFLPa2Tau94=w141-h177-n-k-no-nu", alt: "Specialty Coffee & Beverages at Parallel Cafe" },
      { src: "https://lh3.googleusercontent.com/proxy/RjuVkoHJABrYdOhNX-WUbpLURwXhKNdSIKBD8obIOsSN0EMFDt49cwn_34T7So8cxY4BkxapC8uVhfL4_x85v5MgU4_YVys21n0ZLW-gSw7te5zaRP2RfREY0B6thXMUjSayzOKuhpcovhJSwtLSeH4BtI_oOw=w160-h143-k-no", alt: "Fresh Bakes and Desserts" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmXgypBa5X9KzTs1MEvktLDZKOibA1NsgWFJDrGEIk3pZyL4nVuHWoU-rGjaaCxt7v1X6_e2t8i2nPi1Cypr2VN4bWVcX9ZNfZxj6KHroppJJEEUThVDftolbJ7BcBlHc0_EfxcXrvjhMdi=w141-h118-n-k-no-nu", alt: "Cozy Ambiance at Parallel Cafe Jayanagar" }
    ]
  },

  // --- LOCATION & CONTACT SECTION ---
  location: {
    subtitle: "Locations & Hours",
    title: "Visit Parallel Cafe",
    description: "Located in the heart of Jayanagar, Bengaluru. Join us for coffee, delicious food, board games, or book our private screening room.",
    address: "Ground Floor, 2006/A 26th Main, South, E End E Main Rd, Jayanagara 9th Block, Bengaluru, Karnataka 560041",
    hours: [
      "Monday - Sunday: 10:00 AM - 11:30 PM"
    ],
    email: "contact@parallelcafe.in",
    phone: "+91 90000 00000",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8872!2d77.5925!3d12.9185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150822bf20d1%3A0x7d6f582c0a96ef8e!2sJayanagar%209th%20Block%2C%20Bengaluru%2C%20Karnataka%20560041!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
  },

  // --- FOOTER SECTION ---
  footer: {
    description: "A cozy hangout space in Jayanagar serving delicious food, coffee, board games, and private screening experiences.",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/parallelcafeblr?stkn=MWV6eHEwMG5xNzE5bA==", iconClass: "ph-instagram-logo" },
      { platform: "swiggy", url: "https://www.swiggy.com/city/bangalore/parallel-cafe-jayanagar-rest1379143", iconClass: "ph-shopping-bag" }
    ],
    copyright: "© 2026 Parallel Cafe. All rights reserved."
  },

  // --- WI-FI MODAL SETTINGS ---
  wifi: {
    ssid: "Parallel_Cafe_Guest",
    password: "parallelvibes"
  }
};

/* =========================================================================
   SECTION 2: REBRANDING ENGINE CODE
   ========================================================================= */
(function initRebrandingEngine(cfg) {
  'use strict';

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element|null}
   */
  const $ = (selector, ctx = document) => ctx.querySelector(selector);

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element[]}
   */
  const $$ = (selector, ctx = document) => Array.from(ctx.querySelectorAll(selector));

  function applyStyles() {
    const root = document.documentElement;
    if (cfg.styles?.colors) {
      if (cfg.styles.colors.bg) root.style.setProperty('--color-bg', cfg.styles.colors.bg);
      if (cfg.styles.colors.bgCard) root.style.setProperty('--color-bg-card', cfg.styles.colors.bgCard);
      if (cfg.styles.colors.bgLight) root.style.setProperty('--color-bg-light', cfg.styles.colors.bgLight);
      if (cfg.styles.colors.primary) root.style.setProperty('--color-primary', cfg.styles.colors.primary);
      if (cfg.styles.colors.primaryHover) root.style.setProperty('--color-primary-hover', cfg.styles.colors.primaryHover);
      if (cfg.styles.colors.text) root.style.setProperty('--color-text', cfg.styles.colors.text);
      if (cfg.styles.colors.textMuted) root.style.setProperty('--color-text-muted', cfg.styles.colors.textMuted);
      if (cfg.styles.colors.accent) root.style.setProperty('--color-accent', cfg.styles.colors.accent);
    }
    if (cfg.styles?.fonts) {
      if (cfg.styles.fonts.heading) root.style.setProperty('--font-heading', cfg.styles.fonts.heading);
      if (cfg.styles.fonts.body) root.style.setProperty('--font-body', cfg.styles.fonts.body);
    }
  }

  function applyMeta() {
    if (!cfg.brand) return;
    
    const fullTitle = `${cfg.brand.name} | ${cfg.brand.tagline}`;
    document.title = fullTitle;

    /**
     * @param {string} selector
     * @param {string} content
     */
    const setMeta = (selector, content) => {
      const el = $(selector);
      if (el) el.setAttribute('content', content);
    };

    setMeta('meta[name="title"]', fullTitle);
    setMeta('meta[name="description"]', cfg.brand.description);
    setMeta('meta[name="keywords"]', cfg.brand.keywords);
    setMeta('meta[name="theme-color"]', cfg.brand.themeColor);

    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', cfg.brand.description);
    setMeta('meta[property="og:image"]', cfg.brand.ogImage);
    setMeta('meta[property="og:url"]', cfg.brand.domain);
    setMeta('meta[property="og:site_name"]', `${cfg.brand.name} Cafe`);

    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', cfg.brand.description);
    setMeta('meta[name="twitter:image"]', cfg.brand.ogImage);
    setMeta('meta[name="twitter:url"]', cfg.brand.domain);

    const favicon = $('link[rel="icon"]');
    if (favicon && cfg.brand.faviconEmoji) {
      favicon.setAttribute('href', `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${cfg.brand.faviconEmoji}</text></svg>`);
    }

    const schemaScript = $('script[type="application/ld+json"]');
    if (schemaScript) {
      try {
        const schemaData = JSON.parse(schemaScript.textContent);
        schemaData.name = `${cfg.brand.name} ${cfg.brand.tagline}`;
        schemaData.image = cfg.brand.ogImage;
        schemaData.url = cfg.brand.domain;
        schemaData["@id"] = cfg.brand.domain;
        if (cfg.location) {
          schemaData.telephone = cfg.location.phone;
        }
        schemaScript.textContent = JSON.stringify(schemaData, null, 2);
      } catch (err) {
        console.warn("Failed to update JSON-LD schema:", err);
      }
    }
  }

  function applyBrandLogos() {
    $$('.logo').forEach(logoEl => {
      if (logoEl.childNodes.length > 0) {
        logoEl.childNodes[0].nodeValue = cfg.brand.name;
      } else {
        logoEl.textContent = cfg.brand.name;
      }
      let span = $('span', logoEl);
      if (!span && cfg.brand.suffix) {
        span = document.createElement('span');
        logoEl.appendChild(span);
      }
      if (span) span.textContent = cfg.brand.suffix;
      logoEl.setAttribute('aria-label', `${cfg.brand.name} Home`);
    });
  }

  function applyHero() {
    if (!cfg.hero) return;
    const heroSec = $('#home');
    if (heroSec && cfg.hero.bgImage) {
      heroSec.style.background = `linear-gradient(to right, rgba(13,14,18,0.95), rgba(13,14,18,0.6)), url('${cfg.hero.bgImage}') center/cover no-repeat`;
    }
    
    const sub = $('.hero-content .section-subtitle');
    if (sub) sub.textContent = cfg.hero.subtitle;
    
    const title = $('.hero-title');
    if (title) title.textContent = cfg.hero.title;
    
    const desc = $('.hero-description');
    if (desc) desc.textContent = cfg.hero.description;

    const statsContainer = $('.hero-stats');
    if (statsContainer && cfg.hero.stats) {
      statsContainer.innerHTML = cfg.hero.stats.map(s => `
        <div class="stat-item">
          <p class="stat-value">${s.value}</p>
          <p class="stat-label">${s.label}</p>
        </div>
      `).join('');
    }
  }

  function applyAbout() {
    if (!cfg.about) return;
    const aboutSec = $('#about');
    if (!aboutSec) return;

    const img = $('.about-img', aboutSec);
    if (img) {
      img.src = cfg.about.image;
      img.alt = cfg.about.imageAlt;
    }

    const badge = $('.about-experience-badge', aboutSec);
    if (badge) {
      badge.innerHTML = `
        <div style="font-size: 1.8rem; line-height: 1;">${cfg.about.experienceValue}</div>
        <div style="font-size: 0.8rem;">${cfg.about.experienceLabel}</div>
      `;
    }

    const sub = $('.section-subtitle', aboutSec);
    if (sub) sub.textContent = cfg.about.subtitle;

    const title = $('.section-title', aboutSec);     if (title) title.textContent = cfg.about.title;      const textMuted = $$('.text-muted', aboutSec);
    if (cfg.about.paragraphs && cfg.about.paragraphs.length >= 2) {
      if (textMuted[0]) textMuted[0].textContent = cfg.about.paragraphs[0];
      if (textMuted[1]) textMuted[1].textContent = cfg.about.paragraphs[1];
    }
  }

  function applySpecials() {
    if (!cfg.specials) return;
    const specSec = $('#new-food');
    if (!specSec) return;

    const sub = $('.section-subtitle', specSec);
    if (sub) sub.textContent = cfg.specials.subtitle;

    const title = $('.section-title', specSec);
    if (title) {
      title.innerHTML = `${cfg.specials.title} <span class="badge-new">${cfg.specials.badge}</span>`;
    }

    const desc = $('.text-muted', specSec);
    if (desc) desc.textContent = cfg.specials.description;

    const grid = $('.new-items-grid', specSec);
    if (grid && cfg.specials.items) {
      grid.innerHTML = cfg.specials.items.map(item => `
        <article class="new-food-card">
          <div class="new-food-img-wrapper">
            <span class="new-food-badge">${item.badge}</span>
            <img src="${item.img}" alt="${item.alt}" loading="lazy" decoding="async">
          </div>
          <div class="new-food-content">
            <div class="new-food-header">
              <h3 class="new-food-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="new-food-price">${item.price}</span>
            </div>
            <p class="new-food-desc">${item.desc}</p>
            <a href="#location" class="btn btn-outline btn-compact">Order Fresh</a>
          </div>
        </article>
      `).join('');
    }
  }

  function applyOffers() {
    if (!cfg.offers) return;
    const offerSec = $('#offers');
    if (!offerSec) return;

    const sub = $('.section-subtitle', offerSec);
    if (sub) sub.textContent = cfg.offers.subtitle;

    const title = $('.section-title', offerSec);
    if (title) title.textContent = cfg.offers.title;

    const grid = $('.offers-grid', offerSec);
    if (grid && cfg.offers.items) {
      grid.innerHTML = cfg.offers.items.map(o => `
        <div class="offer-card ${o.highlight ? 'highlight-offer' : ''}">
          <div class="offer-tag">${o.tag}</div>
          <h3 class="offer-title">${o.title}</h3>
          <p class="offer-desc">${o.desc}</p>
          <div class="offer-code-wrapper">
            <span>Code: <strong>${o.code}</strong></span>
          </div>
        </div>
      `).join('');
    }
  }

  function applyMenu() {
    if (!cfg.menu) return;
    const menuSec = $('#menu');
    if (!menuSec) return;

    const sub = $('.section-subtitle', menuSec);
    if (sub) sub.textContent = cfg.menu.subtitle;

    const title = $('.section-title', menuSec);
    if (title) title.textContent = cfg.menu.title;

    const dlBtn = $('.btn-download-menu', menuSec);
    if (dlBtn) {
      dlBtn.setAttribute('href', cfg.menu.pdfUrl);
      dlBtn.setAttribute('download', cfg.menu.pdfFilename);
    }

    const catContainer = $('.category-filter-container', menuSec);
    if (catContainer && cfg.menu.categories) {
      catContainer.innerHTML = cfg.menu.categories.map(c => `
        <button class="category-btn ${c.active ? 'active' : ''}" role="tab" aria-selected="${c.active}" aria-controls="menu-grid" data-filter="${c.id}">${c.label}</button>
      `).join('');
    }

    const menuGrid = $('#menu-grid');
    if (menuGrid && cfg.menu.items) {
      menuGrid.innerHTML = cfg.menu.items.map(item => `
        <article class="food-card" data-category="${item.category}">
          <div class="food-card-img-wrapper">
            <img src="${item.img}" alt="${item.title}" loading="lazy" decoding="async">
          </div>
          <div class="food-card-body">
            <div class="food-card-header">
              <h3 class="food-card-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="food-card-price">${item.price}</span>
            </div>
            <p class="food-card-desc">${item.desc}</p>
            <div class="food-card-actions">
              <a href="${item.swiggyUrl}" target="_blank" rel="noopener" class="btn btn-order btn-swiggy">Order with Swiggy</a>
              <a href="${item.zomatoUrl}" target="_blank" rel="noopener" class="btn btn-order btn-zomato">Order with Zomato</a>
              <button type="button" class="btn btn-order btn-whatsapp order-wa-btn" data-item-name="${item.title}" data-item-price="${item.price}">Order via WhatsApp</button>
            </div>
          </div>
        </article>
      `).join('');
    }
  }

  function applyReviews() {
    if (!cfg.reviews) return;
    const revSec = $('#reviews');
    if (!revSec) return;

    const sub = $('.section-subtitle', revSec);
    if (sub) sub.textContent = cfg.reviews.subtitle;

    const title = $('.section-title', revSec);
    if (title) title.textContent = cfg.reviews.title;

    const grid = $('.reviews-grid', revSec);
    if (grid && cfg.reviews.items) {
      grid.innerHTML = cfg.reviews.items.map(r => `
        <figure class="review-card">
          <blockquote class="review-text">
            <div class="review-stars" aria-label="Rating: ${r.stars} out of 5 stars">
              ${Array(r.stars).fill('<i class="ph-fill ph-star" aria-hidden="true"></i>').join('')}
            </div>
            <p>${r.text}</p>
          </blockquote>
          <figcaption class="reviewer-info">
            <img src="${r.avatar}" alt="${r.name}" class="reviewer-avatar" loading="lazy" decoding="async">
            <div>
              <span class="reviewer-name">${r.name}</span>
              <span class="reviewer-role">${r.role}</span>
            </div>
          </figcaption>
        </figure>
      `).join('');
    }

    if (cfg.reviews.googleCta) {
      const ctaTitle = $('.cta-title', revSec);
      if (ctaTitle) ctaTitle.textContent = cfg.reviews.googleCta.title;

      const ctaDesc = $('.cta-desc', revSec);
      if (ctaDesc) ctaDesc.textContent = cfg.reviews.googleCta.desc;

      const ctaBtn = $('.btn-google-review', revSec);
      if (ctaBtn) ctaBtn.setAttribute('href', cfg.reviews.googleCta.url);
    }
  }

  function applyGallery() {
    if (!cfg.gallery) return;
    const galSec = $('#gallery');
    if (!galSec) return;

    const sub = $('.section-subtitle', galSec);
    if (sub) sub.textContent = cfg.gallery.subtitle;

    const title = $('.section-title', galSec);
    if (title) title.textContent = cfg.gallery.title;

    const grid = $('.gallery-grid', galSec);
    if (grid && cfg.gallery.images) {
      grid.innerHTML = cfg.gallery.images.map(img => `
        <button type="button" class="gallery-item" aria-label="Expand image: ${img.alt}">
          <img src="${img.src}" alt="${img.alt}" loading="lazy" decoding="async">
          <span class="gallery-overlay"><i class="ph ph-arrows-out-simple" aria-hidden="true"></i></span>
        </button>
      `).join('');
    }
  }

  function applyLocation() {
    if (!cfg.location) return;
    const locSec = $('#location');
    if (!locSec) return;

    const sub = $('.section-subtitle', locSec);
    if (sub) sub.textContent = cfg.location.subtitle;

    const title = $('.section-title', locSec);
    if (title) title.textContent = cfg.location.title;

    const desc = $('.text-muted', locSec);     if (desc) desc.textContent = cfg.location.description;      const infoItems = $$('.info-item', locSec);
    if (infoItems.length >= 3) {
      const addrText = $('.text-muted', infoItems[0]);       if (addrText) addrText.textContent = cfg.location.address;        const hoursContainer = infoItems[1];       if (hoursContainer && cfg.location.hours) {         const lines = $$('.text-muted', hoursContainer);
        cfg.location.hours.forEach((h, idx) => {
          if (lines[idx]) lines[idx].textContent = h;
        });
      }

      const contactText = $('.text-muted', infoItems[2]);
      if (contactText) contactText.textContent = `${cfg.location.email} | ${cfg.location.phone}`;
    }

    const mapIframe = $('iframe', locSec);
    if (mapIframe && cfg.location.mapEmbedUrl) {
      mapIframe.src = cfg.location.mapEmbedUrl;
    }
  }

  function applyFooter() {
    if (!cfg.footer) return;
    const foot = $('.footer');
    if (!foot) return;

    const desc = $('.footer-desc', foot);
    if (desc) desc.textContent = cfg.footer.description;

    const socialContainer = $('.social-links', foot);
    if (socialContainer && cfg.footer.socials) {
      socialContainer.innerHTML = cfg.footer.socials.map(s => `
        <a href="${s.url}" class="social-icon" aria-label="${s.platform}" target="_blank" rel="noopener">
          <i class="ph ${s.iconClass}" aria-hidden="true"></i>
        </a>
      `).join('');
    }

    const copy = $('.footer-bottom p', foot);
    if (copy) copy.textContent = cfg.footer.copyright;
  }

  function applyWifiModal() {
    if (!cfg.wifi) return;
    const wifiModal = $('#wifi-modal');
    if (!wifiModal) return;

    const qrImg = $('.wifi-qr-img', wifiModal);
    if (qrImg) {
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=WIFI:S:${cfg.wifi.ssid};T:WPA;P:${cfg.wifi.password};;`;
    }

    const values = $$('.wifi-value', wifiModal);
    if (values[0]) values[0].textContent = cfg.wifi.ssid;
    if (values[1]) values[1].textContent = cfg.wifi.password;
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyStyles();
    applyMeta();
    applyBrandLogos();
    applyHero();
    applyAbout();
    applySpecials();
    applyOffers();
    applyMenu();
    applyReviews();
    applyGallery();
    applyLocation();
    applyFooter();
    applyWifiModal();
  });
})(REBRAND_CONFIG);
