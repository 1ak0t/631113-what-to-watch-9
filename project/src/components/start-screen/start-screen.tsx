import ListOfFilms from '../list-of-films/list-of-films';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {store} from '../../store';
import {fetchPromoAction} from '../../store/api-actions';
import {useAppSelector} from '../../hooks';
import {getPromo} from '../../store/selectors';
import {useEffect} from 'react';

type StartScreenProps = {
  filmsOnPage: number;
}

function StartScreen({filmsOnPage}: StartScreenProps) {
  useEffect(()=> {
    store.dispatch(fetchPromoAction());
  }, []);

  const promo = useAppSelector(getPromo);

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
              <a className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <ul className="user-block">
              <li className="user-block__item">
                <Link to={AppRoute.MyList}>
                  <div className="user-block__avatar">
                    <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
                  </div>
                </Link>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
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
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <ListOfFilms filmsOnPage={filmsOnPage} isMore />
          <footer className="page-footer">
            <div className="logo">
              <a className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
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
