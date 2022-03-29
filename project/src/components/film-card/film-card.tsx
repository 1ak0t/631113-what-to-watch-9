import {Film} from '../../types/films';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import PreviewVideoPlayer from '../preview-video-player/preview-video-player';

type FilmCardProps = {
  film: Film;
}

function FilmCard({film}: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <PreviewVideoPlayer film={film} />
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film.slice(0, -3) + film.id}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
