import React from 'react';
import '../Tag/Tag.css'

const CustomTag = ({ dataLocation }) => {
  return (
    <div className='custom-tag-content'>
      {dataLocation.map((tag, index) => (
        <span key={index}>{tag}</span>
      ))}
    </div>
  );
};

export default CustomTag;
