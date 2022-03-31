import {MovieTabsName} from '../../const';
import {useEffect, useRef, useState} from 'react';
import React from 'react';
import MovieOverview from '../movie-overview/movie-overview';
import MovieDetails from '../movie-details/movie-details';
import MovieReviews from '../movie-reviews/movie-reviews';
import {Reviews} from '../../types/reviews';
import {Film} from '../../types/films';

type MovieTabsProps = {
  reviews: Reviews;
  film: Film;
}

function MovieTabs({reviews, film}: MovieTabsProps) {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabClickHandler = (evt: any) => {
    setActiveTab(evt.target.textContent);
  };

  const overviewTabRef = useRef<HTMLLIElement | null>(null);
  const detailsTabRef = useRef<HTMLLIElement | null>(null);
  const reviewsTabRef = useRef<HTMLLIElement | null>(null);

  const removeActiveClass = (tab: React.MutableRefObject<HTMLLIElement | null>) => {
    if (tab.current !== null) {
      tab.current.classList.remove('film-nav__item--active');
    }
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

  useEffect(() => {
    switch (activeTab) {
      case MovieTabsName.Overview:
        if (overviewTabRef.current !== null){
          overviewTabRef.current.classList.add('film-nav__item--active');
        }
        break;
      case MovieTabsName.Details:
        if (detailsTabRef.current !== null){
          detailsTabRef.current.classList.add('film-nav__item--active');
        }
        break;
      case MovieTabsName.Reviews:
        if (reviewsTabRef.current !== null){
          reviewsTabRef.current.classList.add('film-nav__item--active');
        }
    } return (() => {
      removeActiveClass(overviewTabRef);
      removeActiveClass(detailsTabRef);
      removeActiveClass(reviewsTabRef);
    });
  }, [activeTab]);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li ref={overviewTabRef} className="film-nav__item" onClick={tabClickHandler}>
            <a className="film-nav__link">{MovieTabsName.Overview}</a>
          </li>
          <li ref={detailsTabRef} className="film-nav__item" onClick={tabClickHandler}>
            <a className="film-nav__link">{MovieTabsName.Details}</a>
          </li>
          <li ref={reviewsTabRef} className="film-nav__item" onClick={tabClickHandler}>
            <a className="film-nav__link">{MovieTabsName.Reviews}</a>
          </li>
        </ul>
      </nav>
      {chooseTabInfo(activeTab)}
    </div>
  );
}
export default MovieTabs;
