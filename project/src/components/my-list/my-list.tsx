import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import FilmPreviews from '../film-previews/film-previews';
import {useAppSelector} from '../../hooks';
import {getFavorites} from '../../store/selectors';
import UserBlock from '../user-block/user-block';
import {useEffect} from 'react';
import {store} from '../../store';
import {fetchFavorites} from '../../store/api-actions';

function MyList(): JSX.Element {

  useEffect(() => {
    store.dispatch(fetchFavorites);
  }, []);

  const favorites = useAppSelector(getFavorites);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={AppRoute.Main} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmPreviews films={favorites} />
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
  );
}

export default MyList;
