import React, { useState } from "react";
import {p_images} from './objects' 


const Section_6 = () => {
  return (
    <div className='section-6'>
      <hr />
      <div className='row p-3 d-flex align-items-center'>
        {p_images.map(item => (
          <div className='col'>
            <img className='img-fluid' width={100} src={item.imageSrc} alt="Picture" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section_6;
