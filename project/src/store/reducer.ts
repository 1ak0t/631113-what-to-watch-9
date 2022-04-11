import {AuthorizationStatus, DEFAULT_GENRE} from '../const';
import {createReducer} from '@reduxjs/toolkit';
import {
  changeGenre, clearUserData,
  getAccountData,
  getAllFilms, getFavorites,
  getPromo,
  getReviews, getSimilar,
  requireAuthorization,
  setError
} from './actions';
import {InitialState} from '../types/state';

const initialState: InitialState = {
  activeGenre: DEFAULT_GENRE,
  films: [],
  promo: undefined,
  filteredFilms: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: '',
  isDataLoaded: false,
  filmComments: [],
  userAccount: null,
  favorites: [],
  similar: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload;
      if (state.activeGenre !== DEFAULT_GENRE) {
        state.filteredFilms = state.films.filter((film) => film.genre === state.activeGenre);
      } else {
        state.filteredFilms = state.films;
      }
    })
    .addCase(getAllFilms, (state, action) => {
      state.films = action.payload;
      state.filteredFilms = state.films;
      state.isDataLoaded = true;
    })
    .addCase(getPromo, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(getFavorites, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(getSimilar, (state, action) => {
      state.similar = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(clearUserData, (state, action) => {
      state.userAccount = null;
    })
    .addCase(getAccountData, (state, action) => {
      state.userAccount = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(getReviews, (state, action) => {
      state.filmComments = action.payload;
    });
});

export {reducer};
