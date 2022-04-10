import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import ErrorMessage from './components/error-message/error-message';
import {checkAuthAction, fetchFilmsAction, fetchPromoAction} from './store/api-actions';
import {useAppSelector} from './hooks';
import {getAllFilms} from './store/selectors';
import {getPromo} from './store/selectors';

const Settings = {
  FILMS_ON_PAGE: 8,
  FILMS_IN_SIMILAR: 4,
};

store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        countOfSimilarFilms={Settings.FILMS_IN_SIMILAR}
        filmsOnPage={Settings.FILMS_ON_PAGE}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
