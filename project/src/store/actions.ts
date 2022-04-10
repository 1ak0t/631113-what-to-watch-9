import {createAction} from '@reduxjs/toolkit';
import {Film, Films} from '../types/films';
import {AuthorizationStatus} from '../const';
import {Reviews} from '../types/reviews';

export const changeGenre = createAction<string>('changeGenre');
export const getAllFilms = createAction<Films>('getAllFilms');
export const getPromo = createAction<Film>('getPromo');
export const getReviews = createAction<Reviews>('getReviews');
export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');
export const setError = createAction<string>('setError');
