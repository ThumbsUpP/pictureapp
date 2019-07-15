import React from 'react';
import { map } from 'lodash/fp';
import './App.css';

const App = ({ pictures }) => (
  <div className='App'>
    <header className='App-header'>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <ul>
        {map(({ img_src, id, earth_date }) => (
          <li key={id}>
            <img src={img_src} width={200} height={200} alt={earth_date} />
          </li>
        ))(pictures)}
      </ul>
    </header>
  </div>
);

export default App;
