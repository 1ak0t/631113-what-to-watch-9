import {State} from '../types/state';
import {DEFAULT_GENRE} from '../const';

export const getFilteredFilms = (state: State) => state.filteredFilms;
export const getActiveGenre = (state: State) => state.activeGenre;
export const getFilters = (state: State) => {
  const genres = [DEFAULT_GENRE];
  state.films.forEach((film)=> genres.push(film.genre));
  return Array.from(new Set(genres));
};
