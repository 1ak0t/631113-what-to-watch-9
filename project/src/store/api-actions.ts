import {createAsyncThunk} from '@reduxjs/toolkit';
import {Film, Films, FilmToFavorite} from '../types/films';
import {APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../const';
import {api, store} from './index';
import {
  clearUserData,
  getAccountData,
  getAllFilms,
  getFavorites,
  getPromo,
  getReviews, getSimilar,
  requireAuthorization,
  setError
} from './actions';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {dropToken, saveToken} from '../services/token';
import {errorHandle} from '../services/error-handle';
import {Review, Reviews} from '../types/reviews';

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchFilmsAction = createAsyncThunk(
  'fetchFilms',
  async () => {
    try {
      const {data} = await api.get<Films>(APIRoute.Films);
      store.dispatch(getAllFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchPromoAction = createAsyncThunk(
  'fetchPromo',
  async () => {
    try {
      const {data} = await api.get<Film>(APIRoute.Promo);
      store.dispatch(getPromo(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFilmComments = createAsyncThunk(
  'fetchComment',
  async (id: number) => {
    try {
      const {data} = await api.get<Reviews>(`${APIRoute.Comments}${id}`);
      store.dispatch(getReviews(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFavorites = createAsyncThunk(
  'fetchFavorites',
  async () => {
    try {
      const {data} = await api.get<Films>(APIRoute.Favorites);
      store.dispatch(getFavorites(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchSimilar = createAsyncThunk(
  'fetchSimilar',
  async (id : number) => {
    try {
      const {data} = await api.get<Films>(`${APIRoute.Films}/${id}/similar`);
      store.dispatch(getSimilar(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'checkAuth',
  async () => {
    try {
      const {data} = await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(getAccountData(data));
    } catch(error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const addToFavoriteAction = createAsyncThunk(
  'addToFavorite',
  async ({id, status}: FilmToFavorite) => {
    try {
      await api.post<FilmToFavorite>(`${APIRoute.Favorites}/${id}/${status}`);
      store.dispatch(fetchFavorites());
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const addReviewAction = createAsyncThunk(
  'addReview',
  async ({filmId, comment, rating}: Review) => {
    try {
      await api.post<Review>(`${APIRoute.Comments}${filmId}`, {comment, rating});
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const loginAction = createAsyncThunk(
  'login',
  async ({login: email, password}: AuthData) => {
    try {
      const {data: {token, id, name, avatarUrl}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(getAccountData({token, id, name, email, avatarUrl}));
      store.dispatch(fetchFavorites());
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      store.dispatch(clearUserData);
    } catch (error) {
      errorHandle(error);
    }
  },
);
