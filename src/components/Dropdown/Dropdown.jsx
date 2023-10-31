import React, { useState } from 'react';
import expandArrowImg from '../../assets/expand_down.png';
import expandUpImg from '../../assets/expand_up.png';
import './Dropdown.css'; 

function CustomDropdown({ titre, description, ClassName }) {
  const [isActive, setIsActive] = useState(false);

  const handleDropdownClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`dropdown ${isActive ? 'open' : ''}`}>
      <div className='label-container' onClick={handleDropdownClick}>
        <label>{titre}</label>
        <img src={isActive ? expandUpImg : expandArrowImg} alt="Icône d'expansion" />
      </div>
      {isActive && <div className={`description-dropdown ${ClassName}`}>{description}</div>}
    </div>
  );
}

export default CustomDropdown;
