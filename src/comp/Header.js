import React from 'react';
import { map } from 'lodash/fp';
import './Container.css';

const Main = ({ isFetchingData, toggleIsFetchingData }) => (
  <div className='main-container-header'>
    <p>Main container</p>
    <button
      className={`button ${isFetchingData ? 'button-stop' : 'button-resume'}`}
      onClick={toggleIsFetchingData}
    >
      {isFetchingData ? 'Stop' : 'Resume'}
    </button>
  </div>
);

export default Main;
