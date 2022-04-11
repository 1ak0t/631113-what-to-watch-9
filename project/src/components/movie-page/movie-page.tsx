import {Link, Navigate, useParams} from 'react-router-dom';
import {AppRoute} from '../../const';
import FilmPreviews from '../film-previews/film-previews';
import MovieTabs from '../movie-tabs/movie-tabs';
import {useAppSelector} from '../../hooks';
import {getAllFilms, getReviews} from '../../store/selectors';
import {Films} from '../../types/films';
import {store} from '../../store';
import {fetchFilmComments} from '../../store/api-actions';
import {useEffect} from 'react';
import UserBlock from '../user-block/user-block';

type MoviePageProps = {
  countOfSimilarFilms: number;
}

function MoviePage({countOfSimilarFilms}: MoviePageProps): JSX.Element {
  const paramId = Number(useParams().id);
  const films = useAppSelector(getAllFilms);
  const film = films.find((movie) => movie.id === paramId);
  const similar: Films = [];
  useEffect(() => {
    store.dispatch(fetchFilmComments(paramId));
  },[]);

  const reviews = useAppSelector(getReviews);

  //eslint-disable-next-line no-console
  console.log(reviews);

  if (!film) {
    return <Navigate to={AppRoute.Main} />;
  } else {
    return (
      <>
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <div className="film-card__bg">
              <img src={film.backgroundImage} alt={film.name} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header film-card__head">
              <div className="logo">
                <Link to={AppRoute.Main} className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </Link>
              </div>

              <UserBlock />
            </header>

            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{film.name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{film.genre}</span>
                  <span className="film-card__year">{film.released}</span>
                </p>

                <div className="film-card__buttons">
                  <button className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list film-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>
                  <Link to={AppRoute.AddReview.replace(':id', String(film.id))} className="btn film-card__button">Add review</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img src={film.posterImage} alt={film.name} width="218" height="327"/>
              </div>
              <MovieTabs film={film} reviews={reviews} />
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <div className="catalog__films-list">
              <FilmPreviews films={similar} filmsOnPage={countOfSimilarFilms} />
            </div>
          </section>

          <footer className="page-footer">
            <div className="logo">
              <Link to={AppRoute.Main} className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </>
    );
  }
}

export default MoviePage;
