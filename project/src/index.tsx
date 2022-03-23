import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films, similarFilms} from './mocks/films';
import {promo} from './mocks/promo';
import {favorites} from './mocks/favorites';

const Settings = {
  FILMS_ON_PAGE: 8,
  FILMS_IN_SIMILAR: 4,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      promo={promo}
      films={films}
      similarFilms={similarFilms}
      countOfSimilarFilms={Settings.FILMS_IN_SIMILAR}
      filmsOnPage={Settings.FILMS_ON_PAGE}
      favorites={favorites}
    />
  </React.StrictMode>,
  document.getElementById('root'));
