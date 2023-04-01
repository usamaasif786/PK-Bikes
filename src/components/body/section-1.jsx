import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { main_carousel } from "./objects";

const CarouselSection = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="">
      {main_carousel?.map((item) => (
        <Carousel.Item>
          <div
            className="carousel-1 row d-flex justify-content-center align-items-center"
            key={item.id}
            style={{ backgroundImage: `url(${item.imageSrc})` }}
          >
            <div className="col-10 col-md-7 mb-4">
              <h1
                className="bold section-1-h1"
                style={{ color: "red" }}
                key={item.id}
              >
                {item.c_title}
              </h1>
              <h6
                className="bold"
                style={{ color: "white", fontSize: "20px" }}
                key={item.id}
              >
                {item.description}
              </h6>
              <button className="mt-3 p-2 bold section-1-btn">Shop Now</button>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselSection;
