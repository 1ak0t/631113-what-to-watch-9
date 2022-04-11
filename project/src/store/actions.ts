import {createAction} from '@reduxjs/toolkit';
import {Film, Films} from '../types/films';
import {AuthorizationStatus} from '../const';
import {Reviews} from '../types/reviews';
import {UserAccount} from '../types/state';
import {UserData} from '../types/user-data';

export const changeGenre = createAction<string>('changeGenre');
export const getAllFilms = createAction<Films>('getAllFilms');
export const getPromo = createAction<Film>('getPromo');
export const getReviews = createAction<Reviews>('getReviews');
export const getFavorites = createAction<Films>('getFavorites');
export const getSimilar = createAction<Films>('getSimilar');
export const getAccountData = createAction<UserAccount>('getAccountData');
export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');
export const clearUserData = createAction<UserData>('clearUserData');
export const setError = createAction<string>('setError');
