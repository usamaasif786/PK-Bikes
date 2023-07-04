// import React, { useState } from "react";
import React from "react";

import { p_images } from "./objects";

const Section6 = () => {
  return (
    <div className="section-6">
      <hr />
      <div className="row p-3 d-flex align-items-center">
        {p_images.map((item) => (
          <div className="col">
            <img
              className="img-fluid"
              width={100}
              src={item.imageSrc}
              alt="PAK Bike Data-Pic"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section6;
