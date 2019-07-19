import React from 'react';
import { map } from 'lodash/fp';
import './Container.css';
import Header from './Header.container';

const Main = ({ pictures, addToFavorite }) => (
  <div className='container main'>
    <Header />
    <div className='main-container-list'>
      {map(({ img_src, id, earth_date }) => (
        <div
          key={`pict-main${id}-${earth_date}`}
          onClick={() => addToFavorite(id)}
          className='image-container'
        >
          <img src={img_src} width={200} height={200} alt={earth_date} />
        </div>
      ))(pictures)}
    </div>
  </div>
);

export default Main;
