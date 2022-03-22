import {Films} from '../../types/films';
import {useState} from 'react';
import FilmPreviews from '../film-previews/film-previews';

type ListOfFilmsProps = {
  films: Films;
  filmsOnPage: number;
  isMore?: boolean;
}

function ListOfFilms({films, filmsOnPage, isMore}: ListOfFilmsProps): JSX.Element {
  const [, setActiveFilmCard] = useState(0);
  const updateActiveFilm = (card: number) => {
    setActiveFilmCard(card);
  };

  const moreButton = isMore ? (
    <div className="catalog__more">
      <button className="catalog__button" type="button">Show more</button>
    </div>
  ) : '';

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul className="catalog__genres-list">
        <li className="catalog__genres-item catalog__genres-item--active">
          <a href="#" className="catalog__genres-link">All genres</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Comedies</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Crime</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Documentary</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Dramas</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Horror</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Kids & Family</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Romance</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Sci-Fi</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Thrillers</a>
        </li>
      </ul>

      <div className="catalog__films-list">
        <FilmPreviews films={films} filmsOnPage={filmsOnPage} updateActiveFilm={updateActiveFilm} />
      </div>

      {moreButton}
    </section>
  );
}

export default ListOfFilms;
