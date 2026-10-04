/**
 * ==========================================================================
 * AHAD MOTORS - Automotive Marketplace JavaScript Engine
 * Dynamic Search, Advanced Filtering, Sorting, Modals, Gallery,
 * Chat Simulator, Loan Calculator, Sell Ad Handler, & LocalStorage Sync
 * ==========================================================================
 */

// Initial Car Inventory Data (18 Real-Market Pakistani Dummy Listings)
const INITIAL_CARS_DATA = [
  {
    id: 1,
    name: "Toyota Corolla Altis Grande 1.8",
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    price: 6500000,
    mileage: 45000,
    engine: "1800cc",
    transmission: "Automatic",
    fuel: "Petrol",
    city: "Lahore",
    condition: "Excellent",
    owners: "1st Owner",
    accident: "No Accident",
    touchups: "Original Paint",
    color: "Super White",
    registrationCity: "Lahore",
    datePosted: "1 Day Ago",
    featured: true,
    seller: { name: "Ahad Sheikh", phone: "+92 300 1234567", verified: true },
    images: [
      "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1590362891988-3075c3258597?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=80"
    ],
    features: ["Air Conditioning", "ABS Brakes", "Airbags", "Sunroof", "Alloy Wheels", "Push Start", "Cruise Control", "Leather Seats", "Power Windows", "Power Steering", "Navigation Screen"]
  },
  {
    id: 2,
    name: "Honda Civic RS Turbo 1.5 Oriel",
    brand: "Honda",
    model: "Civic",
    year: 2021,
    price: 7200000,
    mileage: 38000,
    engine: "1500cc Turbo",
    transmission: "Automatic",
    fuel: "Petrol",
    city: "Islamabad",
    condition: "Excellent",
    owners: "1st Owner",
    accident: "No Major Accident",
    touchups: "Minor Bumper Touch-up",
    color: "Crystal Black Pearl",
    registrationCity: "Islamabad",
    datePosted: "2 Days Ago",
    featured: true,
    seller: { name: "Hamza Malik", phone: "+92 321 9876543", verified: true },
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80"
    ],
    features: ["Turbocharged Engine", "Air Conditioning", "ABS Brakes", "Airbags", "Sunroof", "Paddle Shifters", "Alloy Wheels", "Push Start", "Cruise Control", "Power Windows", "Power Steering"]
  },
  {
    id: 3,
    name: "Suzuki Alto VXR AGS",
    brand: "Suzuki",
    model: "Alto",
    year: 2023,
    price: 2900000,
    mileage: 22000,
    engine: "660cc",
    transmission: "Automatic",
    fuel: "Petrol",
    city: "Lahore",
    condition: "Excellent",
    owners: "1st Owner",
    accident: "No Accident",
    touchups: "Original Paint",
    color: "Silky Silver",
    registrationCity: "Lahore",
    datePosted: "3 Hours Ago",
    featured: false,
    seller: { name: "Zain Ali", phone: "+92 333 4455667", verified: true },
    images: [
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1000&q=80"
    ],
    features: ["Air Conditioning", "Power Steering", "ABS Brakes", "Fuel Efficient", "Central Locking", "Front Power Windows"]
  },
  {
    id: 4,
    name: "Toyota Fortuner Legender 2.8 Diesel",
    brand: "Toyota",
    model: "Fortuner",
    year: 2022,
    price: 18500000,
    mileage: 28000,
    engine: "2800cc",
    transmission: "Automatic",
    fuel: "Diesel",
    city: "Karachi",
    condition: "Excellent",
    owners: "1st Owner",
    accident: "No Accident",
    touchups: "Bumper to Bumper Original",
    color: "Attitude Black",
    registrationCity: "Sindh",
    datePosted: "Just Now",
    featured: true,
    seller: { name: "Bilal Khan", phone: "+92 301 5566778", verified: true },
    images: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80"
    ],
    features: ["4x4 Drive", "Leather Interior", "Dual Climate AC", "ABS", "7 Airbags", "Power Tailgate", "Wireless Charger", "Alloy Wheels", "Push Start", "360 Camera"]
  },
  {
    id: 5,
    name: "KIA Sportage AWD All Wheel Drive",
    brand: "KIA",
    model: "Sportage",
    year: 2022,
    price: 8200000,
    mileage: 32000,
    engine: "2000cc",
    transmission: "Automatic",
    fuel: "Petrol",
    city: "Lahore",
    condition: "Excellent",
    owners: "1st Owner",
    accident: "No Accident",
    touchups: "Original Paint",
    color: "Panthera Metal",
    registrationCity: "Punjab",
    datePosted: "4 Days Ago",
    featured: true,
    seller: { name: "Usman Raza", phone: "+92 345 1122334", verified: true },
    images: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80"
    ],
    features: ["Panoramic Sunroof", "AWD Drive Mode", "Air Conditioning", "ABS Brakes", "Airbags", "Alloy Wheels", "Power Tailgate", "Push Start", "Cruise Control"]
  },
  {
    id: 6,
    name: "Hyundai Tucson FWD GLS Sport",
    brand: "Hyundai",
    model: "Tucson",
    year: 2022,
    price: 7900000,
    mileage: 35000,
    engine: "2000cc",
    transmission: "Automatic",
    fuel: "Petrol",
    city: "Islamabad",
    condition: "Excellent",
    owners: "1st Owner",
    accident: "No Accident",
    touchups: "Original",
    color: "Polar White",
    registrationCity: "Islamabad",
    datePosted: "1 Day Ago",
    featured: true,
    seller: { name: "Tariq Mehmood", phone: "+92 312 9988776", verified: true },
    images: [
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1000&q=80"
    ],
    features: ["Panoramic Roof", "Wireless Charger", "Dual Zone AC", "ABS", "Cruise Control", "Push Start", "Electronic Parking Brake", "Alloy Rims"]
  },
  {
    id: 7,
    name: "Honda City Aspire 1.5 CVT",
    brand: "Honda",
    model: "City",
    year: 2023,
    price: 5600000,
    mileage: 18000,
    engine: "1500cc",
    transmission: "Automatic",
    fuel: "Petrol",
    city: "Rawalpindi",
    condition: "Excellent",
    owners: "1st Owner",
    accident: "No Accident",
    touchups: "Original",
    color: "Urban Titanium",
    registrationCity: "Rawalpindi",
    datePosted: "2 Days Ago",
    featured: false,
    seller: { name: "Omer Farooq", phone: "+92 322 7788990", verified: true },
    images: [
      "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80"
    ],
    features: ["Climate Control AC", "Push Start", "Alloy Wheels", "Touchscreen Screen", "ABS", "Power Windows", "Power Mirrors", "Retractable Mirrors"]
  },
  {
    id: 8,
    name: "MG HS Exclusive 1.5 Turbo Trophy Edition",
    brand: "MG",
    model: "HS",
    year: 2022,
    price: 6900000,
    mileage: 29000,
    engine: "1500cc Turbo",
    transmission: "Automatic",
    fuel: "Petrol",
    city: "Lahore",
    condition: "Excellent",
    owners: "1st Owner",
    accident: "No Accident",
    touchups: "Original Paint",
    color: "Black Pearl Red Interior",
    registrationCity: "Lahore",
    datePosted: "3 Days Ago",
    featured: true,
    seller: { name: "Fahad Mustafa", phone: "+92 300 8899001", verified: true },
    images: [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80"
    ],
    features: ["MG Pilot Safety Suite", "Trophy Red Leather", "Panoramic Sunroof", "Ambient Lighting", "360 Camera", "Lane Assist", "Heated Seats"]
  },
  {
    id: 9,
    name: "Toyota Yaris ATIV X 1.5 CVT",
    brand: "Toyota",
    model: "Yaris",
    year: 2023,
    price: 5200000,
    mileage: 15000,
    engine: "1500cc",
    transmission: "Automatic",
    fuel: "Petrol",
    city: "Faisalabad",
    condition: "Excellent",
    owners: "1st Owner",
    accident: "No Accident",
    touchups: "Original",
    color: "Super White",
    registrationCity: "Punjab",
    datePosted: "5 Days Ago",
    featured: false,
    seller: { name: "Rashid Minhas", phone: "+92 334 2233445", verified: true },
    images: [
      "https://images.unsplash.com/photo-1590362891988-3075c3258597?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?auto=format&fit=crop&w=1000&q=80"
    ],
    features: ["Eco & Sport Mode", "Automatic Climate AC", "Push Start", "TFT MID Meter", "ABS with EBD", "Alloy Wheels", "Multi-Info Display"]
  },
  {
    id: 10,
    name: "Suzuki Wagon R VXL",
    brand: "Suzuki",
    model: "Wagon R",
    year: 2021,
    price: 2450000,
    mileage: 52000,
    engine: "1000cc K-Series",
    transmission: "Manual",
    fuel: "Petrol",
    city: "Multan",
    condition: "Good",
    owners: "2nd Owner",
    accident: "No Accident",
    touchups: "Minor Fender Touch-up",
    color: "Solid White",
    registrationCity: "Multan",
    datePosted: "1 Week Ago",
    featured: false,
    seller: { name: "Kashif Saeed", phone: "+92 313 6677889", verified: false },
    images: [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80"
    ],
    features: ["Air Conditioning", "Power Windows", "Keyless Entry", "Immobilizer Key", "Fog Lamps", "Fuel Efficient"]
  },
  {
    id: 11,
    name: "Toyota Land Cruiser Prado TX Limited 2.7",
    brand: "Toyota",
    model: "Prado",
    year: 2018,
    price: 23500000,
    mileage: 68000,
    engine: "2700cc",
    transmission: "Automatic",
    fuel: "Petrol",
    city: "Peshawar",
    condition: "Excellent",
    owners: "1st Owner",
    accident: "No Accident",
    touchups: "Original",
    color: "Pearl White",
    registrationCity: "Islamabad",
    datePosted: "2 Days Ago",
    featured: true,
    seller: { name: "Khan Bahadur", phone: "+92 300 7711223", verified: true },
    images: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=80"
    ],
    features: ["Sunroof", "7 Seater", "CoolBox", "Heated Seats", "4x4 Drive", "Air Suspension", "Premium Audio", "Full Body Kit"]
  },
  {
    id: 12,
    name: "Toyota Vitz F 1.0 Package",
    brand: "Toyota",
    model: "Vitz",
    year: 2019,
    price: 3450000,
    mileage: 48000,
    engine: "1000cc",
    transmission: "Automatic",
    fuel: "Petrol",
    city: "Gujranwala",
    condition: "Good",
    owners: "1st Owner",
    accident: "No Major Accident",
    touchups: "Right Door Paint",
    color: "Wine Red",
    registrationCity: "Punjab",
    datePosted: "4 Days Ago",
    featured: false,
    seller: { name: "Nadeem Akhtar", phone: "+92 321 4433221", verified: false },
    images: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80"
    ],
    features: ["Push Start", "Auto Retract Mirrors", "Traction Control", "ABS", "Climate Control", "Alloy Wheels"]
  },
  {
    id: 13,
    name: "Changan Alsvin Lumiere 1.5 DCT",
    brand: "Changan",
    model: "Alsvin",
    year: 2022,
    price: 4350000,
    mileage: 26000,
    engine: "1500cc",
    transmission: "Automatic",
    fuel: "Petrol",
    city: "Karachi",
    condition: "Excellent",
    owners: "1st Owner",
    accident: "No Accident",
    touchups: "Original",
    color: "Space Gray",
    registrationCity: "Karachi",
    datePosted: "3 Days Ago",
    featured: false,
    seller: { name: "Adeel Siddiqui", phone: "+92 331 8877665", verified: true },
    images: [
      "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1000&q=80"
    ],
    features: ["Sunroof", "Cruise Control", "Dual Clutch Transmission", "Leatherette Seats", "Tyre Pressure Monitor", "Reverse Camera"]
  },
  {
    id: 14,
    name: "Hyundai Elantra GLS 2.0",
    brand: "Hyundai",
    model: "Elantra",
    year: 2022,
    price: 6700000,
    mileage: 31000,
    engine: "2000cc",
    transmission: "Automatic",
    fuel: "Petrol",
    city: "Lahore",
    condition: "Excellent",
    owners: "1st Owner",
    accident: "No Accident",
    touchups: "Original Paint",
    color: "Teal Blue Metallic",
    registrationCity: "Lahore",
    datePosted: "5 Days Ago",
    featured: false,
    seller: { name: "Shahbaz Gondal", phone: "+92 300 4567890", verified: true },
    images: [
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1000&q=80"
    ],
    features: ["Sunroof", "Wireless Charger", "Dual Zone AC", "Smart Trunk", "Powered Driver Seat", "Alloy Wheels", "LED Headlamps"]
  },
  {
    id: 15,
    name: "BMW 5 Series 520i M-Sport",
    brand: "BMW",
    model: "5 Series",
    year: 2021,
    price: 24500000,
    mileage: 26000,
    engine: "2000cc TwinTurbo",
    transmission: "Automatic",
    fuel: "Petrol",
    city: "Islamabad",
    condition: "Excellent",
    owners: "1st Owner",
    accident: "No Accident",
    touchups: "Bumper to Bumper Original",
    color: "Alpine White",
    registrationCity: "Islamabad",
    datePosted: "6 Days Ago",
    featured: true,
    seller: { name: "Malik Mansoor", phone: "+92 300 9991112", verified: true },
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80"
    ],
    features: ["M-Sport Aero Package", "Harman Kardon Audio", "Head-Up Display", "Adaptive LED Lights", "Nappa Leather", "Gesture Control"]
  },
  {
    id: 16,
    name: "Mercedes-Benz C-Class C200 AMG Line",
    brand: "Mercedes",
    model: "C-Class",
    year: 2020,
    price: 21000000,
    mileage: 34000,
    engine: "1500cc Turbo Mild-Hybrid",
    transmission: "Automatic",
    fuel: "Hybrid",
    city: "Lahore",
    condition: "Excellent",
    owners: "1st Owner",
    accident: "No Accident",
    touchups: "Original",
    color: "Obsidian Black",
    registrationCity: "Lahore",
    datePosted: "1 Week Ago",
    featured: false,
    seller: { name: "Ali Raza", phone: "+92 321 5556677", verified: true },
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80"
    ],
    features: ["AMG Body Styling", "Panoramic Sunroof", "Burmester Surround Sound", "Ambient 64 Colors", "Digital Cockpit", "Active Brake Assist"]
  },
  {
    id: 17,
    name: "Audi A6 1.8 TFSI S-Line Matrix",
    brand: "Audi",
    model: "A6",
    year: 2019,
    price: 17500000,
    mileage: 41000,
    engine: "1800cc Turbo",
    transmission: "Automatic",
    fuel: "Petrol",
    city: "Karachi",
    condition: "Excellent",
    owners: "1st Owner",
    accident: "No Accident",
    touchups: "Original",
    color: "Ibis White",
    registrationCity: "Sindh",
    datePosted: "3 Days Ago",
    featured: false,
    seller: { name: "Sheraz Jameel", phone: "+92 333 1122889", verified: true },
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80"
    ],
    features: ["Matrix LED Headlights", "Valcona Leather", "Bose Sound System", "Audi Drive Select", "Dual Touchscreen MMI", "Soft Close Doors"]
  },
  {
    id: 18,
    name: "Nissan Dayz Highway Star",
    brand: "Nissan",
    model: "Dayz",
    year: 2021,
    price: 3100000,
    mileage: 39000,
    engine: "660cc Turbo",
    transmission: "Automatic",
    fuel: "Petrol",
    city: "Rawalpindi",
    condition: "Good",
    owners: "1st Owner",
    accident: "No Accident",
    touchups: "Original",
    color: "Pearl Dual Tone",
    registrationCity: "Islamabad",
    datePosted: "2 Days Ago",
    featured: false,
    seller: { name: "Irfan Qureshi", phone: "+92 345 8899123", verified: true },
    images: [
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1000&q=80"
    ],
    features: ["Around View 360 Monitor", "ProPILOT Assist", "Touch Climate AC", "Push Start", "Eco Idle System", "Alloy Wheels"]
  }
];

