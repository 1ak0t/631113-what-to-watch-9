import {Films} from '../../types/films';
import FilmCard from '../film-card/film-card';
import {useAppSelector} from '../../hooks';
import {getAllFilms} from '../../store/selectors';

type FilmPreviewsProps = {
  films: Films;
  filmsOnPage?: number;
}

function FilmPreviews({films, filmsOnPage}: FilmPreviewsProps) {
  const filmsList = films.slice(0, filmsOnPage);

  return (
    <>
      {filmsList.map((film) => <FilmCard film={film} key={film.id} />)}
    </>
  );
}

export default FilmPreviews;
