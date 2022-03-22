import {Films} from '../../types/films';
import {Link, Navigate, useParams} from 'react-router-dom';
import {AppRoute} from '../../const';
import ReviewForm from '../review-form/review-form';

type ReviewPageProps = {
  films: Films;
}

function AddReview({films}: ReviewPageProps): JSX.Element {

  const paramId = Number(useParams().id);
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
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={AppRoute.Film.slice(0, -3) + film.id} className="breadcrumbs__link">{film.name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <Link to={AppRoute.MyList}>
                    <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
                  </Link>
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img src={film.posterImage} alt={film.name} width="218" height="327"/>
          </div>
        </div>

        <div className="add-review">
          <ReviewForm />
        </div>

      </section>
    );
  }
}

export default AddReview;
