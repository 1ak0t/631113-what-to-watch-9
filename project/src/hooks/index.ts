import {useDispatch} from 'react-redux';
import {AppDispatch} from '../types/state';
import {State} from '../types/state';
import {TypedUseSelectorHook} from 'react-redux';
import {useSelector} from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
