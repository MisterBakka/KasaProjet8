import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import KasaLogo from '../../assets/logo.png'; 
import '../header/header.css'

export class Navbar extends PureComponent { 
  render() {
    return (
      <header className='custom-navbar'> 
        <NavLink to='/'>
          <figure className='custom-navbar-logo'> 
            <img src={KasaLogo} alt="Logo Kasa" /> 
          </figure>
        </NavLink>
        <div className='custom-acceuiletapropos'> 
          <NavLink to='/'>Accueil</NavLink>
          <NavLink to='/about'>À propos</NavLink>
        </div>
      </header>
    )
  }
}

export default Navbar; 
