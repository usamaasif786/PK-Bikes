// import React from 'react';
import React from "react";
// import Header from '../header/header';
import CarouselSection from "./section-1";
import Section2 from "./section-2";
import Section3 from "./section-3";
import Section4 from "./section-4";
import Section5 from "./section-5";
import Section6 from "./section-6";
import "../css/component.css";

const Body = () => {
  return (
    <div>
      {/* ///////////// */}
      <CarouselSection />
      {/* <Carousel activeIndex={index} onSelect={handleSelect} className=''>
          {main_carousel?.map(item => (
            <Carousel.Item>
              <div className='carousel-1 row d-flex justify-content-center align-items-center' key={item.id} style={{backgroundImage: `url(${item.imageSrc})`}}>
                <div className='col-10 col-md-7 mb-4'>
                <h1 className='bold section-1-h1' style={{color: "red"}} key={item.id}>{item.c_title}</h1>
                <h6 className='bold' style={{color: "white", fontSize: "20px"}} key={item.id}>{item.description}</h6>
                <button className='mt-3 p-2 bold section-1-btn'>Shop Now</button>
                </div>
              </div>
            </Carousel.Item>
          ))}
        
        </Carousel> */}
      {/* /////////////////// */}
      {/* <Random/> */}
      <Section2 />
      {/* <div className='section-2 p-4 bg-lightGray'>
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
                <div className="col-12 col-md m-2 p-4 bd-highlight bg-white b-radius">
                  <div className=" mb-auto  bd-highlight">
                    <img className='img-fluid mb-4 b-radius' src={Carousel_4} alt="Picture" />
                  </div>
                  <div className="bd-highlight">
                    <h5 >Product Title</h5>
                  </div>
                  <div className="bd-highlight">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                  <div className="bd-highlight">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                  <div className="bd-highlight">
                    <div className='row mt-4 d-flex align-items-center'>
                      <h5 className='col m-0'>100.92 PKR</h5>
                      <button className='p-1 bold buy-now'>Buy Now</button>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md m-2 p-4 bd-highlight bg-white b-radius">
                  <div className=" mb-auto  bd-highlight">
                    <img className='img-fluid mb-4 b-radius'src={Carousel_2} alt="Picture" />
                  </div>
                  <div className="bd-highlight">
                    <h5 >Product Title</h5>
                  </div>
                  <div className="bd-highlight">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                  <div className="bd-highlight">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                  <div className="bd-highlight">
                    <div className='row mt-4 d-flex align-items-center'>
                      <h5 className='col m-0'>100.92 PKR</h5>
                      <button className='p-1 bold buy-now'>Buy Now</button>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md m-2 p-4 bd-highlight bg-white b-radius">
                  <div className=" mb-auto  bd-highlight">
                    <img className='img-fluid mb-4 b-radius' src={Carousel_3} alt="Picture" />
                  </div>
                  <div className="bd-highlight">
                    <h5 >Product Title</h5>
                  </div>
                  <div className="bd-highlight">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                  <div className="bd-highlight">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                  <div className="bd-highlight">
                    <div className='row mt-4 d-flex align-items-center'>
                      <h5 className='col m-0'>100.92 PKR</h5>
                      <button className='p-1 bold buy-now' >Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      {/* /////////////////////// */}
      <Section3 />
      {/* <div className='section-3 mt-4 p-4'>
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
        </div> */}
      {/* /////////////////////// */}
      <Section4 />
      {/* <div className='section-4  p-4 bg-lightGray'>
          <div className='row mt-2 mb-2 d-flex justify-content-center'>
            <div className='col-10'>
              <div className='row '>
                <h5 className='col bold d-flex justify-content-start'>Top Sellers</h5>
                {!viewAll && (
                  <button className='col-1 bold text-center view-all' style={{width: "100px"}} onClick={toggleViewAll}>View All</button>
                )}
                {viewAll && (
                  <button className='col-1 bold text-center view-all' style={{width: "100px"}} onClick={toggleViewAll}>Hide All</button>
                )}
              </div>
            </div>
          </div>

          <div className='row  p-2 d-flex justify-content-center'>
            <div className='col-11 col-md-11'>
              <div className='row justify '>
                {divsToShow.map(item => (
                  <div className=" col-sm-3 m-4 p-4 bd-highlight bg-white b-radius">
                    <div className=" mb-auto  bd-highlight">
                      <img className='img-fluid mb-4 b-radius' src={item.imageSrc} alt="Picture" />
                    </div>
                    <div className="bd-highlight">
                      <h5 key={item.id}>{item.s_title}</h5>
                    </div>
                    <div className="bd-highlight">
                      <p key={item.id}>{item.description}</p>
                    </div>
                    <div className="row bd-highlight">
                      <i class="col-2 bi bi-geo-alt"></i>
                      <p className='col' key={item.id}>{item.location}</p>
                    </div>
                    <div className="bd-highlight">
                      <button className='p-1 bold buy-now'>Buy Now</button>
                    </div>
                  </div>
                ))}
                 
                {viewAll && (
                  <div className="row">
                    {hiddenDivs.map(item => (
                    <div className=" col-sm m-2 p-4 bd-highlight bg-white b-radius">
                      <div className=" mb-auto  bd-highlight">
                        <img className='img-fluid mb-4 b-radius' src={item.imageSrc} alt="Picture" />
                      </div>
                      <div className="bd-highlight">
                        <h5 key={item.id}>{item.s_title}</h5>
                      </div>
                      <div className="bd-highlight">
                        <p key={item.id}>{item.description}</p>
                      </div>
                      <div className="row bd-highlight">
                        <i class="col-2 bi bi-geo-alt"></i>
                        <p className='col' key={item.id}>{item.location}</p>
                      </div>
                      <div className="bd-highlight">
                        <button className='p-1 bold buy-now'>Buy Now</button>
                      </div>
                    </div>
                    ))}
                  </div>
                )}
              </div>
            </div>  
          </div>
        </div> */}
      {/* /////////////////////// */}
      <Section5 />
      {/* <div className='section-5'>
          <div className='row mt-4 mb-4 d-flex justify-content-center'>
            <div className='col-10'>
              <div className='row '>
                <h5 className='col bold d-flex justify-content-start'>Company Owner's</h5>
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
        </div> */}
      {/* /////////////////////// */}
      <Section6 />
      {/* <div className='section-6'>
          <hr />
          <div className='row p-3 d-flex align-items-center'>
            {p_images.map(item => (
              <div className='col'>
                <img className='img-fluid' width={100} src={item.imageSrc} alt="Picture" />
              </div>
            ))}
          </div>
        </div> */}
    </div>
  );
};

export default Body;
