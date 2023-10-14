import React, { useState } from 'react';
import chevronLeft from "../../assets/forward_left.png";
import chevronRight from "../../assets/forward_right.png";
import './Slide.css';



const CustomSlide = ({ dataLocation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nbPictures = dataLocation.pictures.length;
  const picturesSlide = nbPictures > 1;

  const goToSlide = (direction) => {
    let newIndex;

    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? nbPictures - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === nbPictures - 1 ? 0 : currentIndex + 1;
    }

    setCurrentIndex(newIndex);
  };

  return (
    <section className='slide'>
      <figure className='slide-location'>
        <img src={dataLocation.pictures[currentIndex]} alt={dataLocation.title} />
      </figure>
      {picturesSlide && (
        <>
          <button className='btn btn-left' onClick={() => goToSlide('prev')}>
            <img src={chevronLeft} alt="" />
          </button>
          <button className='btn btn-right' onClick={() => goToSlide('next')}>
            <img src={chevronRight} alt="" />
          </button>
        </>
      )}
      <p className='nb-position'>{currentIndex + 1}/{nbPictures}</p>
    </section>
  );
};

export default CustomSlide;
