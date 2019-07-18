import React from 'react';
import { map } from 'lodash/fp';
import MainContainer from './comp/Main.container';
import './App.css';
import FavoritesContainer from './comp/Favorites.container';

const App = () => (
  <div className='App'>
    <header className='App-header'>
      <p> Choose your favorites picture from the mars rover !</p>
    </header>
    <FavoritesContainer />
    <MainContainer />
  </div>
);

export default App;
