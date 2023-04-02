
import Carousel_1 from '../images/carousel-1.jpg'
import Carousel_2 from '../images/carousel-2.jpg'
import Carousel_3 from '../images/carousel-3.jpg'
import Carousel_4 from '../images/carousel-4.jpg'
import honda from "../images/honda.png"
import yamaha from "../images/yamaha.png"
import suzuki from "../images/suzuki.png"
import qingqi from "../images/qingqi.png"
import bmw from "../images/bmw.png"

// c_title (carousel title)
export const main_carousel = [
  { id: 1, c_title: 'Bycycle Tyre', description: 'Shop All Bycycle Parts', imageSrc: Carousel_1},
  { id: 2, c_title: 'Bike Tyres', description: 'Shop All Bike Parts', imageSrc: Carousel_2},
  { id: 3, c_title: 'Car Tyres', description: 'Shop All Car Parts', imageSrc: Carousel_3},  
];
// ac_title
export const all_categories = {
  tireData: [
    { id: 1, ac_title: 'Bycycle Tyre', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', imageSrc: Carousel_3, price: 299.99, rating: 3},
    { id: 2, ac_title: 'Bike Tyres', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', imageSrc: Carousel_2, price: 799.99, rating: 5},
    { id: 3, ac_title: 'Car Tyres', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', imageSrc: Carousel_4, price: 99.99, rating: 2}, 
  ],
  accessoriesData: [
    { id: 1, ac_title: 'Bycycle Accessories', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', imageSrc: Carousel_3, price: 2299.99, rating: 3},
    { id: 2, ac_title: 'Bike Accessories', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', imageSrc: Carousel_2, price: 7499.99, rating: 5},
    { id: 3, ac_title: 'Car Accessories', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', imageSrc: Carousel_4, price: 199.99, rating: 1}, 
  ],
  filtersData: [
    { id: 1, ac_title: 'Bycycle Filters', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', imageSrc: Carousel_3, price: 299.99, rating: 2},
    { id: 2, ac_title: 'Bike Filters', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', imageSrc: Carousel_2, price: 8799.99, rating: 4},
    { id: 3, ac_title: 'Car Filters', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', imageSrc: Carousel_4, price: 299.99, rating: 1}, 
  ],
  motoroilData: [
    { id: 1, ac_title: 'Truck Oil', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', imageSrc: Carousel_2, price: 9999.99, rating: 5},
    { id: 2, ac_title: 'Bike Oil', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', imageSrc: Carousel_4, price: 2199.99, rating: 4},
  ],
  breaksystemData: [
    { id: 1, ac_title: 'Bycycle Break System', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', imageSrc: Carousel_3, price: 99.99, rating: 5},
    { id: 2, ac_title: 'Bike Break System', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', imageSrc: Carousel_2, price: 799.99, rating: 2},
    { id: 3, ac_title: 'Car Break System', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', imageSrc: Carousel_4, price: 1199.99, rating: 2}, 
  ],
  engineData: [
    { id: 2, ac_title: 'Bike Engine', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', imageSrc: Carousel_2, price: 699.99, rating: 5},
    { id: 3, ac_title: 'Car Engine', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', imageSrc: Carousel_4, price: 1299.99, rating: 5}, 
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