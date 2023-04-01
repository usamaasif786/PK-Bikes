import React, { useState }  from "react";
import { all_categories } from "./objects";
import PropTypes from 'prop-types';

const MAX_RATING = 5; // maximum rating value

// RatingStar component to display a single star
const RatingStar = ({ filled, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={23}
    height={23}
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


const Section_2 = () => {
  return (
    <div className='section-2 p-4 bg-lightGray'>
          <div className='row d-flex justify-content-center'>
            <div className='col-11'>
              <div className='row justify'>
                <div className='col m-3 bold justify'>
                  <h5 className='bold mb-4'>All Categories</h5>
                  <p style={{color: "red"}}>Tires</p>
                  <p>Moter Oils</p>
                  <p>Filters</p>
                  <p>Accessories</p>
                  <p>Break System</p>
                  <p>Engine</p>
                  <button className='p-2 mt-4 d-flex align-items-center bold' style={{height: "auto",backgroundColor: "white" ,border: "2px solid red", borderRadius: "10px"}}>View All Products</button>
                </div>
                {all_categories?.map((item) => (
                  <div className="col-12 col-md m-2 p-4 bd-highlight bg-white b-radius">
                    <div className=" mb-auto  bd-highlight">
                      <img className='img-fluid mb-4 b-radius' key={item.id} src={item.imageSrc} alt="Picture" />
                    </div>
                    <div className="bd-highlight">
                      <h5 key={item.id}>{item.ac_title}</h5>
                    </div>
                    <div className="bd-highlight">
                      <p key={item.id}>{item.description}</p>
                    </div>
                    <div className="bd-highlight">    
                      <Rating key={item.id} rating={item.rating} starSize={30} />
                    </div>
                    <div className="bd-highlight">
                      <div className='row mt-4 d-flex align-items-center'>
                        <h5 className='col m-0' key={item.id}>{item.price}</h5>
                        <button className='p-1 bold buy-now'>Buy Now</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
  );
};

export default Section_2;
