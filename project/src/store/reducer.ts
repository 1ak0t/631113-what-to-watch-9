import {DEFAULT_GENRE} from '../const';
import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, getAllFilms} from './actions';
import {InitialState} from '../types/state';

const initialState: InitialState = {
  activeGenre: DEFAULT_GENRE,
  genres: [DEFAULT_GENRE],
  films: [],
  filteredFilms: [],
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
      state.films.map((film) => state.genres.push(film.genre));
      state.genres = Array.from(new Set(state.genres));
    });
});

export {reducer};
