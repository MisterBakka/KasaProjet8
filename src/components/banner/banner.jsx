import React from 'react';
import '../banner/banner.css'



function CustomBanner({ imageSrc, showText, className }) {


  return (
    <section className={`custom-banner ${className}`}>
      <img
        src={imageSrc}
        alt=""
      />
      {showText && <h1 className='custom-banner-title'>Chez vous, partout et ailleurs</h1>}
    </section>
  );
}

export default CustomBanner;
