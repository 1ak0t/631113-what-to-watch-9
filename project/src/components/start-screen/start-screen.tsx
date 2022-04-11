import ListOfFilms from '../list-of-films/list-of-films';
import {Link, useNavigate} from 'react-router-dom';
import {AppRoute} from '../../const';
import {store} from '../../store';
import {addToFavoriteAction} from '../../store/api-actions';
import {useAppSelector} from '../../hooks';
import {getFavorites, getPromo} from '../../store/selectors';
import {useEffect, useState} from 'react';
import UserBlock from '../user-block/user-block';

type StartScreenProps = {
  filmsOnPage: number;
}

function StartScreen({filmsOnPage}: StartScreenProps) {
  const promo = useAppSelector(getPromo);
  const favorites = useAppSelector(getFavorites);
  const navigate = useNavigate();
  const [favoriteStatus, setFavoriteStatus] = useState(false);

  useEffect(() => {
    if (promo) {
      const favoriteFilm = favorites.find((film) => film.id === promo.id);
      if (favoriteFilm) {setFavoriteStatus(true);}
    }
  }, []);

  const handleFavoriteClick = () => {
    if (promo) {
      store.dispatch(addToFavoriteAction({
        id: promo.id,
        status: Number(!favoriteStatus),
      }));
    }
    setFavoriteStatus(!favoriteStatus);
  };

  const getFavoriteButton = () => {
    if (favoriteStatus) {
      return (
        <button className="btn btn--list film-card__button" type="button" onClick={handleFavoriteClick}>
          <svg viewBox="0 0 18 14" width="18" height="14">
            <use xlinkHref="#in-list"></use>
          </svg>
          <span>My list</span>
        </button>
      );
    }

    return (
      <button className="btn btn--list film-card__button" type="button" onClick={handleFavoriteClick}>
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
      </button>
    );
  };

  if (promo) {
    return (
      <>
        <section className="film-card">
          <div className="film-card__bg">
            <img src={promo.backgroundImage} alt={promo.name}/>
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
            <div className="film-card__info">
              <div className="film-card__poster">
                <img src={promo.posterImage} alt={promo.name} width="218" height="327"/>
              </div>

              <div className="film-card__desc">
                <h2 className="film-card__title">{promo.name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{promo.genre}</span>
                  <span className="film-card__year">{promo.released}</span>
                </p>

                <div className="film-card__buttons">
                  <button className="btn btn--play film-card__button" type="button" onClick={() => navigate(AppRoute.Player.slice(0, -3) + promo.id)}>
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  {getFavoriteButton()}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <ListOfFilms filmsOnPage={filmsOnPage} isMore />
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

  return (
    <div>Not downloaded</div>
  );
}

export default StartScreen;
