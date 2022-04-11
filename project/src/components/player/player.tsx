import {useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {getAllFilms} from '../../store/selectors';
import NotFound from '../not-found/not-found';
import {useRef} from 'react';

function Player(): JSX.Element {
  const paramId = Number(useParams().id);
  const films = useAppSelector(getAllFilms);
  const film = films.find((movie) => movie.id === paramId);

  const playButtonRef = useRef<HTMLButtonElement | null>(null);
  const videoPlayerRef = useRef<HTMLVideoElement | null>(null);

  const setVideoState = () => {
    if (videoPlayerRef.current !== null) {
      if (videoPlayerRef.current?.paused) {
        videoPlayerRef.current?.play();
      } else {
        videoPlayerRef.current?.pause();
      }
    }
  };

  const setVideoFullScreen = () => {
    if (videoPlayerRef.current !== null) {
      if (videoPlayerRef.current?.) {
        videoPlayerRef.current?.play();
      } else {
        videoPlayerRef.current?.pause();
      }
    }
  };

  if (film !== undefined) {
    return (
      <div className="player">
        <video ref={videoPlayerRef} src={film.videoLink} className="player__video" poster={film.posterImage} autoPlay onClick={setVideoState}></video>

        <button type="button" className="player__exit">Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
            </div>
            <div className="player__time-value">1:30:29</div>
          </div>

          <div className="player__controls-row">
            <button ref={playButtonRef} type="button" className="player__play" onClick={setVideoState}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">Transpotting</div>

            <button type="button" className="player__full-screen" onClick={setVideoFullScreen}>
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <NotFound />
    );
  }
}

export default Player;
