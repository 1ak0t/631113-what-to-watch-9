import {State} from '../types/state';
import {DEFAULT_GENRE} from '../const';

export const getFilteredFilms = (state: State) => state.filteredFilms;
export const getAllFilms = (state: State) => state.films;
export const getPromo = (state: State) => state.promo;
export const getReviews = (state: State) => state.filmComments;
export const getFavorites = (state: State) => state.favorites;
export const getSimilar = (state: State) => state.similar;
export const getActiveGenre = (state: State) => state.activeGenre;
export const getUserData = (state: State) => state.userAccount;
export const getAuthorizationStatus = (state: State) => state.authorizationStatus;
export const getFilters = (state: State) => {
  const genres = [DEFAULT_GENRE];
  state.films.forEach((film)=> genres.push(film.genre));
  return Array.from(new Set(genres));
};
