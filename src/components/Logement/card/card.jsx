import React from 'react';
import { Link } from 'react-router-dom';
import '../card/card.css'

function CustomCard({ dataLocation }) {
  const customLogement = dataLocation;

  return (
    <Link to={`/location/${customLogement.id}`}>
      <figure className='logement'>
        <img className='card-img' src={customLogement.cover} alt="" />
        <figcaption className='title'>{customLogement.title}</figcaption>
      </figure>
    </Link>
  );
}

export default CustomCard;
