import {Films} from '../../types/films';
import FilmCard from '../film-card/film-card';

type FilmPreviewsProps = {
  films: Films;
  filmsOnPage?: number;
  updateActiveFilm?: any;
}

function FilmPreviews({films, filmsOnPage, updateActiveFilm}: FilmPreviewsProps) {
  return (
    <>
      {films.slice(0, filmsOnPage).map((film) => <FilmCard film={film} key={film.id} />)}
    </>
  );
}

export default FilmPreviews;
