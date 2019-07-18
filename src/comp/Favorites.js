import React from 'react';
import { map } from 'lodash/fp';
import './Container.css';

const Favorites = ({ favorites }) => (
  <div className='container'>
    <p>Favorites container</p>
    <div className='favorite-container-list'>
      {map(({ img_src, id, earth_date }) => (
        <div key={`pict-main${id}-${earth_date}`} className='image-container'>
          <img src={img_src} width={200} height={200} alt={earth_date} />
        </div>
      ))(favorites)}
    </div>
  </div>
);

export default Favorites;
