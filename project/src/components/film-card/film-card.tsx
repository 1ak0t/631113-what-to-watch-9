import {Film} from '../../types/films';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';

type FilmCardProps = {
  film: Film;
  updateActiveFilm?: any;
}

function FilmCard({film, updateActiveFilm}: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => {updateActiveFilm(film.id);}}>
      <div className="small-film-card__image">
        <img src={film.previewImage} alt={film.name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film.slice(0, -3) + film.id}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
