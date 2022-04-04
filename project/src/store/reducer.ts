import {Genres} from '../const';
import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, getAllFilms, getFilmsByGenre} from './actions';
import {InitialState} from '../types/state';

const initialState: InitialState = {
  activeGenre: Genres.AllGenres,
  films: [],
  filteredFilms: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(getAllFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(getFilmsByGenre, (state) => {
      state.filteredFilms = state.films.filter((film) => film.genre === state.activeGenre);
    });
});

export {reducer};
