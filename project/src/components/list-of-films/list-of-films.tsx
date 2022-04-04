import FilmPreviews from '../film-previews/film-previews';
import FilterByGenre from '../filter-by-genre/filter-by-genre';
import {useAppSelector} from '../../hooks';

type ListOfFilmsProps = {
  filmsOnPage: number;
  isMore?: boolean;
}

function ListOfFilms({filmsOnPage, isMore}: ListOfFilmsProps): JSX.Element {
  const filteredFilms = useAppSelector((state) => state.filteredFilms);
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <FilterByGenre />
      <div className="catalog__films-list">
        <FilmPreviews films={filteredFilms} filmsOnPage={filmsOnPage} />
      </div>

      {
        isMore ? (
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        ) : ''
      }
    </section>
  );
}

export default ListOfFilms;
