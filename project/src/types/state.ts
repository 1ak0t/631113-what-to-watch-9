import {store} from '../store';
import {Films} from './films';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type InitialState = {
  activeGenre: string;
  films: Films;
  filteredFilms: Films;
}