// App State Management
let carsData = [];
let favorites = [];
let activeModalCar = null;
let currentGalleryIdx = 0;
let userSession = null;

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  initStorage();
  initHeader();
  renderFeaturedSection();
  renderBrandCards();
  renderCityCards();
  populateFilterDropdowns();
  applyFiltersAndRender();
  initCalculator();
  initChatWidget();
  initEventListeners();
});

// Storage initialization
function initStorage() {
  const storedCars = localStorage.getItem("ahad_motors_cars");
  if (storedCars) {
    try {
      carsData = JSON.parse(storedCars);
    } catch (e) {
      carsData = INITIAL_CARS_DATA;
    }
  } else {
    carsData = INITIAL_CARS_DATA;
    localStorage.setItem("ahad_motors_cars", JSON.stringify(carsData));
  }

  const storedFavs = localStorage.getItem("ahad_motors_favorites");
  if (storedFavs) {
    try {
      favorites = JSON.parse(storedFavs);
    } catch (e) {
      favorites = [];
    }
  }

  const storedUser = localStorage.getItem("ahad_motors_user");
  if (storedUser) {
    try {
      userSession = JSON.parse(storedUser);
      updateAuthUI();
    } catch (e) {
      userSession = null;
    }
  }

  updateFavoritesCounter();
}

