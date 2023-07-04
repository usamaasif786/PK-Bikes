import React, { useState } from "react";
import { top_sellers } from "./objects";

const Section4 = () => {
  const limitedDivs = top_sellers.slice(
    0,
    3
  ); /*(I want to show just 4 div at a time)*/

  const [viewAll, setViewAll] = useState(false);

  const divsToShow = viewAll ? top_sellers : limitedDivs;
  const hiddenDivs = viewAll ? [] : top_sellers.slice(4);

  const toggleViewAll = () => setViewAll(!viewAll);

  return (
    <div className="section-4  p-4 bg-lightGray">
      <div className="row mt-2 mb-2 d-flex justify-content-center">
        <div className="col-10">
          <div className="row ">
            <h5 className="col bold d-flex justify-content-start">
              Top Sellers
            </h5>
            {!viewAll && (
              <button
                className="col-1 bold text-center view-all"
                style={{ width: "100px" }}
                onClick={toggleViewAll}
              >
                View All
              </button>
            )}
            {viewAll && (
              <button
                className="col-1 bold text-center view-all"
                style={{ width: "100px" }}
                onClick={toggleViewAll}
              >
                Hide All
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="row  p-2 d-flex justify-content-center">
        <div className="col-11 col-md-11">
          <div className="row justify ">
            {/* d-flex justify-content-around */}
            {divsToShow.map((item) => (
              <div className=" col-sm-3 m-4 p-4 bd-highlight bg-white b-radius">
                <div className=" mb-auto  bd-highlight">
                  <img
                    className="img-fluid mb-4 b-radius"
                    src={item.imageSrc}
                    alt="PK Bike Data-Pic"
                  />
                </div>
                <div className="bd-highlight">
                  <h5 key={item.id}>{item.s_title}</h5>
                </div>
                <div className="bd-highlight">
                  <p key={item.id}>{item.description}</p>
                </div>
                <div className="row bd-highlight">
                  <i class="col-2 bi bi-geo-alt"></i>
                  <p className="col" key={item.id}>
                    {item.location}
                  </p>
                </div>
                <div className="bd-highlight">
                  <button className="p-1 bold buy-now">Buy Now</button>
                </div>
              </div>
            ))}

            {viewAll && (
              <div className="row">
                {hiddenDivs.map((item) => (
                  <div className=" col-sm m-2 p-4 bd-highlight bg-white b-radius">
                    <div className=" mb-auto  bd-highlight">
                      <img
                        className="img-fluid mb-4 b-radius"
                        src={item.imageSrc}
                        alt="PK Bike Data-Pic"
                      />
                    </div>
                    <div className="bd-highlight">
                      <h5 key={item.id}>{item.s_title}</h5>
                    </div>
                    <div className="bd-highlight">
                      <p key={item.id}>{item.description}</p>
                    </div>
                    <div className="row bd-highlight">
                      <i class="col-2 bi bi-geo-alt"></i>
                      <p className="col" key={item.id}>
                        {item.location}
                      </p>
                    </div>
                    <div className="bd-highlight">
                      <button className="p-1 bold buy-now">Buy Now</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
