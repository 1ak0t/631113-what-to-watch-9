import {store} from '../store';
import {Film, Films} from './films';
import {AuthorizationStatus} from '../const';
import {Reviews} from './reviews';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type UserAccount = {
  id: number;
  avatarUrl: string;
  email: string;
  name: string;
  token: string;
}

export type InitialState = {
  activeGenre: string;
  films: Films;
  promo: (Film | undefined);
  filteredFilms: Films;
  authorizationStatus: AuthorizationStatus;
  error: string;
  isDataLoaded: boolean;
  filmComments: Reviews;
  userAccount: UserAccount | null;
  favorites: Films;
  similar: Films;
}
