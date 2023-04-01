import React from "react";
import {top_selling_product} from './objects' 


const Section_3 = () => {
  return (
    <div className='section-3 mt-4 p-4'>
      <div className='row d-flex justify-content-center'>
        <div className='col-10'>
          <div className='row '>
            <h5 className='col bold d-flex justify-content-start'>Top Selling Products</h5>
            <button className='col-2 bold text-center view-all' style={{width: "100px"}}>View All</button>
          </div>
        </div>
      </div>
      <div className='row  p-2 d-flex justify-content-center'>
        <div className='col-11 col-md-11'>
          <div className='row justify'>
            {top_selling_product?.map(item => (
              <div className="col-12 col-md m-2 p-4 bd-highlight ">
                <div className=" mb-auto  bd-highlight">
                  <img className='img-fluid mb-4 b-radius' src={item.imageSrc} alt="Picture" />
                </div>
                <div className="bd-highlight">
                  <h5 key={item.id}>{item.p_title}</h5>
                </div>
                <div className="bd-highlight">
                  <p key={item.id}>{item.description}</p>
                </div>
                <div className="bd-highlight">
                  <div className='row mt-4 d-flex align-items-center'>
                    <h6 className='col m-0' key={item.id}>{item.price}</h6>
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

export default Section_3;
