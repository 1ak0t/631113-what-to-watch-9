import {Link, Navigate, useParams} from 'react-router-dom';
import {AppRoute} from '../../const';
import ReviewForm from '../review-form/review-form';
import {useAppSelector} from '../../hooks';
import {getAllFilms} from '../../store/selectors';
import UserBlock from '../user-block/user-block';

function AddReview(): JSX.Element {

  const paramId = Number(useParams().id);
  const films = useAppSelector(getAllFilms);
  const film = films.find((movie) => movie.id === paramId);

  if (!film) {
    return <Navigate to={AppRoute.Main} />;
  } else {
    return (
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <Link to={AppRoute.Main} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={AppRoute.Film.slice(0, -3) + film.id} className="breadcrumbs__link">{film.name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <Link to={AppRoute.AddReview.replace(':id', String(film.id))} className="breadcrumbs__link">Add review</Link>
                </li>
              </ul>
            </nav>
            <UserBlock />
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img src={film.posterImage} alt={film.name} width="218" height="327"/>
          </div>
        </div>

        <div className="add-review">
          <ReviewForm filmId={paramId} />
        </div>

      </section>
    );
  }
}

export default AddReview;
