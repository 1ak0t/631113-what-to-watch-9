import {useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {getAllFilms} from '../../store/selectors';
import NotFound from '../not-found/not-found';
import {useRef} from 'react';

function Player(): JSX.Element {
  const paramId = Number(useParams().id);
  const films = useAppSelector(getAllFilms);
  const film = films.find((movie) => movie.id === paramId);

  const videoPlayerRef = useRef<HTMLVideoElement | null>(null);
  const progressBarRef = useRef<HTMLProgressElement | null>(null);
  const progressToggle = useRef<HTMLDivElement | null>(null);
  const timeLeftBlockRef = useRef<HTMLDivElement | null>(null);

  if (timeLeftBlockRef.current !== null && videoPlayerRef.current !== null) {
    timeLeftBlockRef.current.textContent = `${videoPlayerRef.current.duration}`;
  }

  const setVideoState = () => {
    if (videoPlayerRef.current !== null) {
      if (videoPlayerRef.current.paused) {
        videoPlayerRef.current.play();
      } else {
        videoPlayerRef.current.pause();
      }
    }
  };

  const setVideoFullScreen = () => {
    if (videoPlayerRef.current !== null) {
      videoPlayerRef.current.requestFullscreen();
    }
  };

  const formatVideoTime = (duration: number, current: number) => {
    const hours = Math.floor((duration - current)/3600);
    const minutes = Math.floor((duration - current)%3600/60);
    const seconds = Math.floor((duration - current)%3600%60);

    const hoursDisplay = hours > 0 ? hours : '00';
    const minutesDisplay = minutes > 0 ? minutes : '00';
    const secondsDisplay = seconds > 0 ? seconds : '00';

    if (hours === 0) {
      return `${minutesDisplay}:${secondsDisplay < 10 ? `0${secondsDisplay}` : secondsDisplay}`;
    }

    return `${hoursDisplay}:${minutesDisplay}:${secondsDisplay < 10 ? `0${secondsDisplay}` : secondsDisplay}`;
  };

  const updateTimeLine = () => {
    if (progressBarRef.current !== null && progressToggle.current !== null && videoPlayerRef.current !== null && timeLeftBlockRef.current !== null) {
      progressBarRef.current.value = (videoPlayerRef.current.currentTime / videoPlayerRef.current.duration * 100);
      progressToggle.current.style.left = `${videoPlayerRef.current.currentTime / videoPlayerRef.current.duration * 100}%`;
      timeLeftBlockRef.current.textContent = formatVideoTime(videoPlayerRef.current.duration, videoPlayerRef.current.currentTime);
    }
  };

  if (film !== undefined) {
    return (
      <div className="player">
        <video ref={videoPlayerRef} src={film.videoLink} className="player__video" poster={film.posterImage} autoPlay onClick={setVideoState} onTimeUpdate={updateTimeLine}></video>

        <button type="button" className="player__exit" onClick={() => window.history.back()}>Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress ref={progressBarRef} className="player__progress" value="0" max="100"></progress>
              <div ref={progressToggle} className="player__toggler" style={{left: '0%'}}>Toggler</div>
            </div>
            <div ref={timeLeftBlockRef} className="player__time-value"></div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play" onClick={setVideoState}>
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
