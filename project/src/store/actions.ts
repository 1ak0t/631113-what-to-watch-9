import {createAction} from '@reduxjs/toolkit';
import {Films} from '../types/films';

export const changeGenre = createAction<string>('changeGenre');
export const getFilmsByGenre = createAction('getFilmsByGenre');
export const getAllFilms = createAction<Films>('getAllFilms');
