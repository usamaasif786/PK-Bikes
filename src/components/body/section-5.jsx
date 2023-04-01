import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import {company_owner} from './objects' 


const Section_5 = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='section-5'>
      <div className='row mt-4 mb-4 d-flex justify-content-center'>
        <div className='col-10'>
          <div className='row '>
            <h5 className='col bold d-flex justify-content-start'>Company Owner's</h5>
            {/* <button className='col-1 bold text-center view-all' style={{width: "100px"}}>View All</button> */}
          </div>
        </div>
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect} className=''>
        {company_owner.map(item => (
        <Carousel.Item>
          <div key={item.id}>{item.text}</div>
            <div className='carousel-profile row d-flex justify-content-center align-items-center'>
              <div className='col-7 col-md-4 mb-4 p-4 b-radius' style={{border: "0.5px solid lightGray"}}>
                <p className='bold' key={item.id}>{item.description}</p>
                <h6 key={item.id}>{item.name}</h6>
                <img key={item.id} src={item.imageSrc} width={70} className="img-fluid special-img" alt="" />
              </div>
          </div> 
        </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Section_5;
