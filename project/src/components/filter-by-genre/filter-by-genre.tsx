import {changeGenre} from '../../store/actions';
import {useAppDispatch, useAppSelector} from '../../hooks';

function FilterByGenre () {
  const activeFilter = useAppSelector((state) => state.activeGenre);
  const filters = useAppSelector((state) => state.genres);

  const dispatch = useAppDispatch();
  return (
    <ul className="catalog__genres-list">
      {filters.map((genre) => (
        <li className={`catalog__genres-item ${activeFilter === genre ? 'catalog__genres-item--active': ''}`} key={genre}>
          <a href="#"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(changeGenre(genre));
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
