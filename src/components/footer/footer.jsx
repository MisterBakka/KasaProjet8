import React from 'react';
import CustomLogoWhite from '../../assets/logo_white.png';
import '../footer/footer.css'

function CustomFooter() {
  return (
    <footer className='custom-footer'>
        <figure>
            <img src={CustomLogoWhite} alt="Custom Kasa logo in white" />
        </figure>
        <p className='custom-copyright'>© 2023 Custom Company. All rights reserved</p>
    </footer>
  );
}

export default CustomFooter;
