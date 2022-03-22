import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import StartScreen from '../start-screen/start-screen';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import MoviePage from '../movie-page/movie-page';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import {Film, Films} from '../../types/films';

type AppScreenProps = {
  films: Films;
  similarFilms: Films;
  favorites: Films;
  countOfSimilarFilms: number;
  filmsOnPage: number;
  promo: Film;
}

function App({films, filmsOnPage, similarFilms, countOfSimilarFilms,favorites, promo}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<StartScreen films={films} filmsOnPage={filmsOnPage} promo={promo} />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyList favorites={favorites} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePage films={films} similarFilms={similarFilms} countOfSimilarFilms={countOfSimilarFilms} />}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview films={films} />}
        />
        <Route
          path={AppRoute.Player}
          element={<Player />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
