import {Films} from '../../types/films';
import FilmCard from '../film-card/film-card';
import {useState} from 'react';

type FilmPreviewsProps = {
  films: Films;
  filmsOnPage?: number;
}

function FilmPreviews({films, filmsOnPage}: FilmPreviewsProps) {
  const filmsList = films.slice(0, filmsOnPage);
  const [activeFilmCard, setActiveFilmCard] = useState(0);
  //eslint-disable-next-line no-console
  console.log(activeFilmCard);
  const updateActiveFilm = (card: number) => {
    setActiveFilmCard(card);
  };

  return (
    <>
      {filmsList.map((film) => <FilmCard film={film} key={film.id} updateActiveFilm={updateActiveFilm} />)}
    </>
  );
}

export default FilmPreviews;
