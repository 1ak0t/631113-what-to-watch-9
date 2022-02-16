import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  FILMS_ON_PAGE: 20,
  PROMO_FILM_NAME: 'The Grand Budapest Hotel',
  PROMO_FILM_GENRE: 'Drama',
  PROMO_FILM_YEAR: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      filmsCount = {Settings.FILMS_ON_PAGE}
      promoFilmName={Settings.PROMO_FILM_NAME}
      promoFilmGenre={Settings.PROMO_FILM_GENRE}
      promoFilmYear={Settings.PROMO_FILM_YEAR}
    />
  </React.StrictMode>,
  document.getElementById('root'));
