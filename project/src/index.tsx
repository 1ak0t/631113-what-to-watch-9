import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films, similarFilms} from './mocks/films';
import {promo} from './mocks/promo';
import {favorites} from './mocks/favorites';
import {reviews} from './mocks/reviews';
import {Provider} from 'react-redux';
import {store} from './store';

const Settings = {
  FILMS_ON_PAGE: 8,
  FILMS_IN_SIMILAR: 4,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        promo={promo}
        films={films}
        similarFilms={similarFilms}
        countOfSimilarFilms={Settings.FILMS_IN_SIMILAR}
        filmsOnPage={Settings.FILMS_ON_PAGE}
        favorites={favorites}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
