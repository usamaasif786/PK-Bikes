
import Carousel_1 from '../images/carousel-1.jpg'
import Carousel_2 from '../images/carousel-2.jpg'
import Carousel_3 from '../images/carousel-3.jpg'
import Carousel_4 from '../images/carousel-4.jpg'

///////// Car Pics
import honda from "../images/honda.png"
import yamaha from "../images/yamaha.png"
import suzuki from "../images/suzuki.png"
import qingqi from "../images/qingqi.png"
import bmw from "../images/bmw.png"

////// Tire 
import tire_2 from "../images/tire-2.png"
import tire_3 from "../images/tire-3.png"

////// Accessories
import accessories_1 from "../images/accessories-1.png"
import accessories_2 from "../images/accessories-2.png"
import accessories_3 from "../images/accessories-3.png"

////// Filter
import filter_1 from "../images/filter-1.png"
import filter_2 from "../images/filter-2.png"

///////  Motor Oil 
import motoroil_1 from "../images/motoroil-1.png"
import motoroil_2 from "../images/motoroil-2.png"

/////// Bike Brakes
import bikebrakes_1 from "../images/bikebrakes-1.png"
import bikebrakes_2 from "../images/bikebrakes-2.png"
import bikebrakes_3 from "../images/bikebrakes-3.png"

////// Engine
import engine_1 from "../images/engine-1.png"
import engine_2 from "../images/engine-2.png"


// c_title (carousel title)
export const main_carousel = [
  { id: 1, c_title: 'Bycycle Tyre', description: 'Shop All Bycycle Parts', imageSrc: Carousel_1},
  { id: 2, c_title: 'Bike Tyres', description: 'Shop All Bike Parts', imageSrc: Carousel_2},
  { id: 3, c_title: 'Car Tyres', description: 'Shop All Car Parts', imageSrc: Carousel_3},  
];
// ac_title
export const all_categories = {
  tireData: [
    { id: 1, ac_title: 'Bycycle Tyre', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', imageSrc: Carousel_2, price: 299.99, rating: 3},
    { id: 2, ac_title: 'Bike Tyres', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', imageSrc: tire_2, price: 799.99, rating: 5},
    { id: 3, ac_title: 'Car Tyres', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', imageSrc: tire_3, price: 99.99, rating: 2}, 
  ],
  accessoriesData: [
    { id: 1, ac_title: 'Bycycle Accessories', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', imageSrc: accessories_1, price: 2299.99, rating: 3},
    { id: 2, ac_title: 'Bike Accessories', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', imageSrc: accessories_2, price: 7499.99, rating: 5},
    { id: 3, ac_title: 'Car Accessories', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', imageSrc: accessories_3, price: 199.99, rating: 1}, 
  ],
  filtersData: [
    { id: 1, ac_title: 'Bike Filters', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', imageSrc: filter_1, price: 299.99, rating: 2},
    { id: 2, ac_title: 'Car Filters', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', imageSrc: filter_2, price: 8799.99, rating: 4},
  ],
  motoroilData: [
    { id: 1, ac_title: 'Truck Oil', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', imageSrc: motoroil_1, price: 9999.99, rating: 5},
    { id: 2, ac_title: 'Bike Oil', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', imageSrc: motoroil_2, price: 2199.99, rating: 4},
  ],
  breaksystemData: [
    { id: 1, ac_title: 'Bycycle Break System', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', imageSrc: bikebrakes_1, price: 99.99, rating: 5},
    { id: 2, ac_title: 'Bike Break System', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', imageSrc: bikebrakes_2, price: 799.99, rating: 2},
    { id: 3, ac_title: 'Car Break System', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', imageSrc: bikebrakes_3, price: 1199.99, rating: 2}, 
  ],
  engineData: [
    { id: 2, ac_title: 'Bike Engine', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', imageSrc: engine_1, price: 699.99, rating: 5},
    { id: 3, ac_title: 'Car Engine', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', imageSrc: engine_2, price: 1299.99, rating: 5}, 
  ],
};

// p_title (product title)
export const top_selling_product = [
  { id: 1, p_title: 'Bycycle Tyre', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', price: 2100.99, imageSrc: Carousel_4},
  { id: 2, p_title: 'Bike Tyres', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', price: 200.99, imageSrc: Carousel_2},
  { id: 3, p_title: 'Car Tyres', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', price: 3300.99, imageSrc: Carousel_3},
  { id: 4, p_title: 'Heavy vehicles Tyres', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', price: 999.99, imageSrc: Carousel_4},
];

// p_images (products images)
export const p_images = [
  { id: 1, imageSrc: honda },
  { id: 2, imageSrc: suzuki },
  { id: 3, imageSrc: yamaha },
  { id: 4, imageSrc: qingqi },
  { id: 5, imageSrc: bmw },

];

// s_title (shop title)
export const top_sellers = [
  { id: 1, s_title: 'Yokohama', description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', location: 'Gulberg, Lahore', imageSrc: Carousel_3 },
  { id: 2, s_title: 'Pirelli', description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', location: 'Gulberg, Lahore', imageSrc: Carousel_2 },
  { id: 3, s_title: 'General and Hankook', description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',location: 'Gulberg, Lahore', imageSrc: Carousel_3 },
  { id: 4, s_title: 'BFGoodrich', description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',location: 'Gulberg, Lahore', imageSrc: Carousel_4 },
  { id: 5, s_title: 'Yokohama', description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', location: 'Gulberg, Lahore', imageSrc: Carousel_3 },
  { id: 6, s_title: 'Pirelli', description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', location: 'Gulberg, Lahore', imageSrc: Carousel_2 },
  { id: 7, s_title: 'General and Hankook', description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',location: 'Gulberg, Lahore', imageSrc: Carousel_3 },
  { id: 8, s_title: 'BFGoodrich', description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',location: 'Gulberg, Lahore', imageSrc: Carousel_4 },
];

export const company_owner = [
  { id: 1, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates inventore ullam quam quaerat, facere, alias autem, magnam', name: 'Usama Asif', imageSrc: bmw},
  { id: 2, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates inventore ullam quam quaerat, facere, alias autem, magnam', name: 'Saim Asif', imageSrc: honda},
  { id: 3, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates inventore ullam quam quaerat, facere, alias autem, magnam', name: 'Haris Asif', imageSrc: yamaha},
];