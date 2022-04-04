import {Genres} from '../../const';
import {useDispatch, useSelector} from 'react-redux';
import {changeGenre, getFilmsByGenre} from '../../store/actions';

import {InitialState} from '../../types/state';

function FilterByGenre () {
  const genres = Object.values(Genres);
  const activeFilter = useSelector((state: InitialState) => state.activeGenre);
  const dispatch = useDispatch();
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li className={`catalog__genres-item ${activeFilter === genre ? 'catalog__genres-item--active': ''}`} key={genre}>
          <a href="#"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(changeGenre(genre));
              dispatch(getFilmsByGenre);
            }} className="catalog__genres-link"
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default FilterByGenre;
