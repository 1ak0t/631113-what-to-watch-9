import {MovieTabsName} from '../../const';
import {useState} from 'react';
import React from 'react';
import MovieOverview from '../movie-overview/movie-overview';
import MovieDetails from '../movie-details/movie-details';
import MovieReviews from '../movie-reviews/movie-reviews';
import {Film} from '../../types/films';
import {Reviews} from '../../types/reviews';

type MovieTabsProps = {
  film: Film;
  reviews: Reviews;
}

function MovieTabs({film, reviews}: MovieTabsProps) {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabClickHandler = (evt: any) => {
    setActiveTab(evt.target.textContent);
  };

  const tabNames = Object.values(MovieTabsName);

  const getMovieTabs = (name: string, clickHandler: (evt: any) => void) => {
    const activeClass = name === activeTab ? 'film-nav__item--active' : '';
    return (
      <li className={`film-nav__item ${activeClass}`} onClick={clickHandler} key={name}>
        <a className="film-nav__link">{name}</a>
      </li>
    );
  };


  const chooseTabInfo = (tab: string) => {
    switch (tab) {
      case MovieTabsName.Overview:
        return <MovieOverview film={film} />;
      case MovieTabsName.Details:
        return <MovieDetails film={film} />;
      case MovieTabsName.Reviews:
        return <MovieReviews reviews={reviews} />;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabNames.map((tabName) => getMovieTabs(tabName, tabClickHandler))}
        </ul>
      </nav>
      {chooseTabInfo(activeTab)}
    </div>
  );
}
export default MovieTabs;
