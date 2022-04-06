import {changeGenre} from '../../store/actions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import React from 'react';
import {getActiveGenre, getFilters} from '../../store/selectors';

function FilterByGenre () {
  const activeFilter = useAppSelector(getActiveGenre);
  const filters = useAppSelector(getFilters);

  const dispatch = useAppDispatch();

  const onGenreClick = (evt: React.MouseEvent<HTMLAnchorElement>, genre: string) => {
    evt.preventDefault();
    dispatch(changeGenre(genre));
  };
  return (
    <ul className="catalog__genres-list">
      {filters.map((genre) => (
        <li className={`catalog__genres-item ${activeFilter === genre ? 'catalog__genres-item--active': ''}`} key={genre}>
          <a href="#" onClick={(evt) => onGenreClick(evt, genre)} className="catalog__genres-link">
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default FilterByGenre;
