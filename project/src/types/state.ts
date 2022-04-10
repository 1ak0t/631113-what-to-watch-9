import {store} from '../store';
import {Film, Films} from './films';
import {AuthorizationStatus} from '../const';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type InitialState = {
  activeGenre: string;
  films: Films;
  promo: (Film | undefined);
  filteredFilms: Films;
  authorizationStatus: AuthorizationStatus;
  error: string;
  isDataLoaded: boolean;
}
