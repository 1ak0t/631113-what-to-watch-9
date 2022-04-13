import FilmPreviews from '../film-previews/film-previews';
import FilterByGenre from '../filter-by-genre/filter-by-genre';
import {useAppSelector} from '../../hooks';
import {useEffect, useState} from 'react';
import {getFilteredFilms} from '../../store/selectors';

type ListOfFilmsProps = {
  filmsOnPage: number;
  isMore?: boolean;
}

function ListOfFilms({filmsOnPage, isMore}: ListOfFilmsProps): JSX.Element {
  const filteredFilms = useAppSelector(getFilteredFilms);
  const [filmsCount, setFilmsCount] = useState(filmsOnPage);
  const [moreButton, setMoreButton] = useState(isMore);

  useEffect(() => {
    if (filmsCount > filteredFilms.length) {
      setMoreButton(false);
    }
  }, [filmsCount]);

  const handleMoreButtonClick = () => {
    setFilmsCount(filmsCount + 8);
  };
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <FilterByGenre />
      <div className="catalog__films-list">
        <FilmPreviews films={filteredFilms} filmsOnPage={filmsCount} />
      </div>

      {
        moreButton ? (
          <div className="catalog__more">
            <button className="catalog__button" type="button" onClick={handleMoreButtonClick}>Show more</button>
          </div>
        ) : ''
      }
    </section>
  );
}

export default ListOfFilms;