// Format PKR Currency
function formatPKR(num) {
  if (num >= 10000000) {
    const crore = (num / 10000000).toFixed(2);
    return `PKR ${crore} Crore`;
  } else if (num >= 100000) {
    const lacs = (num / 100000).toFixed(2);
    return `PKR ${lacs} Lacs`;
  }
  return `PKR ${num.toLocaleString()}`;
}

function formatNumber(num) {
  return Number(num).toLocaleString();
}

// Navigation & Sticky Header Behavior
function initHeader() {
  const header = document.querySelector(".main-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  const hamburger = document.getElementById("hamburgerBtn");
  const drawer = document.getElementById("mobileDrawer");
  const backdrop = document.getElementById("navBackdrop");
  const closeDrawer = document.getElementById("closeDrawerBtn");

  const toggleMobileNav = (open) => {
    drawer.classList.toggle("open", open);
    backdrop.classList.toggle("open", open);
    document.body.style.overflow = open ? "hidden" : "";
  };

  if (hamburger) hamburger.addEventListener("click", () => toggleMobileNav(true));
  if (closeDrawer) closeDrawer.addEventListener("click", () => toggleMobileNav(false));
  if (backdrop) backdrop.addEventListener("click", () => toggleMobileNav(false));

  document.querySelectorAll(".mobile-nav-links .nav-link").forEach(link => {
    link.addEventListener("click", () => toggleMobileNav(false));
  });
}

// Populate Brands Grid
function renderBrandCards() {
  const container = document.getElementById("brandsGrid");
  if (!container) return;

  const brands = [
    { name: "Toyota", icon: "fa-car-side" },
    { name: "Honda", icon: "fa-car" },
    { name: "Suzuki", icon: "fa-truck-pickup" },
    { name: "KIA", icon: "fa-shield-halved" },
    { name: "Hyundai", icon: "fa-gauge-high" },
    { name: "MG", icon: "fa-bolt" },
    { name: "Nissan", icon: "fa-sun" },
    { name: "Changan", icon: "fa-star" },
    { name: "BMW", icon: "fa-gem" },
    { name: "Mercedes", icon: "fa-crown" },
    { name: "Audi", icon: "fa-ring" }
  ];

  container.innerHTML = brands.map(b => `
    <div class="brand-card" data-brand="${b.name}" onclick="filterByBrand('${b.name}')">
      <div class="brand-icon-box"><i class="fa-solid ${b.icon}"></i></div>
      <div class="brand-name">${b.name}</div>
    </div>
  `).join("");
}

// Populate Cities Grid
function renderCityCards() {
  const container = document.getElementById("citiesGrid");
  if (!container) return;

  const cities = [
    { name: "Lahore", icon: "fa-archway" },
    { name: "Karachi", icon: "fa-water" },
    { name: "Islamabad", icon: "fa-mountain-sun" },
    { name: "Rawalpindi", icon: "fa-city" },
    { name: "Faisalabad", icon: "fa-industry" },
    { name: "Multan", icon: "fa-mosque" },
    { name: "Peshawar", icon: "fa-monument" },
    { name: "Gujranwala", icon: "fa-dumbbell" }
  ];

  container.innerHTML = cities.map(c => {
    const count = carsData.filter(car => car.city.toLowerCase() === c.name.toLowerCase()).length;
    return `
      <div class="city-card" onclick="filterByCity('${c.name}')">
        <div class="city-icon"><i class="fa-solid ${c.icon}"></i></div>
        <div class="city-info">
          <h4>${c.name}</h4>
          <span>${count} Active Ads</span>
        </div>
      </div>
    `;
  }).join("");
}

// Populate Filter Options
function populateFilterDropdowns() {
  const brandSelect = document.getElementById("filterBrand");
  const heroMakeSelect = document.getElementById("heroMake");
  const citySelect = document.getElementById("filterCity");
  const heroCitySelect = document.getElementById("heroCity");

  if (!brandSelect) return;

  const brands = [...new Set(carsData.map(c => c.brand))].sort();
  const cities = ["Lahore", "Karachi", "Islamabad", "Rawalpindi", "Faisalabad", "Multan", "Peshawar", "Gujranwala"];

  brands.forEach(b => {
    brandSelect.innerHTML += `<option value="${b}">${b}</option>`;
    if (heroMakeSelect) heroMakeSelect.innerHTML += `<option value="${b}">${b}</option>`;
  });

  cities.forEach(c => {
    citySelect.innerHTML += `<option value="${c}">${c}</option>`;
    if (heroCitySelect) heroCitySelect.innerHTML += `<option value="${c}">${c}</option>`;
  });
}

// Render Featured Cars
function renderFeaturedSection() {
  const container = document.getElementById("featuredGrid");
  if (!container) return;

  const featuredCars = carsData.filter(c => c.featured).slice(0, 6);
  container.innerHTML = featuredCars.map(car => createCarCardHTML(car)).join("");
}

// Car Card HTML Template
function createCarCardHTML(car) {
  const isFav = favorites.includes(car.id);
  return `
    <div class="car-card" data-id="${car.id}">
      <div class="car-card-img-wrap">
        <img src="${car.images[0]}" alt="${car.name}" class="car-card-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80'">
        <div class="car-card-badges">
          ${car.featured ? `<span class="badge badge-featured"><i class="fa-solid fa-crown"></i> Featured</span>` : ""}
          <span class="badge badge-condition"><i class="fa-solid fa-shield-check"></i> ${car.condition}</span>
        </div>
        <button class="fav-btn ${isFav ? "active" : ""}" onclick="toggleFavorite(${car.id}, event)" title="Save to Favorites" aria-label="Add to favorites">
          <i class="${isFav ? "fa-solid" : "fa-regular"} fa-heart"></i>
        </button>
      </div>
      <div class="car-card-body">
        <h3 class="car-card-title" title="${car.name}">${car.name}</h3>
        <div class="car-card-price">${formatPKR(car.price)}</div>
        
        <div class="car-specs-grid">
          <div class="car-spec-item"><i class="fa-solid fa-calendar"></i> ${car.year}</div>
          <div class="car-spec-item"><i class="fa-solid fa-road"></i> ${formatNumber(car.mileage)} km</div>
          <div class="car-spec-item"><i class="fa-solid fa-gas-pump"></i> ${car.fuel}</div>
          <div class="car-spec-item"><i class="fa-solid fa-gear"></i> ${car.transmission}</div>
        </div>

        <div class="car-card-footer">
          <div class="car-card-loc"><i class="fa-solid fa-location-dot"></i> ${car.city}</div>
          <button class="btn btn-sm btn-outline" onclick="openCarDetailModal(${car.id})">
            View Details <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

// Search & Filter Execution
function applyFiltersAndRender() {
  const searchInput = document.getElementById("navSearchInput")?.value.trim().toLowerCase() || 
                      document.getElementById("filterKeyword")?.value.trim().toLowerCase() || "";
  const brand = document.getElementById("filterBrand")?.value || "";
  const city = document.getElementById("filterCity")?.value || "";
  const fuel = document.getElementById("filterFuel")?.value || "";
  const transmission = document.getElementById("filterTransmission")?.value || "";
  const condition = document.getElementById("filterCondition")?.value || "";
  const minPrice = parseFloat(document.getElementById("filterMinPrice")?.value) || 0;
  const maxPrice = parseFloat(document.getElementById("filterMaxPrice")?.value) || Infinity;
  const minYear = parseFloat(document.getElementById("filterMinYear")?.value) || 0;
  const sortBy = document.getElementById("sortSelector")?.value || "default";
  const favoritesOnly = document.getElementById("filterFavoritesOnly")?.checked || false;

  let filtered = carsData.filter(car => {
    // Keyword match across name, brand, model, city, engine
    if (searchInput) {
      const matchText = `${car.name} ${car.brand} ${car.model} ${car.city} ${car.engine}`.toLowerCase();
      if (!matchText.includes(searchInput)) return false;
    }

    // Brand filter
    if (brand && car.brand.toLowerCase() !== brand.toLowerCase()) return false;

    // City filter
    if (city && car.city.toLowerCase() !== city.toLowerCase()) return false;

    // Fuel filter
    if (fuel && car.fuel.toLowerCase() !== fuel.toLowerCase()) return false;

    // Transmission
    if (transmission && car.transmission.toLowerCase() !== transmission.toLowerCase()) return false;

    // Condition
    if (condition && car.condition.toLowerCase() !== condition.toLowerCase()) return false;

    // Price range
    if (car.price < minPrice || car.price > maxPrice) return false;

    // Min Year
    if (minYear && car.year < minYear) return false;

    // Favorites only
    if (favoritesOnly && !favorites.includes(car.id)) return false;

    return true;
  });

  // Sorting
  if (sortBy === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === "year-desc") {
    filtered.sort((a, b) => b.year - a.year);
  } else if (sortBy === "mileage-asc") {
    filtered.sort((a, b) => a.mileage - b.mileage);
  }

  // Render into main marketplace grid
  const marketplaceGrid = document.getElementById("marketplaceGrid");
  const countDisplay = document.getElementById("resultsCountDisplay");

  if (countDisplay) {
    countDisplay.innerHTML = `Showing <span>${filtered.length}</span> ${filtered.length === 1 ? "Car" : "Cars"} Available`;
  }

  if (marketplaceGrid) {
    if (filtered.length === 0) {
      marketplaceGrid.innerHTML = `
        <div class="no-results-box">
          <i class="fa-solid fa-car-tunnel"></i>
          <h4>No cars found matching your criteria</h4>
          <p>Try resetting filters, searching for a different brand, or relaxing price parameters.</p>
          <button class="btn btn-primary btn-sm" onclick="resetAllFilters()">Reset All Filters</button>
        </div>
      `;
    } else {
      marketplaceGrid.innerHTML = filtered.map(car => createCarCardHTML(car)).join("");
    }
  }

  // Render Latest Car Ads Section (Top 4 most recent)
  const latestGrid = document.getElementById("latestAdsGrid");
  if (latestGrid) {
    const latestCars = [...carsData].slice(0, 4);
    latestGrid.innerHTML = latestCars.map(car => createCarCardHTML(car)).join("");
  }
}

// Reset All Filters
function resetAllFilters() {
  const form = document.getElementById("filterForm");
  if (form) form.reset();
  const navSearch = document.getElementById("navSearchInput");
  if (navSearch) navSearch.value = "";
  const favCheck = document.getElementById("filterFavoritesOnly");
  if (favCheck) favCheck.checked = false;
  
  // Clear brand card active states
  document.querySelectorAll(".brand-card").forEach(c => c.classList.remove("active"));
  document.querySelectorAll(".city-card").forEach(c => c.classList.remove("active"));

  applyFiltersAndRender();
  showToast("Filters have been reset");
}

// Filter by clicking on Brand Card
function filterByBrand(brandName) {
  const brandSelect = document.getElementById("filterBrand");
  if (brandSelect) {
    brandSelect.value = brandName;
  }
  document.querySelectorAll(".brand-card").forEach(card => {
    card.classList.toggle("active", card.dataset.brand === brandName);
  });
  applyFiltersAndRender();
  scrollToMarketplace();
}

// Filter by clicking on City Card
function filterByCity(cityName) {
  const citySelect = document.getElementById("filterCity");
  if (citySelect) {
    citySelect.value = cityName;
  }
  applyFiltersAndRender();
  scrollToMarketplace();
}

function scrollToMarketplace() {
  const section = document.getElementById("buy-cars");
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Hero Search Handler
function handleHeroSearch(e) {
  if (e) e.preventDefault();
  const heroMake = document.getElementById("heroMake")?.value || "";
  const heroCity = document.getElementById("heroCity")?.value || "";
  const heroPrice = document.getElementById("heroPriceRange")?.value || "";

  if (heroMake) {
    const filterBrand = document.getElementById("filterBrand");
    if (filterBrand) filterBrand.value = heroMake;
  }
  if (heroCity) {
    const filterCity = document.getElementById("filterCity");
    if (filterCity) filterCity.value = heroCity;
  }
  if (heroPrice) {
    const [min, max] = heroPrice.split("-").map(Number);
    const filterMin = document.getElementById("filterMinPrice");
    const filterMax = document.getElementById("filterMaxPrice");
    if (filterMin && min) filterMin.value = min;
    if (filterMax && max) filterMax.value = max;
  }

  applyFiltersAndRender();
  scrollToMarketplace();
}

// Favorites Management
function toggleFavorite(carId, event) {
  if (event) event.stopPropagation();
  const index = favorites.indexOf(carId);
  if (index > -1) {
    favorites.splice(index, 1);
    showToast("Car removed from favorites");
  } else {
    favorites.push(carId);
    showToast("❤️ Car added to favorites!");
  }

  localStorage.setItem("ahad_motors_favorites", JSON.stringify(favorites));
  updateFavoritesCounter();
  
  // Re-render cards without losing filter position
  applyFiltersAndRender();
  renderFeaturedSection();
}

function updateFavoritesCounter() {
  const counters = document.querySelectorAll(".fav-counter");
  counters.forEach(c => {
    c.textContent = favorites.length;
  });
}

function showFavoritesOnly() {
  const favCheck = document.getElementById("filterFavoritesOnly");
  if (favCheck) {
    favCheck.checked = true;
    applyFiltersAndRender();
    scrollToMarketplace();
    showToast(`Displaying ${favorites.length} saved favorites`);
  }
}

// Car Detail Modal & Image Gallery
function openCarDetailModal(carId) {
  const car = carsData.find(c => c.id === carId);
  if (!car) return;

  activeModalCar = car;
  currentGalleryIdx = 0;

  const modal = document.getElementById("carDetailModal");
  const modalBody = document.getElementById("carDetailModalBody");

  modalBody.innerHTML = `
    <div class="modal-detail-layout">
      <!-- Gallery Column -->
      <div class="detail-gallery">
        <div class="main-gallery-view">
          <img id="mainGalleryImg" src="${car.images[0]}" alt="${car.name}" class="main-gallery-img">
          ${car.images.length > 1 ? `
            <button class="gallery-ctrl-btn gallery-prev" onclick="stepGallery(-1)"><i class="fa-solid fa-chevron-left"></i></button>
            <button class="gallery-ctrl-btn gallery-next" onclick="stepGallery(1)"><i class="fa-solid fa-chevron-right"></i></button>
          ` : ""}
        </div>
        <div class="gallery-thumbnails" id="galleryThumbs">
          ${car.images.map((img, idx) => `
            <div class="thumb-item ${idx === 0 ? "active" : ""}" onclick="setGalleryImage(${idx})">
              <img src="${img}" alt="${car.name} thumbnail ${idx + 1}">
            </div>
          `).join("")}
        </div>

        <div style="margin-top: 1rem; padding: 1rem; background: var(--bg-alt); border-radius: var(--radius-md);">
          <h4 style="font-size: 0.95rem; font-weight: 800; margin-bottom: 0.5rem; color: var(--secondary);">
            <i class="fa-solid fa-user-shield" style="color: var(--primary);"></i> Seller Information
          </h4>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>
              <p style="font-weight: 700; color: var(--secondary);">${car.seller.name} ${car.seller.verified ? `<span class="badge badge-verified"><i class="fa-solid fa-check"></i> Verified</span>` : ""}</p>
              <p style="font-size: 0.85rem; color: var(--text-muted);">${car.seller.phone}</p>
            </div>
            <div style="display: flex; gap: 0.5rem;">
              <button class="btn btn-sm btn-primary" onclick="openChatModal(${car.id})">
                <i class="fa-solid fa-comments"></i> Chat
              </button>
              <a href="https://wa.me/923001234567?text=Hi,%20I%20am%20interested%20in%20your%20car%20listing:%20${encodeURIComponent(car.name)}" target="_blank" class="btn btn-sm" style="background:#25d366; color:#fff;">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Specs & Overview Column -->
      <div class="detail-info-pane">
        <span class="section-tag" style="align-self: flex-start;">${car.brand} • ${car.model}</span>
        <h2 class="detail-header-title">${car.name}</h2>
        <div class="detail-header-price">${formatPKR(car.price)}</div>

        <table class="detail-spec-table">
          <tr><td><i class="fa-solid fa-calendar"></i> Year</td><td>${car.year}</td></tr>
          <tr><td><i class="fa-solid fa-road"></i> Mileage</td><td>${formatNumber(car.mileage)} KM</td></tr>
          <tr><td><i class="fa-solid fa-engine"></i> Engine Displacement</td><td>${car.engine}</td></tr>
          <tr><td><i class="fa-solid fa-gear"></i> Transmission</td><td>${car.transmission}</td></tr>
          <tr><td><i class="fa-solid fa-gas-pump"></i> Fuel Type</td><td>${car.fuel}</td></tr>
          <tr><td><i class="fa-solid fa-palette"></i> Exterior Color</td><td>${car.color}</td></tr>
          <tr><td><i class="fa-solid fa-location-dot"></i> Registered City</td><td>${car.registrationCity}</td></tr>
          <tr><td><i class="fa-solid fa-user-check"></i> Ownership</td><td>${car.owners}</td></tr>
          <tr><td><i class="fa-solid fa-car-burst"></i> Accident History</td><td>${car.accident}</td></tr>
          <tr><td><i class="fa-solid fa-spray-can"></i> Body Condition / Touch-ups</td><td>${car.touchups}</td></tr>
          <tr><td><i class="fa-solid fa-gauge"></i> Overall Condition</td><td><strong>${car.condition}</strong></td></tr>
        </table>

        <h4 style="font-size: 0.95rem; font-weight: 800; color: var(--secondary);">Key Vehicle Features:</h4>
        <div class="feature-pill-wrap">
          ${car.features.map(f => `<span class="feature-pill"><i class="fa-solid fa-check"></i> ${f}</span>`).join("")}
        </div>

        <div class="detail-action-buttons">
          <button class="btn btn-primary" onclick="openChatModal(${car.id})">
            <i class="fa-solid fa-comments"></i> Chat With Seller
          </button>
          <a href="tel:${car.seller.phone.replace(/\\s+/g, '')}" class="btn btn-secondary">
            <i class="fa-solid fa-phone"></i> Call Seller
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function setGalleryImage(index) {
  if (!activeModalCar) return;
  currentGalleryIdx = index;
  const mainImg = document.getElementById("mainGalleryImg");
  if (mainImg) mainImg.src = activeModalCar.images[index];

  const thumbs = document.querySelectorAll("#galleryThumbs .thumb-item");
  thumbs.forEach((t, idx) => t.classList.toggle("active", idx === index));
}

function stepGallery(direction) {
  if (!activeModalCar) return;
  const total = activeModalCar.images.length;
  currentGalleryIdx = (currentGalleryIdx + direction + total) % total;
  setGalleryImage(currentGalleryIdx);
}

function closeModals() {
  document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
  document.body.style.overflow = "";
}

// Chat With Seller Simulator
function openChatModal(carId) {
  const car = carsData.find(c => c.id === carId) || activeModalCar;
  if (!car) return;

  const chatModal = document.getElementById("chatModal");
  const chatTitle = document.getElementById("chatCarTitle");
  const chatSellerName = document.getElementById("chatSellerName");
  const messagesBox = document.getElementById("chatMessagesBody");

  if (chatTitle) chatTitle.textContent = car.name;
  if (chatSellerName) chatSellerName.textContent = `Seller: ${car.seller.name}`;

  // Initial greeting
  if (messagesBox) {
    messagesBox.innerHTML = `
      <div class="chat-bubble seller">
        Assalam-o-Alaikum! Thanks for inquiring about my <strong>${car.name}</strong> (${car.year}). The car is available for inspection in ${car.city}. How can I help you today?
      </div>
    `;
  }

  closeModals();
  if (chatModal) {
    chatModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function sendChatMessage(text) {
  const input = document.getElementById("chatInput");
  const message = text || input?.value.trim();
  if (!message) return;

  const messagesBox = document.getElementById("chatMessagesBody");
  if (!messagesBox) return;

  // Append user message
  messagesBox.innerHTML += `
    <div class="chat-bubble buyer">${message}</div>
  `;
  if (input) input.value = "";
  messagesBox.scrollTop = messagesBox.scrollHeight;

  // Simulate seller smart reply
  setTimeout(() => {
    let reply = "Yes, sure! You are welcome to visit and inspect the vehicle in person. Please feel free to call or WhatsApp me to schedule a test drive.";
    if (message.toLowerCase().includes("available")) {
      reply = "Yes, the vehicle is 100% available and all original documents/smart card are in hand.";
    } else if (message.toLowerCase().includes("price") || message.toLowerCase().includes("final") || message.toLowerCase().includes("discount")) {
      reply = "The price is slightly negotiable on spot after physical inspection. What is your offer?";
    } else if (message.toLowerCase().includes("inspect") || message.toLowerCase().includes("test drive")) {
      reply = "Certainly! You can bring your trusted mechanic anytime between 10:00 AM and 8:00 PM.";
    }

    messagesBox.innerHTML += `
      <div class="chat-bubble seller">${reply}</div>
    `;
    messagesBox.scrollTop = messagesBox.scrollHeight;
  }, 900);
}

// "Sell Your Car" Ad Submission
function handleSellCarSubmit(e) {
  e.preventDefault();
  const form = document.getElementById("sellCarForm");
  if (!form) return;

  const make = document.getElementById("sellMake").value;
  const model = document.getElementById("sellModel").value;
  const year = parseInt(document.getElementById("sellYear").value);
  const price = parseFloat(document.getElementById("sellPrice").value);
  const mileage = parseInt(document.getElementById("sellMileage").value);
  const city = document.getElementById("sellCity").value;
  const fuel = document.getElementById("sellFuel").value;
  const transmission = document.getElementById("sellTransmission").value;
  const condition = document.getElementById("sellCondition").value;
  const owners = document.getElementById("sellOwners").value;
  const accident = document.getElementById("sellAccident").value;
  const touchups = document.getElementById("sellTouchups").value;
  const engine = document.getElementById("sellEngine").value || "1500cc";
  const sellerName = document.getElementById("sellName").value;
  const sellerPhone = document.getElementById("sellPhone").value;

  const newCar = {
    id: Date.now(),
    name: `${year} ${make} ${model}`,
    brand: make,
    model: model,
    year: year,
    price: price,
    mileage: mileage,
    engine: engine,
    transmission: transmission,
    fuel: fuel,
    city: city,
    condition: condition,
    owners: owners,
    accident: accident,
    touchups: touchups,
    color: "Customer Specified",
    registrationCity: city,
    datePosted: "Just Now",
    featured: false,
    seller: { name: sellerName, phone: sellerPhone, verified: true },
    images: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?auto=format&fit=crop&w=1000&q=80"
    ],
    features: ["Air Conditioning", "ABS Brakes", "Airbags", "Power Windows", "Power Steering", "Verified Documents"]
  };

  carsData.unshift(newCar);
  localStorage.setItem("ahad_motors_cars", JSON.stringify(carsData));

  form.reset();
  closeModals();
  applyFiltersAndRender();
  renderCityCards();

  showToast("🎉 Your car advertisement has been submitted successfully!");
  scrollToMarketplace();
}

// Authentication Modal (Login / Signup)
function toggleAuthTab(tab) {
  const loginForm = document.getElementById("loginFormTab");
  const signupForm = document.getElementById("signupFormTab");
  const loginTabBtn = document.getElementById("loginTabBtn");
  const signupTabBtn = document.getElementById("signupTabBtn");

  if (tab === "login") {
    loginForm.style.display = "flex";
    signupForm.style.display = "none";
    loginTabBtn.classList.add("active");
    signupTabBtn.classList.remove("active");
  } else {
    loginForm.style.display = "none";
    signupForm.style.display = "flex";
    signupTabBtn.classList.add("active");
    loginTabBtn.classList.remove("active");
  }
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  userSession = { name: email.split("@")[0], email: email };
  localStorage.setItem("ahad_motors_user", JSON.stringify(userSession));
  updateAuthUI();
  closeModals();
  showToast(`Welcome back, ${userSession.name}!`);
}

function handleSignupSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  userSession = { name: name, email: email };
  localStorage.setItem("ahad_motors_user", JSON.stringify(userSession));
  updateAuthUI();
  closeModals();
  showToast(`Account created successfully! Welcome to AHAD MOTORS, ${name}`);
}

function handleLogout() {
  userSession = null;
  localStorage.removeItem("ahad_motors_user");
  updateAuthUI();
  showToast("You have been signed out.");
}

function updateAuthUI() {
  const authContainer = document.getElementById("navAuthContainer");
  if (!authContainer) return;

  if (userSession) {
    authContainer.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <span style="font-weight: 700; font-size: 0.9rem; color: var(--secondary);"><i class="fa-solid fa-circle-user" style="color: var(--primary);"></i> ${userSession.name}</span>
        <button class="btn btn-sm btn-outline" onclick="handleLogout()" title="Logout"><i class="fa-solid fa-arrow-right-from-bracket"></i></button>
      </div>
    `;
  } else {
    authContainer.innerHTML = `
      <button class="btn btn-sm btn-outline" onclick="openAuthModal('login')">
        <i class="fa-regular fa-user"></i> Login
      </button>
    `;
  }
}

function openAuthModal(defaultTab = "login") {
  const modal = document.getElementById("authModal");
  if (modal) {
    toggleAuthTab(defaultTab);
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function openSellModal() {
  const modal = document.getElementById("sellCarModal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

// Auto Loan / EMI Calculator
function initCalculator() {
  const priceInput = document.getElementById("loanCarPrice");
  const downInput = document.getElementById("loanDownPayment");
  const tenureInput = document.getElementById("loanTenure");
  const rateInput = document.getElementById("loanInterestRate");

  const updateCalc = () => {
    const price = parseFloat(priceInput?.value) || 5000000;
    const downPercent = parseFloat(downInput?.value) || 20;
    const tenureYears = parseFloat(tenureInput?.value) || 3;
    const interestRate = parseFloat(rateInput?.value) || 16;

    const downAmount = (price * downPercent) / 100;
    const principal = price - downAmount;
    const monthlyRate = (interestRate / 100) / 12;
    const totalMonths = tenureYears * 12;

    // Monthly EMI formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
    const totalPayment = emi * totalMonths;
    const totalInterest = totalPayment - principal;

    document.getElementById("calcPriceLabel").textContent = `PKR ${price.toLocaleString()}`;
    document.getElementById("calcDownLabel").textContent = `${downPercent}% (PKR ${Math.round(downAmount).toLocaleString()})`;
    document.getElementById("calcTenureLabel").textContent = `${tenureYears} Years (${totalMonths} Months)`;
    document.getElementById("calcRateLabel").textContent = `${interestRate}% KIBOR`;

    document.getElementById("calcMonthlyEMI").textContent = `PKR ${Math.round(emi).toLocaleString()}`;
    document.getElementById("calcTotalInterest").textContent = `PKR ${Math.round(totalInterest).toLocaleString()}`;
    document.getElementById("calcFinancedAmount").textContent = `PKR ${Math.round(principal).toLocaleString()}`;
  };

  [priceInput, downInput, tenureInput, rateInput].forEach(elem => {
    if (elem) elem.addEventListener("input", updateCalc);
  });

  updateCalc();
}

// Chat UI Controls
function initChatWidget() {
  const chatInput = document.getElementById("chatInput");
  if (chatInput) {
    chatInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendChatMessage();
      }
    });
  }
}

// Toast Notifications System
function showToast(message) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-circle-info" style="color: var(--primary);"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 50);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Global Event Listeners
function initEventListeners() {
  // Live search input in navigation & hero
  const navSearch = document.getElementById("navSearchInput");
  if (navSearch) {
    navSearch.addEventListener("input", () => {
      applyFiltersAndRender();
    });
  }

  // Filter form elements
  const filterInputs = ["filterBrand", "filterCity", "filterFuel", "filterTransmission", "filterCondition", "filterMinPrice", "filterMaxPrice", "filterMinYear", "sortSelector", "filterFavoritesOnly"];
  filterInputs.forEach(id => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.addEventListener("change", applyFiltersAndRender);
      if (elem.type === "number") elem.addEventListener("input", applyFiltersAndRender);
    }
  });

  // Modal Backdrop Click to Close
  document.querySelectorAll(".modal-overlay").forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModals();
    });
  });

  // Keyboard navigation for gallery & modal close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModals();
    if (e.key === "ArrowLeft" && activeModalCar) stepGallery(-1);
    if (e.key === "ArrowRight" && activeModalCar) stepGallery(1);
  });
}
