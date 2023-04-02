import React, { useState }  from "react";
import { all_categories } from "./objects";
import PropTypes from 'prop-types';

const MAX_RATING = 5; // maximum rating value

// RatingStar component to display a single star
const RatingStar = ({ filled, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={23} // {size}
    height={23} // {size}
    fill={filled ? 'yellow' : 'none'}
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 17.27l-5.66 3.44 1.7-6.19L2.34 9.56l6.26-.54L12 3l3.4 6.02 6.26.54-4.7 4.86 1.7 6.19L12 17.27z" />
  </svg>
);

RatingStar.propTypes = {
  filled: PropTypes.bool.isRequired,
  size: PropTypes.number.isRequired,
};

// Rating component to display a row of stars based on a rating value
const Rating = ({ rating, starSize }) => (
  <div>
    {[...Array(MAX_RATING)].map((_, index) => (
      <RatingStar
        key={index}
        filled={index < rating}
        size={starSize}
      />
    ))}
  </div>
);

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  starSize: PropTypes.number.isRequired,
};

const Tires = ({ all_categories }) => (
  <div className="row d-flex justify-content-start">
    {all_categories.tireData.map((tire, index) => (
      <div key={`tire_${index}`} className="col-12 col-md-3 m-4 p-3 bd-highlight bg-white b-radius">
        <div className=" mb-auto  bd-highlight">
          <img className='img-fluid mb-4 b-radius' src={tire.imageSrc} alt="Picture" />
        </div>
        <div className="bd-highlight">
          <h5>{tire.ac_title}</h5>
        </div>
        <div className="bd-highlight">
          <p>{tire.description}</p>
        </div>
        <div className="bd-highlight">    
          <Rating rating={tire.rating} starSize={30} />
        </div>
        <div className="bd-highlight">
          <div className='row mt-4 d-flex align-items-center'>
            <h5 className='col m-0'>{tire.price}</h5>
            <button className='p-1 bold buy-now'>Buy Now</button>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const Accessories = ({ all_categories }) => (
  <div className="row d-flex justify-content-start">
    {all_categories.accessoriesData.map((accessories, index) => (
      <div key={`accessories_${index}`} className="col-12 col-md-3 m-4 p-3 bd-highlight bg-white b-radius">
        <div className=" mb-auto  bd-highlight">
          <img className='img-fluid mb-4 b-radius' src={accessories.imageSrc} alt="Picture" />
        </div>
        <div className="bd-highlight">
          <h5>{accessories.ac_title}</h5>
        </div>
        <div className="bd-highlight">
          <p>{accessories.description}</p>
        </div>
        <div className="bd-highlight">    
          <Rating rating={accessories.rating} starSize={30} />
        </div>
        <div className="bd-highlight">
          <div className='row mt-4 d-flex align-items-center'>
            <h5 className='col m-0'>{accessories.price}</h5>
            <button className='p-1 bold buy-now'>Buy Now</button>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const Filters = ({ all_categories }) => (
  <div className="row d-flex justify-content-start">
    {all_categories.filtersData.map((filters, index) => (
      <div key={`filters_${index}`} className="col-12 col-md-3 m-4 p-3 bd-highlight bg-white b-radius">
        <div className=" mb-auto  bd-highlight">
          <img className='img-fluid mb-4 b-radius' src={filters.imageSrc} alt="Picture" />
        </div>
        <div className="bd-highlight">
          <h5>{filters.ac_title}</h5>
        </div>
        <div className="bd-highlight">
          <p>{filters.description}</p>
        </div>
        <div className="bd-highlight">    
          <Rating rating={filters.rating} starSize={30} />
        </div>
        <div className="bd-highlight">
          <div className='row mt-4 d-flex align-items-center'>
            <h5 className='col m-0'>{filters.price}</h5>
            <button className='p-1 bold buy-now'>Buy Now</button>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const MotorOil = ({ all_categories }) => (
  <div className="row d-flex justify-content-start">
    {all_categories.motoroilData.map((motoroil, index) => (
      <div key={`oil_${index}`} className="col-12 col-md-3 m-4 p-3 bd-highlight bg-white b-radius">
        <div className=" mb-auto  bd-highlight">
          <img className='img-fluid mb-4 b-radius' src={motoroil.imageSrc} alt="Picture" />
        </div>
        <div className="bd-highlight">
          <h5>{motoroil.ac_title}</h5>
        </div>
        <div className="bd-highlight">
          <p>{motoroil.description}</p>
        </div>
        <div className="bd-highlight">    
          <Rating rating={motoroil.rating} starSize={30} />
        </div>
        <div className="bd-highlight">
          <div className='row mt-4 d-flex align-items-center'>
            <h5 className='col m-0'>{motoroil.price}</h5>
            <button className='p-1 bold buy-now'>Buy Now</button>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const BreakSystem = ({ all_categories }) => (
  <div className="row d-flex justify-content-start">
    {all_categories.breaksystemData.map((breakSystem, index) => (
      <div key={`breakSystem_${index}`} className="col-12 col-md-3 m-4 p-3 bd-highlight bg-white b-radius">
        <div className=" mb-auto  bd-highlight">
          <img className='img-fluid mb-4 b-radius' src={breakSystem.imageSrc} alt="Picture" />
        </div>
        <div className="bd-highlight">
          <h5>{breakSystem.ac_title}</h5>
        </div>
        <div className="bd-highlight">
          <p>{breakSystem.description}</p>
        </div>
        <div className="bd-highlight">    
          <Rating rating={breakSystem.rating} starSize={30} />
        </div>
        <div className="bd-highlight">
          <div className='row mt-4 d-flex align-items-center'>
            <h5 className='col m-0'>{breakSystem.price}</h5>
            <button className='p-1 bold buy-now'>Buy Now</button>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const Engine = ({ all_categories }) => (
  <div className="row d-flex justify-content-start">
    {all_categories.engineData.map((engine, index) => (
      <div key={`engine_${index}`} className="col-12 col-md-3 m-4 p-3 bd-highlight bg-white b-radius">
        <div className=" mb-auto  bd-highlight">
          <img className='img-fluid mb-4 b-radius' src={engine.imageSrc} alt="Picture" />
        </div>
        <div className="bd-highlight">
          <h5>{engine.ac_title}</h5>
        </div>
        <div className="bd-highlight">
          <p>{engine.description}</p>
        </div>
        <div className="bd-highlight">    
          <Rating rating={engine.rating} starSize={30} />
        </div>
        <div className="bd-highlight">
          <div className='row mt-4 d-flex align-items-center'>
            <h5 className='col m-0'>{engine.price}</h5>
            <button className='p-1 bold buy-now'>Buy Now</button>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const ProductList = ({ all_categories }) => (
  <div className="row d-flex justify-content-start">
    {all_categories.map((product, index) => (
      <div key={`product_${index}`} className="col-12 col-md-3 m-4 p-3 bd-highlight bg-white b-radius">
        <div className=" mb-auto  bd-highlight">
          <img className='img-fluid mb-4 b-radius' src={product.imageSrc} alt="Picture" />
        </div>
        <div className="bd-highlight">
          <h5>{product.ac_title}</h5>
        </div>
        <div className="bd-highlight">
          <p>{product.description}</p>
        </div>
        <div className="bd-highlight">    
          <Rating rating={product.rating} starSize={30} />
        </div>
        <div className="bd-highlight">
          <div className='row mt-4 d-flex align-items-center'>
            <h5 className='col m-0'>{product.price}</h5>
            <button className='p-1 bold buy-now'>Buy Now</button>
          </div>
        </div>
      </div>
    ))}
  </div>
);


const Section_2 = () => {
  const [activeTab, setActiveTab] = useState('tires');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className='section-2 p-4 bg-lightGray'>
          <div className='row d-flex justify-content-center'>
            <div className='col-11'>
              <div className='row justify'>
                <div className='col-2 m-4 bold justify'>
                  <h5 className='bold mb-4'>All Categories</h5>
                  <button type="button" className="btn btn-outline-dark m-1 fw-bold" onClick={() => handleTabClick('tires')}>Tires</button> <br />
                  <button type="button" className="btn btn-outline-dark m-1 fw-bold" onClick={() => handleTabClick('accessories')}>Accessories</button> <br />
                  <button type="button" className="btn btn-outline-dark m-1 fw-bold" onClick={() => handleTabClick('filters')}>Filters</button> <br />
                  <button type="button" className="btn btn-outline-dark m-1 fw-bold" onClick={() => handleTabClick('motoroil')}>Moter Oils</button> <br />
                  <button type="button" className="btn btn-outline-dark m-1 fw-bold" onClick={() => handleTabClick('breaksystem')}>Break System</button> <br />
                  <button type="button" className="btn btn-outline-dark m-1 fw-bold" onClick={() => handleTabClick('engine')}>Engine</button>
                  <button className='p-2 mt-4 d-flex align-items-center bold' style={{height: "auto",backgroundColor: "white" ,border: "2px solid red", borderRadius: "10px"}}>View All Products</button>
                </div>
                <div className="col">
                  {activeTab === 'tires' && <Tires all_categories={all_categories} />}
                  {activeTab === 'accessories' && <Accessories all_categories={all_categories} />}
                  {activeTab === 'filters' && <Filters all_categories={all_categories} />}  
                  {activeTab === 'motoroil' && <MotorOil all_categories={all_categories} />}  
                  {activeTab === 'breaksystem' && <BreakSystem all_categories={all_categories} />}  
                  {activeTab === 'engine' && <Engine all_categories={all_categories} />}  

                  {/* {activeTab === 'tires' && <ProductList />}
                  {activeTab === 'oils' && <ProductList />}
                  {console.log(all_categories)}
                
                {console.log(ProductList())} */}

                
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Section_2;
